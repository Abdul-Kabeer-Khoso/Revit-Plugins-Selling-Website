import express from "express";
import { addReview, getAllReviews } from "../controllers/reviewController.js";

const router = express.Router();

// Public routes
router.post("/reviews", addReview);
router.get("/reviews", getAllReviews);

export default router;
