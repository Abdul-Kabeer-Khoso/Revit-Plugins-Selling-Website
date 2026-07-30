import License from "../models/licenseModel.js";

/**
 * Activates a license on the customer's computer.
 *
 * Business Rules:
 * 1. License must exist.
 * 2. License must not be blocked.
 * 3. License must not be expired.
 * 4. Revit version must match.
 * 5. First activation binds the license to one machine.
 * 6. Same machine can activate again (Windows/Revit reinstall).
 * 7. Different machine is rejected.
 */
export const activateLicense = async ({
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
  // Expired License
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

  // ==========================================================
  // FIRST ACTIVATION
  // ==========================================================
  if (license.status === "PENDING") {
    const now = new Date();

    license.machineFingerprint = machineFingerprint;
    license.activationDate = now;
    license.lastValidation = now;
    license.activationCount = 1;
    license.validationCount = 1;
    license.status = "ACTIVE";

    await license.save();

    return {
      success: true,
      firstActivation: true,
      license,
    };
  }

  // ==========================================================
  // ALREADY ACTIVE
  // ==========================================================
  if (license.status === "ACTIVE") {
    // Same computer
    if (license.machineFingerprint === machineFingerprint) {
      license.lastValidation = new Date();
      license.validationCount += 1;

      await license.save();

      return {
        success: true,
        firstActivation: false,
        license,
      };
    }

    // Different computer
    throw new Error("This license is already activated on another computer.");
  }

  // -----------------------------
  // Unknown Status
  // -----------------------------
  throw new Error("Invalid license status.");
};
