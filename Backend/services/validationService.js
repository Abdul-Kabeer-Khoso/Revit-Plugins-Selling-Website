import License from "../models/licenseModel.js";

/**
 * Validates a license every time the Revit plugin starts.
 *
 * Business Rules:
 * 1. License must exist.
 * 2. License must be ACTIVE.
 * 3. License must not be BLOCKED.
 * 4. License must not be EXPIRED.
 * 5. License expiry date must be valid.
 * 6. Revit version must match.
 * 7. Machine fingerprint must match.
 */
export const validateLicense = async ({
  licenseKey,
  machineFingerprint,
  revitVersion,
}) => {
  // -----------------------------
  // Find License
  // -----------------------------
  const license = await License.findOne({ licenseKey });

  if (!license) {
    throw new Error("Invalid license key.");
  }

  // -----------------------------
  // Blocked License
  // -----------------------------
  if (license.status === "BLOCKED") {
    throw new Error("This license has been blocked. Please contact support.");
  }

  // -----------------------------
  // License Must Be Active
  // -----------------------------
  if (license.status !== "ACTIVE") {
    throw new Error("License is not activated.");
  }

  // -----------------------------
  // Expiry Check
  // -----------------------------
  if (new Date() > license.expiryDate) {
    if (license.status !== "EXPIRED") {
      license.status = "EXPIRED";
      await license.save();
    }

    throw new Error("This license has expired.");
  }

  // -----------------------------
  // Revit Version Check
  // -----------------------------
  if (license.revitVersion !== revitVersion) {
    throw new Error(`This license is not valid for Revit ${revitVersion}.`);
  }

  // -----------------------------
  // Machine Fingerprint Check
  // -----------------------------
  if (license.machineFingerprint !== machineFingerprint) {
    throw new Error("This license is already activated on another computer.");
  }

  // -----------------------------
  // Update Validation Statistics
  // -----------------------------
  license.lastValidation = new Date();
  license.validationCount += 1;

  await license.save();

  return {
    success: true,
    license,
  };
};
