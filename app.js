const express = require("express");
const app = express();
const errorMiddleware = require("../back-end/middlewares/error");

const products = require("./routes/product");

app.use(express.json()); // Include middleware for JSON handling
app.use("/api/v1", products); // Setup route for products

app.use(errorMiddleware);

module.exports = app;
