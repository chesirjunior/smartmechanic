import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MySQL Database
connectDB();

// Test API
app.get("/", (req, res) => {
  res.send("✅ Server is running...");
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
