import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

console.log("Loaded Email Config:", {
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS ? "****" : "NOT SET",
});

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ Email credentials are missing. Check your .env file.");
  process.exit(1);
}

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com", // Fallback to Gmail SMTP
  port: Number(process.env.EMAIL_PORT) || 587, // Fallback to port 587
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail app password
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certs
  },
  debug: true, // Enable debugging for detailed logs
});

// Send email endpoint
export const sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  // Validate input
  if (!to || !subject || !text) {
    return res.status(400).json({ error: "Missing required email fields." });
  }

  try {
    // Send email
    const mailOptions = {
      from: `"Mechanic Service" <${process.env.EMAIL_USER}>`, // Sender address
      to, // Recipient address
      subject, // Subject line
      text, // Plain text body
    };

    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent successfully to: ${to}`);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error.message);

    // Handle specific SMTP connection errors
    if (error.code === "ETIMEDOUT") {
      res.status(500).json({ error: "Connection to the SMTP server timed out. Check your network or SMTP settings." });
    } else if (error.code === "EAUTH") {
      res.status(500).json({ error: "Authentication failed. Check your email credentials." });
    } else {
      res.status(500).json({ error: "Failed to send email", details: error.message });
    }
  }
};

export default sendEmail;