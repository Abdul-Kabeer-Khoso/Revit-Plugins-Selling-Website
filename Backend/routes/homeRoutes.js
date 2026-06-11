import express from "express";

import {
    getFoundation,
    getBeams,
    getFloor,
    getStructural,
    getInformation,
    getXL,
    deleteFoundation,
    deleteFloor,
    deleteBeams,
    deleteStructural,
    deleteInformation,
    deleteXl,
    addFoundation,
    addFloor,
    addBeams,
    addStructural,
    addInformation,
    addXL,
    getFoundationById,
    getFloorById,
    getBeamsById,
    getStructuralById,
    getInformationById,
    getXLById,
    editFoundation,
    editStructural,
    editInformation,
    editFloor,
    editBeams,
    editXL
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

router.get("/foundation/:id", getFoundationById);
router.get("/floor/:id", getFloorById);
router.get("/beams/:id", getBeamsById);
router.get("/structural/:id", getStructuralById);
router.get("/information/:id", getInformationById);
router.get("/xl/:id", getXLById);


router.delete("/foundation/:id", deleteFoundation);
router.delete("/floor/:id", deleteFloor);
router.delete("/beams/:id", deleteBeams);
router.delete("/structural/:id", deleteStructural);
router.delete("/information/:id", deleteInformation);
router.delete("/xl/:id", deleteXl);


router.post("/foundation", addFoundation);
router.post("/floor", addFloor);
router.post("/beams", addBeams);
router.post("/structural", addStructural);
router.post("/information", addInformation);
router.post("/xl", addXL);

router.put("/foundation/:id", editFoundation);
router.put("/floor/:id", editFloor);
router.put("/beams/:id", editBeams);
router.put("/structural/:id", editStructural);
router.put("/information/:id", editInformation);
router.put("/xl/:id", editXL);


export default router;