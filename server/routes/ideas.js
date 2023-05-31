const express = require("express");

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("../db");

const checkMillionDollarIdea = require("../checkMillionDollarIdea");

const ideasRouter = express.Router();

ideasRouter.get("/", (req, res, next) => {
  const ideas = getAllFromDatabase("ideas");

  res.send(ideas);
});

ideasRouter.post("/", checkMillionDollarIdea, (req, res, next) => {
  const newIdea = addToDatabase("ideas", req.body);

  res.status(201).send(newIdea);
});

ideasRouter.get("/:ideaId", (req, res, next) => {
  const idea = getFromDatabaseById("ideas", req.params.ideaId);

  if (idea) {
    res.send(idea);
  } else {
    res.status(404).send();
  }
});

ideasRouter.put("/:ideaId", (req, res, next) => {
  const { ideaId } = req.params;

  const idea = getFromDatabaseById("ideas", ideaId);

  if (!idea) {
    return res.status(404).send();
  }

  const updatedIdea = updateInstanceInDatabase("ideas", req.body);

  res.send(updatedIdea);
});

ideasRouter.delete("/:ideaId", (req, res, next) => {
  const { ideaId } = req.params;

  const idea = getFromDatabaseById("ideas", ideaId);

  if (!idea) {
    return res.status(404).send();
  }

  const deleted = deleteFromDatabasebyId("ideas", ideaId);

  if (deleted) {
    res.status(204);
  } else {
    res.status(500);
  }

  res.send();
});

module.exports = ideasRouter;
