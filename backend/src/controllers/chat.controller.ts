import type { Request, Response } from 'express';
import type { ChatBody } from '../schemas/chat.schema.js';
import { chatOnce, chatStream } from '../services/openai.service.js';
import { logger } from '../utils/logger.js';
import { withLatency } from '../utils/timer.js';

const SYSTEM_GUARDRAIL = `Tu es un assistant pour des professionnels de santé.
Réponds clairement, en français, et renvoie vers un médecin pour toute question clinique sensible.`;

export async function postChat(req: Request, res: Response) {
    const { messages, model, temperature, stream } = (req as any).validated as ChatBody;

    // Injecte un message système (guardrails), sans exposer la clé
    const msgs = [{ role: 'system' as const, content: SYSTEM_GUARDRAIL }, ...messages];

    if (stream) {
        // SSE-ish headers (ou chunked)
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.setHeader('Transfer-Encoding', 'chunked');

        const { ms } = await withLatency(async () => {
            for await (const token of chatStream({ messages: msgs, model, temperature })) {
                res.write(token);
            }
        });

        logger.info({ ms }, 'chat streamed');
        return res.end();
    }

    const { res: data, ms } = await withLatency(() => chatOnce({ messages: msgs, model, temperature }));
    logger.info({ ms }, 'chat non-stream');
    return res.json(data);
}
