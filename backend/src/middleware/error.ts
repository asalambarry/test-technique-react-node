import type { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger.js';

export function notFound(_req: Request, res: Response) {
    res.status(404).json({ error: 'Not found' });
}

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
    logger.error({ err }, 'Unhandled error');
    const status = err.status ?? 500;
    res.status(status).json({ error: err.message ?? 'Server error' });
}
