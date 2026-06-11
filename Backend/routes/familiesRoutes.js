import express from "express";
import { getFamilies, getYoutubeTutorials } from "../controllers/familiesController.js";

const router = express.Router();

router.get("/families", getFamilies);
router.get("/youtubeTutorials", getYoutubeTutorials);

export default router;