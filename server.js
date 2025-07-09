require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin:
  "https://expense-tracker-frontend-g3p1.onrender.com"
}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB error:", err));

const expenseRoutes = require("./routes/expenses");
app.use("/api/expenses", expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
