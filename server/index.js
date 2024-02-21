
require('dotenv').config(); 
const express = require("express");
const mysql = require("mysql");
const cors = require("cors"); 

const app = express();

app.use(express.json());
app.use(cors()); 

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database successfully.');
});


app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, result) => {
    if (err) {
      console.error("Error inserting into database:", err);
      res.status(500).send("An error occurred while storing user data.");
      return;
    }
    console.log("User data stored successfully.");
    res.status(200).send("User data stored successfully.");
  });
});

// Fetch all books without pagination
app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "An error occurred while fetching books data." });
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(3306, () => {
  console.log("Server is running in port 3306");
});
