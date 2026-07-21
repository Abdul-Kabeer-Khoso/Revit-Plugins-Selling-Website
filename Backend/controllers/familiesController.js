import Families from "../models/familiesModel.js";
import YoutubeTutorial from "../models/youtubeTutorialModel.js";
import cloudinary from "../config/cloudinary.js";
// =============================
// GET ALL FAMILIES
// =============================
export const getFamilies = async (req, res) => {
  try {
    const families = await Families.find();

    return res.status(200).json(families);
  } catch (err) {
    console.error("Error in getFamilies:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch families.",
    });
  }
};

// =============================
// GET ALL YOUTUBE TUTORIALS
// =============================
export const getYoutubeTutorials = async (req, res) => {
  try {
    const tutorials = await YoutubeTutorial.find();

    return res.status(200).json(tutorials);
  } catch (err) {
    console.error("Error in getYoutubeTutorials:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch tutorials.",
    });
  }
};

// =============================
// GET FAMILY BY ID
// =============================
export const getFamilyById = async (req, res) => {
  try {
    const family = await Families.findById(req.params.id);

    if (!family) {
      return res.status(404).json({
        success: false,
        message: "Family not found.",
      });
    }

    console.log(family);

    return res.status(200).json(family);
  } catch (err) {
    console.error("Error in getFamilyById:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch family.",
    });
  }
};

// =============================
// GET YOUTUBE TUTORIAL BY ID
// =============================
export const getYoutubeTutorialById = async (req, res) => {
  try {
    const tutorial = await YoutubeTutorial.findById(req.params.id);

    if (!tutorial) {
      return res.status(404).json({
        success: false,
        message: "Tutorial not found.",
      });
    }

    return res.status(200).json(tutorial);
  } catch (err) {
    console.error("Error in getYoutubeTutorialById:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch tutorial.",
    });
  }
};

// =============================
// GET BOTH COLLECTIONS
// =============================
export const allFamilies = async (req, res) => {
  try {
    const families = await Families.find();
    const youtubeTutorials = await YoutubeTutorial.find();

    return res.status(200).json({
      families,
      youtubeTutorials,
    });
  } catch (err) {
    console.error("Error in allFamilies:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch records.",
    });
  }
};

// =============================
// ADD FAMILY
// =============================
export const addFamilies = async (req, res) => {
  try {
    const family = await Families.create({
      family: req.body.input1,
      price: req.body.input2,
      fileUrl: req.body.fileUrl,
      publicId: req.body.publicId,
      resourceType: req.body.resourceType,
    });

    return res.status(201).json({
      success: true,
      message: "Family added successfully.",
      family,
    });
  } catch (err) {
    console.error("Error in addFamilies:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to add family.",
    });
  }
};

// =============================
// ADD YOUTUBE TUTORIAL
// =============================
export const addYoutubeTutorials = async (req, res) => {
  try {
    const tutorial = await YoutubeTutorial.create({
      tutorial: req.body.input1,
      link: req.body.input2,
    });

    return res.status(201).json({
      success: true,
      message: "Tutorial added successfully.",
      tutorial,
    });
  } catch (err) {
    console.error("Error in addYoutubeTutorials:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to add tutorial.",
    });
  }
};

// =============================
// DELETE FAMILY
// =============================
export const deleteFamily = async (req, res) => {
  try {
    const family = await Families.findById(req.params.id);

    if (!family) {
      return res.status(404).json({
        success: false,
        message: "Family not found.",
      });
    }

    // Delete Cloudinary file
    if (family.publicId) {
      try {
        const result = await cloudinary.uploader.destroy(family.publicId, {
          resource_type: family.resourceType,
        });

        console.log("Delete Result:", result);
      } catch (err) {
        console.error("Unable to delete Cloudinary file:", err.message);
      }
    }

    // Delete MongoDB document
    await Families.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Family deleted successfully.",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Failed to delete family.",
    });
  }
};

// =============================
// DELETE YOUTUBE TUTORIAL
// =============================
export const deleteYoutubeTutorial = async (req, res) => {
  try {
    const deletedTutorial = await YoutubeTutorial.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedTutorial) {
      return res.status(404).json({
        success: false,
        message: "Tutorial not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Tutorial deleted successfully.",
    });
  } catch (err) {
    console.error("Error in deleteYoutubeTutorial:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to delete tutorial.",
    });
  }
};

// =============================
// UPDATE FAMILY
// =============================
export const updateFamily = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const family = await Families.findById(req.params.id);

    if (!family) {
      return res.status(404).json({
        success: false,
        message: "Family not found.",
      });
    }

    // Keep old Cloudinary info
    const oldPublicId = family.publicId;
    const oldResourceType = family.resourceType;

    // Update text fields
    family.family = req.body.input1;
    family.price = req.body.input2;

    // Update file info only if a new file was uploaded
    if (req.body.fileUrl && req.body.publicId) {
      family.fileUrl = req.body.fileUrl;
      family.publicId = req.body.publicId;
      family.resourceType = req.body.resourceType;
    }

    // Save MongoDB first
    await family.save();

    // Delete old Cloudinary file only after successful save
    if (
      req.body.fileUrl &&
      req.body.publicId &&
      oldPublicId &&
      oldPublicId !== req.body.publicId
    ) {
      try {
        const result = await cloudinary.uploader.destroy(oldPublicId, {
          resource_type: oldResourceType,
        });

        console.log("Delete Result:", result);
      } catch (err) {
        console.error("Unable to delete old file:", err.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Family updated successfully.",
      family,
    });
  } catch (err) {
    console.error("========== UPDATE FAMILY ERROR ==========");
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// =============================
// UPDATE YOUTUBE TUTORIAL
// =============================
export const updateYoutubeTutorial = async (req, res) => {
  try {
    const tutorial = await YoutubeTutorial.findByIdAndUpdate(
      req.params.id,
      {
        tutorial: req.body.input1,
        link: req.body.input2,
      },
      {
        new: true,
      },
    );

    if (!tutorial) {
      return res.status(404).json({
        success: false,
        message: "Tutorial not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Tutorial updated successfully.",
      tutorial,
    });
  } catch (err) {
    console.error("Error in updateYoutubeTutorial:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to update tutorial.",
    });
  }
};
