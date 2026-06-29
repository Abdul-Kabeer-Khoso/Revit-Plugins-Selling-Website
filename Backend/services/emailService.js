import nodemailer from "nodemailer";
import { purchaseEmailTemplate } from "../utils/emailTemplate.js";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendPurchaseEmail = async (order, plugin) => {
  try {
    const html = purchaseEmailTemplate({
      customerEmail: order.customerEmail,
      pluginName: plugin.description,
      price: plugin.price,

      // Dummy key for now
      licenseKey: "RVT-AB12-CD34-EF56",

      // Replace later with your frontend download route
      downloadLink: `http://localhost:5173/download/${plugin._id}`,
    });

    await transporter.sendMail({
      from: `"Revit Plugins" <${process.env.EMAIL_USER}>`,

      to: order.customerEmail,

      subject: "Your Revit Plugin Purchase",

      html,
    });

    console.log("✅ Purchase email sent.");
  } catch (err) {
    console.error("❌ Email Error:", err);

    throw err;
  }
};
