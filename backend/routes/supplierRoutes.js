const express = require("express");
const router = express.Router();
const Supplier = require("../models/Supplier");

// GET all suppliers
router.get("/", async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ message: "Error fetching suppliers" });
  }
});

// ADD new supplier
router.post("/", async (req, res) => {
  try {
    const supplier = new Supplier(req.body);
    await supplier.save();
    res.json(supplier);
  } catch (err) {
    res.status(400).json({ message: "Error adding supplier" });
  }
});

module.exports = router;
