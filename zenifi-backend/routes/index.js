const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const setupRoutes = (app) => {
  app.use("/api/users", userRoutes);
};

module.exports = setupRoutes;
