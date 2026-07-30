import { activateLicense } from "../services/activationService.js";
import { validateLicense } from "../services/validationService.js";

/**
 * Activate a license for the first time.
 */
export const activate = async (req, res) => {
  try {
    const { licenseKey, machineFingerprint, revitVersion } = req.body;

    if (!licenseKey || !machineFingerprint || !revitVersion) {
      return res.status(400).json({
        success: false,
        message:
          "licenseKey, machineFingerprint and revitVersion are required.",
      });
    }

    const result = await activateLicense({
      licenseKey,
      machineFingerprint,
      revitVersion,
    });

    return res.status(200).json({
      success: true,
      message: result.firstActivation
        ? "License activated successfully."
        : "License verified successfully.",

      firstActivation: result.firstActivation,

      license: {
        licenseKey: result.license.licenseKey,
        customerEmail: result.license.customerEmail,
        customerName: result.license.customerName,
        pluginName: result.license.pluginName,
        revitVersion: result.license.revitVersion,
        activationDate: result.license.activationDate,
        expiryDate: result.license.expiryDate,
        status: result.license.status,
      },
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

/**
 * Validate license whenever Revit starts.
 */
export const validate = async (req, res) => {
  try {
    const { licenseKey, machineFingerprint, revitVersion } = req.body;

    if (!licenseKey || !machineFingerprint || !revitVersion) {
      return res.status(400).json({
        success: false,
        message:
          "licenseKey, machineFingerprint and revitVersion are required.",
      });
    }

    const result = await validateLicense({
      licenseKey,
      machineFingerprint,
      revitVersion,
    });

    return res.status(200).json({
      success: true,
      message: "License is valid.",

      license: {
        licenseKey: result.license.licenseKey,
        customerEmail: result.license.customerEmail,
        customerName: result.license.customerName,
        pluginName: result.license.pluginName,
        revitVersion: result.license.revitVersion,
        expiryDate: result.license.expiryDate,
        status: result.license.status,
      },
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
