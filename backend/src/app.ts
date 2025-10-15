// import cors from 'cors';
// import express from 'express';
// import { env } from './config/env.js';

// const app = express();

// // Middlewares de base
// app.use(cors());
// app.use(express.json());

// // Route de santé
// app.get('/health', (req, res) => {
//   res.json({
//     status: 'ok',
//     timestamp: new Date().toISOString(),
//     env: {
//       nodeEnv: process.env.NODE_ENV || 'development',
//       port: env.PORT
//     }
//   });
// });

// // Route d'accueil
// app.get('/', (req, res) => {
//   res.json({ message: 'API Server is running' });
// });

// // 404
// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// // Gestion d'erreurs simple (sans fuite d'infos sensibles)
// app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
//   console.error(err);
//   res.status(500).json({ error: 'Internal server error' });
// });

// export { app };


import cors from 'cors';
import express from 'express';
import { errorHandler, notFound } from './middleware/error.js';
import { rateLimiter } from './middleware/rateLimit.js';
import chatRouter from './routes/chat.routes.js';

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(rateLimiter);

app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/api/chat', chatRouter);


// Route d'accueil
app.get('/', (req, res) => {
  res.json({ message: 'API Server is running' });
});

app.use(notFound);
app.use(errorHandler);

export default app;
