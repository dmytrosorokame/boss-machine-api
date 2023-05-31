const express = require("express");

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("../db");

const minionsRouter = express.Router();

minionsRouter.get("/", (req, res, next) => {
  const minions = getAllFromDatabase("minions");

  res.send(minions);
});

minionsRouter.post("/", (req, res, next) => {
  const newMinion = addToDatabase("minions", req.body);

  res.status(201).send(newMinion);
});

minionsRouter.get("/:minionId", (req, res, next) => {
  const minion = getFromDatabaseById("minions", req.params.minionId);

  if (minion) {
    res.send(minion);
  } else {
    res.status(404).send();
  }
});

minionsRouter.put("/:minionId", (req, res, next) => {
  const { minionId } = req.params;

  const minion = getFromDatabaseById("minions", minionId);

  if (!minion) {
    res.status(404).send();
  } else {
    const updatedMinion = updateInstanceInDatabase("minions", req.body);

    res.send(updatedMinion);
  }
});

minionsRouter.delete("/:minionId", (req, res, next) => {
  const { minionId } = req.params;

  const minion = getFromDatabaseById("minions", minionId);

  if (!minion) {
    return res.status(404).send();
  }

  const deleted = deleteFromDatabasebyId("minions", minionId);

  if (deleted) {
    res.status(204);
  } else {
    res.status(404);
  }

  res.send();
});

module.exports = minionsRouter;
