const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Heroku compatibility
app.use(function(req, res, next) {
  if (req.headers["x-forwarded-proto"] === "https") {
    res.redirect("http://" + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static("public"));

// Force Express to serve index.html as
// starting point for all routes defined by React
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}...`);
});
