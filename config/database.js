import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create Sequelize instance using .env variables
const sequelize = new Sequelize(
  process.env.DB_NAME || "automechanic_db", // Database name
  process.env.DB_USER || "root", // Database user
  process.env.DB_PASSWORD || "", // Database password
  {
    host: process.env.DB_HOST || "localhost", // Database host
    port: parseInt(process.env.DB_PORT, 10) || 3306, // Convert port to integer
    dialect: "mysql", // Using MySQL
    logging: false, // Disable logging queries in console
  }
);

// Function to check database connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Database connected successfully.");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    throw error; // Throw error to handle it in app.js
  }
};

export { connectDB, sequelize };