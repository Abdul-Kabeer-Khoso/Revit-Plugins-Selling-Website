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

      zipUrl: req.body.zipUrl,
      zipPublicId: req.body.zipPublicId,

      txtUrl: req.body.txtUrl,
      txtPublicId: req.body.txtPublicId,
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

    // Data that will be updated
    const updateData = {
      description: req.body.input1,
      price: req.body.input2,
    };

    // ================= ZIP =================

    if (req.body.zipUrl && req.body.zipPublicId) {
      // Delete old ZIP from Cloudinary
      if (download.zipPublicId) {
        await cloudinary.uploader.destroy(download.zipPublicId, {
          resource_type: "raw",
        });
      }

      updateData.zipUrl = req.body.zipUrl;
      updateData.zipPublicId = req.body.zipPublicId;
    }

    // ================= TXT =================

    if (req.body.txtUrl && req.body.txtPublicId) {
      // Delete old TXT from Cloudinary
      if (download.txtPublicId) {
        await cloudinary.uploader.destroy(download.txtPublicId, {
          resource_type: "raw",
        });
      }

      updateData.txtUrl = req.body.txtUrl;
      updateData.txtPublicId = req.body.txtPublicId;
    }

    const updatedDownload = await Download.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true },
    );

    return res.json(updatedDownload);
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Unable to update download",
    });
  }
};
