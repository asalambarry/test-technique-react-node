// import { app } from './app.js';
// import { env } from './config/env.js';

// // Sécurité: ne pas démarrer sans clé OpenAI
// // if (!env.OPENAI_API_KEY) {
// //   console.error('OPENAI_API_KEY manquante. Arrêt du serveur.');
// //   process.exit(1);
// // }

// const PORT = env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
//   console.log(`📊 Health check: http://localhost:${PORT}/health`);
// });


import app from './app.js';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';

// Fail-fast: ne pas démarrer sans clé OpenAI
if (!env.OPENAI_API_KEY) {
  logger.error('OPENAI_API_KEY manquante. Arrêt du serveur.');
  process.exit(1);
}

app.listen(env.PORT, () => logger.info({ port: env.PORT }, 'Backend ready 🚀'));
