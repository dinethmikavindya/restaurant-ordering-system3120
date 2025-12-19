const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
    story: { type: String },
    imageUrl: { type: String },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },

    ingredients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inventory"
      }
    ],

    filterTags: [{ type: String, lowercase: true }],

    availability: {
      type: Boolean,
      default: true
    },

    popularityScore: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("MenuItem", menuItemSchema);
