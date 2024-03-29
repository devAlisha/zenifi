const express = require("express");
const cors = require("cors");

const setupMiddlewares = (app) => {
  app.use(cors());
  app.use(express.json());
};

module.exports = setupMiddlewares;
