const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

router.post("/", async (req, res) => {
  try {
    console.log("Received data from frontend:", req.body);
    const expense = new Expense(req.body);
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    console.error("Error saving expense:",error);
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Expense.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: "Expense not found" });
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;


