const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// serve static HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// handle login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    res.send("✅ Login successful!");
  } else {
    res.send("❌ Invalid credentials!");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on port
