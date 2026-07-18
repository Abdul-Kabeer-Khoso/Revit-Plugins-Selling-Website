// import crypto from "crypto";
// import License from "../models/licenseModel.js";

// const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// /**
//  * Generates a license key in the format:
//  * XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
//  */
// const generateLicenseKey = () => {
//   let key = "";

//   for (let group = 0; group < 5; group++) {
//     for (let i = 0; i < 5; i++) {
//       const randomIndex = crypto.randomInt(0, CHARACTERS.length);
//       key += CHARACTERS[randomIndex];
//     }

//     if (group < 4) {
//       key += "-";
//     }
//   }

//   return key;
// };

// /**
//  * Ensures the generated license key does not already exist.
//  */
// const createUniqueLicenseKey = async () => {
//   while (true) {
//     const licenseKey = generateLicenseKey();

//     const existingLicense = await License.findOne({ licenseKey });

//     if (!existingLicense) {
//       return licenseKey;
//     }
//   }
// };

// /**
//  * Generates and saves licenses after a successful purchase.
//  */
// export const generateLicenses = async (quantity, order, plugin) => {
//   quantity = Number(quantity);

//   const licenses = [];

//   for (let i = 0; i < quantity; i++) {
//     const licenseKey = await createUniqueLicenseKey();

//     const license = await License.create({
//       licenseKey,
//       plugin: plugin._id,
//       order: order._id,
//       customerEmail: order.customerEmail,
//     });

//     licenses.push(license);
//   }

//   return licenses;
// };
