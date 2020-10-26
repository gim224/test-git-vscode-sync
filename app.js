const express = require("express");

const app = express();

const cources = [
  { id: 1, name: "cource1" },
  { id: 2, name: "cource2" },
  { id: 3, name: "cource3" },
];

app.get("/", (req, res) => {
  res.send("Hell World - I'm NODEMONs");
});

app.get("/api/cources", (req, res) => {
  res.send(cources);
});

app.get("/api/cources/:id", (req, res) => {
  res.send(
    cources.find((item) => {
      return item.id == req.params.id;
    })
  );
});

app.listen(3000, () => {
  console.log("My Restful API running on port 3000");
});
