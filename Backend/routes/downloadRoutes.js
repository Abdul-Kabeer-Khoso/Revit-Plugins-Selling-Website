import express from "express";
import { verifyAdmin } from "../middleware/authMiddleware.js";
import {
  addDownload,
  deleteDownload,
  editDownload,
  getAllDownload,
  getDownload,
} from "../controllers/downloadController.js";
const router = express.Router();

router.get("/download", getAllDownload);
router.get("/download/:id", getDownload);
router.post("/download", addDownload);
router.delete("/download/:id", deleteDownload);
router.put("/download/:id", editDownload);

export default router;
