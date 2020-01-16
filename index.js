const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Inicio");
});

app.listen(3333);
