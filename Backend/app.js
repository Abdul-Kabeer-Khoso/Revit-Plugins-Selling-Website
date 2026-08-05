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
import { stripeWebhook } from "./controllers/stripeController.js";
import brevo from "./config/brevo.js";

const app = express();

connectDB();

app.use(
  cors({
    origin: [
      "https://www.hamstruk.com",
      "https://hamstruk.com",
      "http://localhost:5173",
    ],
    credentials: true,
  }),
);

// Stripe webhook MUST come before express.json()
app.post(
  "/api/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);

// Parse JSON for every other route
app.use(express.json());

app.get("/test-brevo", async (req, res) => {
  try {
    const result = await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: "Hamstruk",
        email: "support@hamstruk.com",
      },

      to: [
        {
          email: "abdulkabeerkhoso082@gmail.com",
        },
      ],

      subject: "Brevo Test Email",

      htmlContent: `
        <h2>Hello 🎉</h2>
        <p>This email is sent using Brevo API.</p>
      `,
    });

    console.log(result);

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json(error);
  }
});

// Routes

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
