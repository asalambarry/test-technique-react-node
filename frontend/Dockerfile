# frontend/Dockerfile
FROM node:22.12-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
COPY . .
RUN npm run build

FROM node:22.12-alpine
WORKDIR /srv
RUN npm i -g http-server@14.1.1
COPY --from=build /app/dist ./dist
EXPOSE 8080
CMD ["http-server","dist","-p","8080","-c-1","--cors"]