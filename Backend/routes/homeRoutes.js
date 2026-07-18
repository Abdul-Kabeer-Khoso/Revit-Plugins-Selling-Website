import express from "express";
import { verifyAdmin } from "../middleware/authMiddleware.js";
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
  editXL,
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
      xl,
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

router.delete("/foundation/:id", verifyAdmin, deleteFoundation);
router.delete("/floor/:id", verifyAdmin, deleteFloor);
router.delete("/beams/:id", verifyAdmin, deleteBeams);
router.delete("/structural/:id", verifyAdmin, deleteStructural);
router.delete("/information/:id", verifyAdmin, deleteInformation);
router.delete("/xl/:id", verifyAdmin, deleteXl);

router.post("/foundation", verifyAdmin, addFoundation);
router.post("/floor", verifyAdmin, addFloor);
router.post("/beams", verifyAdmin, addBeams);
router.post("/structural", verifyAdmin, addStructural);
router.post("/information", verifyAdmin, addInformation);
router.post("/xl", verifyAdmin, addXL);

router.put("/foundation/:id", verifyAdmin, editFoundation);
router.put("/floor/:id", verifyAdmin, editFloor);
router.put("/beams/:id", verifyAdmin, editBeams);
router.put("/structural/:id", verifyAdmin, editStructural);
router.put("/information/:id", verifyAdmin, editInformation);
router.put("/xl/:id", verifyAdmin, editXL);

export default router;
