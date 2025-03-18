import  dotenv from "dotenv"; // Import dotenv
dotenv.config();
import Express,{json} from"express";// Load environment variablesimport Express, { json } from "express";
import { connectDB } from "./db/config.js";
import initDB from "./db/init.js"; // Corrected import
import customerRouter from "./router/customer/index.js";
import cust_AuthRoutes from "./router/auth/customerAuth/index.js";
import mech_AuthRoutes from "./router/auth/mechanicAuth/index.js";
import request_SRouter from "./router/customer/requestServices.js";
import mechanicRouter from "./router/mechanic/index.js";
import categoriesRouter from "./router/mechanic/categories.js";
import cust_ImageRouter from "./router/customer/images.js";
import mech_ImageRouter from "./router/mechanic/images.js";
import cust_PasswordRouter from "./router/customer/forgotPassword.js";
import mech_PasswordRouter from "./router/mechanic/forgotPassword.js";
import job_CompletionRouter from "./router/jobCompletion.js";
import cust_LogoutRouter from "./router/auth/customerAuth/logout.js";
import contactRouter from "./router/customer/contact.js"; // Import the contact router
import cors from "cors";
import portfinder from "portfinder";
import sendEmail from "./controller/customer/send_email.js";



const app = Express();

// Middleware to parse JSON
app.use(json());

// Enable CORS
app.use(cors());
console.log("Loaded Email Config:", {
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS ? "SET" : "NOT SET"
});

// Connect to the database and initialize it
const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ Database connected successfully.");

    await initDB(); // Corrected function call
    console.log("✅ Database synced successfully.");

    // Find an available port
    portfinder.getPort({ port: 3306 }, (err, port) => {
      if (err) {
        console.error("❌ Failed to find an available port:", err);
        process.exit(1);
      }

      app.listen(port, () => {
        console.log(`🚀 Server started on http://localhost:${port}`);
      });
    });
  } catch (err) {
    console.error("❌ Failed to start the server:", err);
    process.exit(1);
  }
};

// Routes
app.use("/api", sendEmail);
app.use(customerRouter);
app.use(cust_AuthRoutes);
app.use(mech_AuthRoutes);
app.use(request_SRouter);
app.use(mechanicRouter);
app.use(categoriesRouter);
app.use(cust_ImageRouter);
app.use(mech_ImageRouter);
app.use(cust_PasswordRouter);
app.use(mech_PasswordRouter);
app.use(job_CompletionRouter);
app.use(cust_LogoutRouter);
app.use( contactRouter); // Add the contact router
// Add the sendEmail middleware 

// Start the application
startServer();