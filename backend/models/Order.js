const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true
  },
  customer: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending", "Processing", "Completed"],
    required: true
  }
});

module.exports = mongoose.model("Order", orderSchema);
