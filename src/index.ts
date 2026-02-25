// src/index.ts

import express from "express";
import { json } from "body-parser";
import { config } from "./config";

const app = express();
app.use(json());

// مثال endpoint صحي
app.get("/health", (_req, _res) => {
  _res.status(200).send({ status: "ok" });
});

// بدء السيرفر
const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
