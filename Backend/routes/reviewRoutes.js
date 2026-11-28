import express from "express";
import { addReview } from "../controllers/reviewController.js";

const router = express.Router();

// Public route: Submit a review
router.post("/reviews", addReview);

export default router;
