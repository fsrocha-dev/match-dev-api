const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes.js");
require("dotenv/config");

const app = express();

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);