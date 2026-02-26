import express from 'express';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get('/', (req, res) => {
  res.send('Hello Notely!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
