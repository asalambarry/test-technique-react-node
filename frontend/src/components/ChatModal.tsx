import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string };

export default function ChatModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [messages, setMessages] = useState<ChatMessage[]>(() => {

        // Historique des messages persisté dans sessionStorage
        const saved = sessionStorage.getItem('chat:history');
        return saved ? JSON.parse(saved) : [];
    });

    // Champ de texte pour l’entrée de l’utilisateur
    const [input, setInput] = useState('');

    // Indique si le chat est en cours de chargement
    const [loading, setLoading] = useState(false);

    // Indique si le chat est en cours d’annulation
    const abortRef = useRef<AbortController | null>(null);
    const chatBoxRef = useRef<HTMLDivElement | null>(null);


    // URL de l’API backend
    const apiBase = useMemo(() => (import.meta as any).env?.VITE_BACKEND_URL ?? 'http://localhost:3001/api', []);

    // Persiste l’historique des messages dans sessionStorage
    useEffect(() => {
        sessionStorage.setItem('chat:history', JSON.stringify(messages));
    }, [messages]);


    // Auto scroll vers le bas à chaque nouveau message
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages, loading]);


    // Ajoute un message assistant à l’historique
    const appendAssistant = useCallback((delta: string) => {
        setMessages(prev => {
            const next = [...prev];
            const i = next.length - 1;
            if (i >= 0 && next[i].role === 'assistant') {
                next[i] = { ...next[i], content: next[i].content + delta };
            }
            return next;
        });
    }, []);

    // Envoie un message utilisateur et gère le streaming
    async function send() {
        if (!input.trim() || loading) return;
        const userMsg: ChatMessage = { role: 'user', content: input.trim() };

        setMessages(prev => [...prev, userMsg, { role: 'assistant', content: '' }]);
        setInput('');
        setLoading(true);

        // Tentative streaming d'abord
        try {
            // Tentative streaming d'abord
            const controller = new AbortController();
            abortRef.current = controller;
            const res = await fetch(`${apiBase}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMsg], stream: true }),
                signal: controller.signal
            });
            if (res.ok && res.body) {
                const reader = res.body.getReader();
                const decoder = new TextDecoder();
                while (true) {
                    const { value, done } = await reader.read();
                    if (done) break;
                    appendAssistant(decoder.decode(value, { stream: true }));
                }
            } else {
                // Fallback non‑stream
                const r2 = await fetch(`${apiBase}/chat`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ messages: [...messages, userMsg] })
                });
                const data = await r2.json().catch(() => ({}));
                const answer = data?.answer ?? 'Réponse indisponible.';
                appendAssistant(answer);
            }
        } catch (e) {
            appendAssistant("Erreur lors de l'appel API.");
        } finally {
            setLoading(false);
            abortRef.current = null;
        }
    }

    function stop() {
        abortRef.current?.abort();
    }

    if (!open) return null;
    return (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Chat IA">
            <div className="modal-content">
                <div className="chat-header">
                    <h3>Chatbot Tessan</h3>
                    <button className="close" onClick={onClose} aria-label="Fermer">×</button>
                </div>

                <div ref={chatBoxRef} className="chat-box" aria-live="polite">
                    {messages.map((m, i) => (
                        <div key={i} className={`row ${m.role}`}>
                            {m.role === 'assistant' && <div className="avatar">A</div>}
                            <div className={`bubble ${m.role}`}>{m.content}</div>
                            {m.role === 'user' && <div className="avatar">U</div>}
                        </div>
                    ))}
                    {loading && (
                        <div className="row assistant">
                            <div className="avatar">A</div>
                            <div className="bubble assistant typing"><span></span><span></span><span></span></div>
                        </div>
                    )}
                </div>

                <div className="chat-input">
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') send(); }}
                        placeholder="Votre message"
                        aria-label="Saisissez votre message"
                    />
                    <button className="primary" onClick={send} disabled={loading}>{loading ? 'Envoi…' : 'Envoyer'}</button>
                    {loading && <button onClick={stop}>Stop</button>}
                </div>
            </div>
        </div>
    );
}
