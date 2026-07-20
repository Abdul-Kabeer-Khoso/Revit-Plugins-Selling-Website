import Download from "../models/downloadModel.js";
import cloudinary from "../config/cloudinary.js";

export const getAllDownload = async (req, res) => {
  try {
    const allDownload = await Download.find();
    res.json(allDownload);
  } catch (err) {
    console.log("Error in getAllDownload controller");
  }
};

export const getDownload = async (req, res) => {
  try {
    const data = await Download.findById(req.params.id);
    res.json({ data });
  } catch (err) {
    console.log(err);
  }
};

export const addDownload = async (req, res) => {
  try {
    const data = await Download.create({
      description: req.body.input1,
      price: req.body.input2,
      fileUrl: req.body.fileUrl,
      publicId: req.body.publicId,
    });

    return res.status(201).json(data);
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Unable to add download",
    });
  }
};

export const deleteDownload = async (req, res) => {
  try {
    // Find download first
    const download = await Download.findById(req.params.id);

    if (!download) {
      return res.status(404).json({
        message: "Download not found",
      });
    }

    // Delete file from Cloudinary
    if (download.publicId) {
      await cloudinary.uploader.destroy(download.publicId, {
        resource_type: "raw",
      });
    }

    // Delete MongoDB record
    await Download.findByIdAndDelete(req.params.id);

    const downloadData = await Download.find();

    return res.json({ downloadData });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Unable to delete download",
    });
  }
};

export const editDownload = async (req, res) => {
  try {
    // Find existing record
    const download = await Download.findById(req.params.id);

    if (!download) {
      return res.status(404).json({
        message: "Download not found",
      });
    }

    // Prepare updated data
    const updatedData = {
      description: req.body.input1,
      price: req.body.input2,
    };

    // If a new file was uploaded
    if (req.body.fileUrl && req.body.publicId) {
      // Delete old file from Cloudinary
      if (download.publicId) {
        await cloudinary.uploader.destroy(download.publicId, {
          resource_type: "raw",
        });
      }

      // Save new Cloudinary values
      updatedData.fileUrl = req.body.fileUrl;
      updatedData.publicId = req.body.publicId;
    }

    // Update MongoDB
    const updatedDownload = await Download.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true },
    );

    return res.status(200).json(updatedDownload);
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Unable to update download",
    });
  }
};
