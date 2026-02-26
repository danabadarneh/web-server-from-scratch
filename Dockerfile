# استخدم Node Alpine صغير الحجم
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/main.js"]
