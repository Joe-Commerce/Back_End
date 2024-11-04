const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ["true", "Please enter the product name"],
    trim: true,
    maxlength: [100, "Product name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    default: 0.0,
  },
  description: {
    type: String,
    required: [true],
  },
  ratings: {
    type: String,
    default: 0,
  },
  images: [
    {
      image: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter the category"],
    enum: {
      values: [
        "Electronics",
        "Mobile Phones",
        "Laptops",
        "Accessories",
        "Headphones",
        "Food",
        "Books",
        "Clothes/Shoes",
        "Beauty/Health",
        "Sports",
        "Outdoor",
        "Home",
      ],
      message: "Please select correct category",
    },
  },
  seller: {
    type: String,
    required: [true, "please enter the product seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter the stocks"],
    maxlength: [20, "Product stock cannot exceed 20"],
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  review: [
    {
      name: {
        type: String,
        required: [true],
      },
      ratings: {
        type: String,
        required: [true],
      },
      comment: {
        type: String,
        required: [true],
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

let schema = mongoose.model("product", productSchema);

module.exports = schema;
