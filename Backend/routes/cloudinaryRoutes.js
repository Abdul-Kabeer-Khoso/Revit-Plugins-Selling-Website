import express from "express";
import { generateSignature } from "../controllers/cloudinaryController.js";

const router = express.Router();

router.get("/cloudinary/signature", generateSignature);

export default router;
