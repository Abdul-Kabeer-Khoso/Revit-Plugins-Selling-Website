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

const app = express();

connectDB();

app.use(cors());

// Stripe webhook MUST come before express.json()
app.post("/api/webhook", express.raw({ type: "application/json" }));

// Parse JSON for every other route
app.use(express.json());

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
