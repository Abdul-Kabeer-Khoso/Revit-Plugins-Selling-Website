import express from "express";
import cors from "cors";

import "./config/env.js";

import connectDB from "./db/db.js";

import homeRoutes from "./routes/homeRoutes.js";
import downloadRoutes from "./routes/downloadRoutes.js";
import familiesRoutes from "./routes/familiesRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cloudinaryRoutes from "./routes/cloudinaryRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";
import licenseRoutes from "./routes/licenseRoutes.js";
import transporter from "./config/mailer.js";
import { stripeWebhook } from "./controllers/stripeController.js";

const app = express();

connectDB();

app.use(cors());

// Stripe webhook MUST come before express.json()
app.post(
  "/api/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);

// Parse JSON for every other route
app.use(express.json());

// Routes
transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Connection Failed:");
    console.log(error);
  } else {
    console.log("SMTP Server Ready:", success);
  }
});

app.get("/test-email", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: `"Revit Plugins" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Test Email",
      text: "SMTP test successful",
    });

    console.log(info);

    res.send("Email sent successfully");
  } catch (error) {
    console.log("EMAIL FAILED");
    console.log(error);

    res.status(500).send(error.message);
  }
});

app.use("/api", adminRoutes);
app.use("/api", homeRoutes);
app.use("/api", downloadRoutes);
app.use("/api", familiesRoutes);
app.use("/api", cloudinaryRoutes);
app.use("/api", stripeRoutes);
app.use("/api", licenseRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
