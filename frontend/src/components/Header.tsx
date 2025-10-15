export default function Header({ onOpenChat }: { onOpenChat: () => void }) {
    return (
        <header className="container header" aria-label="En-tête">
            <div className="logo" aria-label="Logo">TESSAN</div>

            <nav aria-label="Navigation principale">
                <a href="#usecases">Cas d’usage</a>
                <a href="#stats">Chiffres clés</a>
                <a href="#testimonials">Témoignages</a>
            </nav>

            <button
                className="cta"
                aria-label="Essayer le chatbot"
                onClick={onOpenChat}
            >
                Essayer le chatbot
            </button>
        </header>
    );
}
