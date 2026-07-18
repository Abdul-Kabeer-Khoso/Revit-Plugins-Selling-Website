import { activateLicense } from "../services/activationService.js";

export const activate = async (req, res) => {
  try {
    const { licenseKey, email, hardwareFingerprint } = req.body;

    if (!licenseKey || !email || !hardwareFingerprint) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const license = await activateLicense({
      licenseKey,
      email,
      hardwareFingerprint,
    });

    return res.status(200).json({
      success: true,
      message: "License activated successfully.",
      expiresAt: license.expiresAt,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
