const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  items: [
    {
      menuItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem"
      },
      quantity: {
        type: Number,
        min: 1
      }
    }
  ]
});

module.exports = mongoose.model("Cart", cartSchema);
