import cloudinary from "../config/cloudinary.js";

export const generateSignature = async (req, res) => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);

    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp,
      },
      process.env.CLOUDINARY_API_SECRET,
    );

    return res.status(200).json({
      timestamp,
      signature,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: "Unable to generate signature.",
    });
  }
};
