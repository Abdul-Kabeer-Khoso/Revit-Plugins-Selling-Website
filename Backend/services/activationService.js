import License from "../models/licenseModel.js";

export const activateLicense = async ({
  licenseKey,
  email,
  hardwareFingerprint,
}) => {
  const license = await License.findOne({
    licenseKey,
  });

  console.log("License found:", license);

  if (!license) {
    throw new Error("License key not found.");
  }

  if (license.customerEmail !== email.toLowerCase()) {
    throw new Error("Email does not match this license.");
  }

  if (license.status === "active") {
    throw new Error("License is already activated.");
  }

  if (license.status === "revoked") {
    throw new Error("License has been revoked.");
  }

  if (license.status === "expired") {
    throw new Error("License has expired.");
  }

  const activatedAt = new Date();

  const expiresAt = new Date(activatedAt);

  expiresAt.setFullYear(expiresAt.getFullYear() + 1);

  license.hardwareFingerprint = hardwareFingerprint;
  license.activatedAt = activatedAt;
  license.expiresAt = expiresAt;
  license.status = "active";

  await license.save();

  return license;
};
