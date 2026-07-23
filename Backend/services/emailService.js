import nodemailer from "nodemailer";
import { purchaseEmailTemplate } from "../utils/emailTemplate.js";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendPurchaseEmail = async (order, plugin, licenses) => {
  try {
    const html = purchaseEmailTemplate({
      customerEmail: order.customerEmail,
      pluginName: plugin.description,
      price: plugin.price,
      licenses,
      downloadLink: `${process.env.BACKEND_URL}/api/download/${plugin._id}`,
    });

    await transporter.sendMail({
      from: `"Revit Plugins" <${process.env.EMAIL_USER}>`,
      to: order.customerEmail,
      subject: "Your Revit Plugin Purchase",
      html,
    });

    console.log(
      `✅ Purchase email sent to ${order.customerEmail} with ${licenses.length} license(s).`,
    );
  } catch (err) {
    console.error("❌ Email Error:", err);
    throw err;
  }
};
