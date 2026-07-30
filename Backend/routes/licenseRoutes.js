import express from "express";
import { activate, validate } from "../controllers/licenseController.js";

const router = express.Router();

// First-time activation
router.post("/license/activate", activate);

// Validate license every time Revit starts
router.post("/license/validate", validate);

export default router;
