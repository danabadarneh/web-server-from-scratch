// src/main.ts
import { readFile } from "fs/promises";

// Example function to read a file
export const readConfig = async (filePath: string) => {
  try {
    const data = await readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to read config file:", err);
    return null;
  }
};

// Example usage (can be removed if not needed)
const _unused = "This is intentionally unused to test linting";

(async () => {
  const config = await readConfig("./config.json");
  console.log("Config loaded:", config);
})();
