import { } from 'dotenv/config';

export const env = {
    PORT: Number(process.env.PORT ?? 3001),
    OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? '',
    RATE_LIMIT_PER_MIN: Number(process.env.RATE_LIMIT_PER_MIN ?? 20),
    OPENAI_MODEL: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
    OPENAI_TEMPERATURE: Number(process.env.OPENAI_TEMPERATURE ?? 0.7),
    OPENAI_BASE_URL: process.env.OPENAI_BASE_URL // optionnel
};

if (!env.OPENAI_API_KEY) {
    console.warn('Missing OPENAI_API_KEY');
}
