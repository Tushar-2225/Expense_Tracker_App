const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ["income", "expense"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Expense", ExpenseSchema);
