import OpenAI from 'openai';
import { env } from '../config/env.js';

const client = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
    baseURL: env.OPENAI_BASE_URL // si besoin (Azure, proxy, etc.)
});

export async function chatOnce(params: {
    messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
    model?: string;
    temperature?: number;
}) {
    const { messages, model = env.OPENAI_MODEL, temperature = env.OPENAI_TEMPERATURE } = params;

    const completion = await client.chat.completions.create({
        model,
        temperature,
        messages
    });

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
