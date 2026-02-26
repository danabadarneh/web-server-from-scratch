# استخدم Node Alpine صغير وخفيف
FROM node:20-alpine

WORKDIR /app

# انسخ package.json و package-lock.json
COPY package*.json ./

# ثبّت dependencies
RUN npm install

# انسخ الكود
COPY . .

# ابني المشروع
RUN npm run build

# اضبط البورت
ENV PORT=3000
EXPOSE 3000

# شغّل المشروع
CMD ["npm", "start"]
