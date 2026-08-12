import express from "express";
import { getAllPurchaseLogs } from "../controllers/orderController.js";

const router = express.Router();

router.get("/purchase-logs", getAllPurchaseLogs);

export default router;
