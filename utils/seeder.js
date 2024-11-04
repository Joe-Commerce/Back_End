const Product = require("../models/productsModel");
const Products = require("../data/product.json");
const dotenv = require("dotenv").config({ path: "config/.env" });
const connectDatabase = require("../config/database");

connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany(Products);
    console.log("Delete successfully");

    await Product.insertMany(Products);
    console.log("Insertion is suceessfully");
  } catch {
    console.log(error.message);
  }
};

seedProducts();
