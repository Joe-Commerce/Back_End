const express = require("express");
const app = express();

const products = require("./routes/product");

app.use(express.json()); // Include middleware for JSON handling
app.use("/api/v1", products); // Setup route for products

module.exports = app;
