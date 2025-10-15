import { z } from 'zod';

const messageSchema = z.object({
    role: z.enum(['system', 'user', 'assistant']),
    content: z.string().min(1).max(4000)
});

const modelEnum = z.enum(['gpt-4o-mini', 'gpt-4.1-mini']);

export const chatBodySchema = z.object({
    messages: z.array(messageSchema).min(1),
    // optionnels en entrée mais normalisés par défaut
    model: modelEnum.optional().default('gpt-4o-mini'),
    temperature: z.number().min(0).max(1).optional().default(0.7),
    stream: z.boolean().optional()
});
export type ChatBody = z.infer<typeof chatBodySchema>;
