const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Order = require("../models/Order");

// GET reports data
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    const orders = await Order.find();

    const totalRevenue = orders.reduce(
      (sum, o) => sum + (o.totalAmount || 0),
      0
    );

    const totalProducts = products.length;

    const lowStockProducts = products.filter(p => p.stock < 100);

    const pendingOrders = orders.filter(o => o.status === "Pending").length;
    const completedOrders = orders.filter(o => o.status === "Completed").length;

    res.json({
      totalRevenue,
      totalProducts,
      lowStockCount: lowStockProducts.length,
      pendingOrders,
      completedOrders,
      lowStockProducts
    });
  } catch (err) {
    res.status(500).json({ message: "Error generating reports" });
  }
});

module.exports = router;
