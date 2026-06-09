import mongoose from "mongoose";
const product_schema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: [
      {
        url: String,
      },
    ],
    color: [
      {
        type: String,
        required: true,
      },
    ],
    review: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        message: {
          type: String,
        },
        rating: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", product_schema);
