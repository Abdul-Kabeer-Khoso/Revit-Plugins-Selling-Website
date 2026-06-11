import express from "express";
import { getAllDownload } from "../controllers/downloadController.js";
const router = express.Router();

router.get("/download", getAllDownload);

export default router;