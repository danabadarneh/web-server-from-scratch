import { readFile } from "fs/promises";

const run = async () => {
  const data = await readFile("./src/app/index.html", "utf-8");
  console.log("File content length:", data.length);
};

run();
