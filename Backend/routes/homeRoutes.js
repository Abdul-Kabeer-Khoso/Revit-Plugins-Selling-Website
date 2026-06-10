import express from "express";

import {
    getFoundation,
    getBeams,
    getFloor,
    getStructural,
    getInformation,
    getXL
} from "../controllers/homeController.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const foundation = await getFoundation();
        const beams = await getBeams();
        const floor = await getFloor();
        const structural = await getStructural();
        const information = await getInformation();
        const xl = await getXL();

        console.log("Route is working");

        res.json({
            foundation,
            beams,
            floor,
            structural,
            information,
            xl
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;