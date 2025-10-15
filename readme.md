# Test Technique – Backend (Express/TypeScript) & Frontend (React/Vite)

## Prérequis
- Node.js LTS (20.x ou 22.x recommandé)
- npm
- Docker & Docker Compose (optionnel mais recommandé)

## Démarrage rapide (Docker)
```bash
# À la racine du projet
docker compose up --build
# Frontend: http://localhost:8080
# Backend:  http://localhost:3001/api
```
- Le backend charge ses variables depuis `backend/.env`.
- Le frontend reçoit `VITE_BACKEND_URL` via `docker-compose.yml`.

## Configuration (backend/.env)
Crée `backend/.env` (exemple):
```env
OPENAI_API_KEY=sk-...
PORT=3001
OPENAI_BASE_URL=https://api.openai.com/v1
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX=60
OPENAI_MODEL=gpt-4o-mini
OPENAI_TEMPERATURE=0.1
```

## Lancer en local (sans Docker)
### Backend
```bash
cd backend
npm install
npm run dev            # démarrage en mode watch (tsx)
# ou: npm run dev:nodemon
# API: http://localhost:3001/api
```

### Frontend
```bash
cd frontend
npm install

npm run dev
```

## Build / Production
### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## Endpoint principal
- `POST /api/chat`
  - Body JSON: `{ messages: [{ role: 'user'|'assistant'|'system', content: string }], stream?: boolean }`
  - Réponse JSON: `{ answer: string }` (si `stream=false` ou omis)
  - Réponse streaming: `text/plain` en chunks (si `stream=true`)

Exemple rapide (non-stream):
```bash
curl -X POST http://localhost:3001/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"messages":[{"role":"user","content":"Bonjour"}]}'
```

## Tests
### Backend (Vitest)
- Ajoute les scripts si besoin dans `backend/package.json`:
```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "coverage": "vitest run --coverage"
  }
}
```
- Lance:
```bash
cd backend
npm run test
```

### Frontend (Vitest + RTL)
- Installer si besoin:
```bash
cd frontend
npm i -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```
- Scripts (exemple):
```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```
