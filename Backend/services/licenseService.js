import crypto from "crypto";
import License from "../models/licenseModel.js";
import Order from "../models/orderModel.js";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/**
 * Generates a license key in the format:
 * XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
 */
const generateLicenseKey = () => {
  let key = "";

  for (let group = 0; group < 5; group++) {
    for (let i = 0; i < 5; i++) {
      const randomIndex = crypto.randomInt(0, CHARACTERS.length);
      key += CHARACTERS[randomIndex];
    }

    if (group < 4) {
      key += "-";
    }
  }

  return key;
};

/**
 * Ensures the generated license key is unique.
 */
const createUniqueLicenseKey = async () => {
  while (true) {
    const licenseKey = generateLicenseKey();

    const existingLicense = await License.findOne({ licenseKey });

    if (!existingLicense) {
      return licenseKey;
    }
  }
};

/**
 * Calculates the license expiry date.
 */
const calculateExpiryDate = () => {
  const now = new Date();

  if (process.env.LICENSE_DURATION_HOURS) {
    now.setHours(now.getHours() + Number(process.env.LICENSE_DURATION_HOURS));
    return now;
  }

  const days = Number(process.env.LICENSE_DURATION_DAYS || 365);

  now.setDate(now.getDate() + days);

  return now;
};

/**
 * Generates and saves licenses after a successful purchase.
 */
export const generateLicenses = async (quantity, order, plugin) => {
  quantity = Number(quantity);

  const licenses = [];

  for (let i = 0; i < quantity; i++) {
    const licenseKey = await createUniqueLicenseKey();

    const license = await License.create({
      orderId: order._id,

      pluginId: plugin._id,

      customerEmail: order.customerEmail,

      customerName: "",

      licenseKey,

      revitVersion: plugin.description,

      machineId: "",

      status: "PENDING",

      activated: false,

      activationDate: null,

      expiryDate: calculateExpiryDate(),

      lastValidation: null,

      validationCount: 0,

      activationCount: 0,

      maxActivations: 1,
    });

    // Keep Order and License synchronized
    await Order.findByIdAndUpdate(order._id, {
      licenseKey,
    });

    licenses.push(license);
  }

  return licenses;
};
