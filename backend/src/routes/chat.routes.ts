import { Router } from 'express';
import { postChat } from '../controllers/chat.controller.js';
import { validate } from '../middleware/validate.js';
import { chatBodySchema } from '../schemas/chat.schema.js';

const router = Router();
router.post('/', validate(chatBodySchema), postChat);
export default router;
