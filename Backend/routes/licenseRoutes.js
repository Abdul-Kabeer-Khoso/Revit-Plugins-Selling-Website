import express from "express";
import { activate } from "../controllers/licenseController.js";

const router = express.Router();

router.post("/license/activate", activate);

export default router;
