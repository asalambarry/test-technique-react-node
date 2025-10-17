import OpenAI from 'openai';
import { env } from '../config/env.js';

const client = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    baseURL: env.OPENAI_BASE_URL
});

export async function chatOnce(params: {

    // prend un tableau de messages avec le role et le contenu
    messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
    model?: string;
    temperature?: number;
}) {


    // Applique des valeurs par défaut depuis l’env
    const { messages, model = env.OPENAI_MODEL, temperature = env.OPENAI_TEMPERATURE } = params;


    // Crée une requête de chat complet avec OpenAI
    const completion = await client.chat.completions.create({
        model,
        temperature,
        messages
    });

    // Retourne la réponse du chat
    const answer = completion.choices?.[0]?.message?.content ?? '';
    return { answer };
}

/** Générateur async pour le streaming SSE/chunked */
export async function* chatStream(params: {
    messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
    model?: string;
    temperature?: number;
}) {
    const { messages, model = env.OPENAI_MODEL, temperature = env.OPENAI_TEMPERATURE } = params;

    const stream = await client.chat.completions.create({
        model,
        temperature,
        messages,
        stream: true
    });

    for await (const chunk of stream) {
        const delta = chunk.choices?.[0]?.delta?.content;
        if (delta) yield delta;
    }
}
