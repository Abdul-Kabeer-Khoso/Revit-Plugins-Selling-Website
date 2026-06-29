import express from "express";
import cors from "cors";
import "./config/env.js";
import connectDB from "./db/db.js";
import homeRoutes from "./routes/homeRoutes.js";
import downloadRoutes from "./routes/downloadRoutes.js";
import familiesRoutes from "./routes/familiesRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";

const app = express();

app.use("/api/webhook", express.raw({ type: "application/json" }));

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api", homeRoutes);
app.use("/api", downloadRoutes);
app.use("/api", familiesRoutes);
app.use("/api", stripeRoutes);

app.listen(3000, (req, res) => {
  console.log("Sever is running on port 3000");
});
