const express = require("express");
const dbConnect = require("./config/db");
const setupMiddlewares = require("./middlewares");
const setupRoutes = require("./routes");
require("dotenv").config();

const app = express();
const port = 8000;

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

const bootServer = async () => {
  setupMiddlewares(app);
  setupRoutes(app);
  await dbConnect();
  startServer();
};

bootServer();
