const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "data", "questions.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(raw);

    res.status(200).json(parsed.questions || []);
  } catch (error) {
    res.status(500).json({ message: "Failed to load questions" });
  }
};
