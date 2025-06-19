# Backend Dockerfile for Firebase Functions
FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci && npm install -g firebase-tools
COPY . .
# Uncomment if you have a build step for TypeScript or similar
# RUN npm run build
EXPOSE 5001
CMD ["firebase", "emulators:start", "--only", "functions"]
