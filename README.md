# Expense Tracker App

A **full-stack Expense Tracker** built using **HTML, CSS, JavaScript, Node.js, Express.js,
MongoDB Atlas**, and **Chart.js** for real-time visual analytics.It allows users to track 
their income and expenses, visualize data through pie charts, and store transactions 
securely in the cloud.

---

## 🚀 Features

- ✅ Add, view, and delete expenses & incomes
- 📊 Pie chart visualization with Chart.js
- 💾 Data persistence with MongoDB Atlas
- 🌗 Dark mode toggle (with local storage memory)
- 🔐 .env protected for secure database credentials

---

## 📁 Folder Structure

```bash
Expense_Tracker_App/
├── backend/
│   ├── models/             # Mongoose schema for expense
│   ├── routes/             # API routes
│   ├── .env                # MongoDB Atlas URI (NOT pushed to GitHub)
│   ├── server.js           # Backend entry point
│   ├── package.json
├── frontend/
│   ├── index.html          # Main HTML page
│   ├── style.css           # CSS styling
│   ├── script.js           # Frontend JS with fetch & chart rendering
```

---

## 🔧 Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Chart.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Cloud)
- **Tools:** Git, GitHub, IntelliJ IDEA, CMD

---

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Tushar-2225/Expense_Tracker_App.git
   ```

2. Navigate to backend:
   ```bash
   cd Expense_Tracker_App/backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create `.env` file:
   ```env
   MONGO_URI=your_mongodb_atlas_connection_string
   ```

5. Run the server:
   ```bash
   node server.js
   ```

6. Open `index.html` in your browser.

---

## 📚 Learning Outcome

- Full-stack integration (frontend ↔ backend ↔ database)
- REST API using Express.js
- Using MongoDB Atlas in cloud mode
- Data visualization using Chart.js
- Dark/light theme toggling
- GitHub project deployment and management

---

## 🙌 Acknowledgements

- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Chart.js](https://www.chartjs.org/)
- [Node.js](https://nodejs.org/)

---

## 📌 Author

**Tushar Pandey**  

---

## 📌 License

This project is open source and available under the [MIT License](LICENSE).
