import express from "express";
import {
  addReview,
  getAllReviews,
  deleteReview,
} from "../controllers/reviewController.js";

import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/reviews", addReview);
router.get("/reviews", getAllReviews);

// Protected admin route
router.delete("/reviews/:id", verifyAdmin, deleteReview);

export default router;
