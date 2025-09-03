const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html for root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Mock escrow endpoints
let escrow = { status: "none", amount: 0 };

app.post("/api/escrow/create", (req, res) => {
  const { amount } = req.body || {};
  escrow = { status: "created", amount };
  res.json({ message: "Escrow created", escrow });
});

app.post("/api/escrow/release", (req, res) => {
  if (escrow.status === "created") {
    escrow.status = "released";
    res.json({ message: "Escrow released", escrow });
  } else {
    res.status(400).json({ error: "No active escrow to release" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
