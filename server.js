const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// يخلي مجلد public متاح (لملفات html, css, js)
app.use(express.static(path.join(__dirname, "public")));

// لو فتحت الرابط الأساسي "/" يجيب index.html من public
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// صفحة تجريبية (ممكن تلغيها لو تبي)
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to Pi-CICADA API 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
