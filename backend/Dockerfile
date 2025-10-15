# ---- Builder: compile TypeScript en JS ----
    FROM node:22.12-alpine AS builder
    WORKDIR /app

    # Copier manifests et installer dépendances (dev inclus, pour tsc)
    COPY package*.json ./
    RUN npm ci

    # Copier le code et compiler
    COPY tsconfig.json ./tsconfig.json
    COPY src ./src
    RUN npm run build

    # ---- Runner: image légère prod ----
    FROM node:22.12-alpine AS runner
    ENV NODE_ENV=production
    WORKDIR /app

    # Installer uniquement les deps prod
    COPY package*.json ./
    RUN npm ci --omit=dev

    # Copier les fichiers compilés
    COPY --from=builder /app/dist ./dist

    # Port d'écoute
    EXPOSE 3001

    # Lancement
    CMD ["node", "dist/index.js"]