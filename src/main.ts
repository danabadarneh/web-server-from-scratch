import express, { Request, Response } from 'express';

const app = express();

// مثال endpoint بسيط
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Notely!');
});

// convert PORT from string to number
const PORT = Number(process.env.PORT) || 3000;

// استمع على كل الـ IPs عشان Docker
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
