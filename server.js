const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.send(data);
  });
});

app.get("/kwik", (req, res) => {
  fs.readFile("public/kwik.htm", (err, data) => {
    res.send(data);
  });
});

app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
