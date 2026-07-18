import express from "express";
import { verifyAdmin } from "../middleware/authMiddleware.js";
import {
  addFamilies,
  addYoutubeTutorials,
  allFamilies,
  deleteFamily,
  deleteYoutubeTutorial,
  getFamilies,
  getFamilyById,
  getYoutubeTutorialById,
  getYoutubeTutorials,
  updateFamily,
  updateYoutubeTutorial,
} from "../controllers/familiesController.js";

const router = express.Router();

router.get("/families", getFamilies);
router.get("/youtubeTutorials", getYoutubeTutorials);
router.get("/allfamilies", allFamilies);

router.get("/family/:id", getFamilyById);
router.get("/youtubetutorial/:id", getYoutubeTutorialById);

router.post("/addFamilies", verifyAdmin, addFamilies);
router.post("/addYoutubeTutorial", verifyAdmin, addYoutubeTutorials);

router.delete("/family/:id", verifyAdmin, deleteFamily);
router.delete("/youtubetutorial/:id", verifyAdmin, deleteYoutubeTutorial);

router.put("/family/:id", verifyAdmin, updateFamily);
router.put("/youtubetutorial/:id", verifyAdmin, updateYoutubeTutorial);

export default router;
