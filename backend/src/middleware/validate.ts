import type { NextFunction, Request, Response } from 'express';
import type { ZodSchema } from 'zod';

export const validate =
    (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: 'Invalid body', details: parsed.error.flatten() });
        }
        (req as any).validated = parsed.data;
        next();
    };
