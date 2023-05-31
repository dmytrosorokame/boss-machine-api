const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 4001;

app.use(cors({ origin: "http://localhost:4001" }));

app.use(bodyParser.json());

const apiRouter = require("./server/api");

app.use("/api", apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) {
  app.listen(PORT);
}

module.exports = app;
