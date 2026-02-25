import express from "express";
import { config } from "./config.js";
const app = express();
const PORT = 8080;
// ---------- Middleware to log non-OK responses ----------
function middlewareLogResponses(req, res, next) {
    res.on("finish", () => {
        if (res.statusCode !== 200) {
            console.log(`[NON-OK] ${req.method} ${req.url} - Status: ${res.statusCode}`);
        }
    });
    next();
}
// ---------- Middleware to count file server hits ----------
function middlewareMetricsInc(req, res, next) {
    config.fileserverHits += 1;
    next();
}
// ---------- Register middlewares ----------
app.use(middlewareLogResponses);
app.use("/app", middlewareMetricsInc, express.static("./src/app"));
// ---------- ADMIN: reset (POST only) ----------
app.post("/admin/reset", (req, res) => {
    config.fileserverHits = 0;
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.send("OK");
});
// ---------- ADMIN: metrics (HTML) ----------
app.get("/admin/metrics", (req, res) => {
    res.set("Content-Type", "text/html; charset=utf-8");
    res.send(`
<html>
  <body>
    <h1>Welcome, Chirpy Admin</h1>
    <p>Chirpy has been visited ${config.fileserverHits} times!</p>
  </body>
</html>
  `);
});
// ---------- API: validate_chirp (length + profanity filter) ----------
app.post("/api/validate_chirp", express.json(), (req, res) => {
    try {
        let { body } = req.body;
        if (typeof body !== "string") {
            return res.status(400).json({ error: "Invalid request" });
        }
        if (body.length > 140) {
            return res.status(400).json({ error: "Chirp is too long" });
        }
        // ---------- Profanity filter ----------
        const profaneWords = ["kerfuffle", "sharbert", "fornax"];
        profaneWords.forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, "gi");
            body = body.replace(regex, "****");
        });
        return res.status(200).json({ cleanedBody: body });
    }
    catch (err) {
        return res.status(500).json({ error: "Something went wrong" });
    }
});
// ---------- Start server ----------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
