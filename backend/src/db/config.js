import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const sequelize = new Sequelize(
  process.env.automechanics_db || "automechanics_db",
  process.env.root|| "root",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.localhost|| "localhost",
    port: process.env.DB_PORT || 3306, // Default MySQL port
    dialect: "mysql",
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Database connected successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the MySQL database:", error);
    process.exit(1); // Exit process with failure
  }
};

export { connectDB };
export default sequelize;
