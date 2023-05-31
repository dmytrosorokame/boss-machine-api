const express = require("express");

const ideasRouter = express.Router();

ideasRouter.get("/", (req, res, next) => {});

ideasRouter.post("/", (req, res, next) => {});

ideasRouter.get("/:ideaId", (req, res, next) => {});

ideasRouter.put("/:ideaId", (req, res, next) => {});

ideasRouter.delete("/:ideaId", (req, res, next) => {});

module.exports = ideasRouter;
