import rateLimit from 'express-rate-limit';
import { env } from '../config/env.js';

export const rateLimiter = rateLimit({
    windowMs: 60_000,
    limit: env.RATE_LIMIT_PER_MIN,
    standardHeaders: true,
    legacyHeaders: false
});
