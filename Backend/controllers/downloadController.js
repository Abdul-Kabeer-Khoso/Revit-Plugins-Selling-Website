import Download from "../models/downloadModel.js";
import cloudinary from "../config/cloudinary.js";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

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

export const downloadPlugin = async (req, res) => {
  try {
    const plugin = await Download.findById(req.params.id);

    if (!plugin) {
      return res.status(404).json({
        message: "Plugin not found.",
      });
    }

    if (!plugin.fileUrl) {
      return res.status(404).json({
        message: "Plugin file URL not found.",
      });
    }

    // Generate a clean filename from the plugin description.
    const baseName = String(plugin.description || "Plugin")
      .trim()
      .replace(/\.zip$/i, "")
      .replace(/[^a-zA-Z0-9_-]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");

    // Ensure the downloaded filename starts with "Revit".
    const cleanName = baseName || "Plugin";

    const filename = /^revit/i.test(cleanName)
      ? `${cleanName}.zip`
      : `Revit-${cleanName}.zip`;

    // Retrieve the ZIP from Cloudinary.
    const fileResponse = await fetch(plugin.fileUrl);

    if (!fileResponse.ok || !fileResponse.body) {
      console.error("Cloudinary download failed:", fileResponse.status);

      return res.status(502).json({
        message: "Unable to retrieve the plugin file.",
      });
    }

    // Set the filename shown to the customer.
    res.setHeader("Content-Type", "application/zip");

    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);

    const contentLength = fileResponse.headers.get("content-length");

    if (contentLength) {
      res.setHeader("Content-Length", contentLength);
    }

    // Stream the file through the backend without creating
    // another ZIP archive or loading the entire file into memory.
    await pipeline(Readable.fromWeb(fileResponse.body), res);
  } catch (err) {
    console.error("Unable to download plugin:", err);

    if (res.headersSent) {
      res.destroy(err);
      return;
    }

    return res.status(500).json({
      message: "Unable to download plugin.",
    });
  }
};

// export const downloadPlugin = async (req, res) => {
//   try {
//     const plugin = await Download.findById(req.params.id);

//     if (!plugin) {
//       return res.status(404).json({
//         message: "Plugin not found.",
//       });
//     }

//     return res.redirect(plugin.fileUrl);
//   } catch (err) {
//     console.error(err);

//     return res.status(500).json({
//       message: "Unable to download plugin.",
//     });
//   }
// };

export const addDownload = async (req, res) => {
  try {
    const data = await Download.create({
      description: req.body.input1,
      price: req.body.input2,

      fileUrl: req.body.fileUrl,
      publicId: req.body.publicId,
      resourceType: req.body.resourceType,
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

    // Delete Cloudinary file
    if (download.publicId) {
      try {
        const result = await cloudinary.uploader.destroy(download.publicId, {
          resource_type: download.resourceType,
        });

        console.log("Delete Result:", result);
      } catch (err) {
        console.error("Unable to delete file:", err.message);
      }
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

    // ================= FILE =================

    if (req.body.fileUrl && req.body.publicId) {
      const oldPublicId = download.publicId;
      const oldResourceType = download.resourceType;

      updateData.fileUrl = req.body.fileUrl;
      updateData.publicId = req.body.publicId;
      updateData.resourceType = req.body.resourceType;

      if (oldPublicId) {
        try {
          const result = await cloudinary.uploader.destroy(oldPublicId, {
            resource_type: oldResourceType,
          });

          console.log("Delete Result:", result);
        } catch (err) {
          console.error("Unable to delete old file:", err.message);
        }
      }
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
