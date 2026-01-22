
const path = require("path");
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(process.cwd(), "public/images")));

console.log("Serving images from:", path.join(__dirname, "public", "images"));

/**
 * GET /list
 * GET /list?search=<gamename>
 */
app.get("/list", (req, res) => {
  const search = (req.query.search || "").trim();

  if (!search) {
    const rows = db.prepare("SELECT * FROM game ORDER BY id DESC").all();
    return res.json(rows);
  }

  // Simple fuzzy-ish search: case-insensitive contains
  const rows = db
    .prepare("SELECT * FROM game WHERE LOWER(title) LIKE ? ORDER BY id DESC")
    .all(`%${search.toLowerCase()}%`);

  res.json(rows);
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
