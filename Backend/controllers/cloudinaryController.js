// import cloudinary from "../config/cloudinary.js";

// export const generateSignature = async (req, res) => {
//   try {
//     const timestamp = Math.round(new Date().getTime() / 1000);

//     const signature = cloudinary.utils.api_sign_request(
//       {
//         folder: "revit-downloads",
//         timestamp,
//       },
//       process.env.CLOUDINARY_API_SECRET,
//     );

//     return res.status(200).json({
//       timestamp,
//       signature,
//       cloudName: process.env.CLOUDINARY_CLOUD_NAME,
//       apiKey: process.env.CLOUDINARY_API_KEY,
//     });
//   } catch (err) {
//     console.error(err);

//     return res.status(500).json({
//       message: "Unable to generate signature.",
//     });
//   }
// };

import cloudinary from "../config/cloudinary.js";

export const generateSignature = async (req, res) => {
  try {
    const timestamp = Math.round(Date.now() / 1000);

    // Only allow these two folders
    const allowedFolders = ["revit-downloads", "revit-reviews"];

    const requestedFolder = req.query.folder || "revit-downloads";

    if (!allowedFolders.includes(requestedFolder)) {
      return res.status(400).json({
        success: false,
        message: "Invalid upload folder.",
      });
    }

    const signature = cloudinary.utils.api_sign_request(
      {
        folder: requestedFolder,
        timestamp,
      },
      process.env.CLOUDINARY_API_SECRET,
    );

    return res.status(200).json({
      timestamp,
      signature,
      folder: requestedFolder,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
    });
  } catch (err) {
    console.error("Cloudinary Signature Error:", err);

    return res.status(500).json({
      success: false,
      message: "Unable to generate signature.",
    });
  }
};
