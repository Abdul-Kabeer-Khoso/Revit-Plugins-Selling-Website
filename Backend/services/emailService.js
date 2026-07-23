import nodemailer from "nodemailer";
import { purchaseEmailTemplate } from "../utils/emailTemplate.js";
import transporter from "../config/mailer.js";

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   family: 4,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },

//   logger: true,
//   debug: true,
// });

export const sendPurchaseEmail = async (order, plugin, licenses) => {
  try {
    const html = purchaseEmailTemplate({
      customerEmail: order.customerEmail,
      pluginName: plugin.description,
      price: plugin.price,
      licenses,
      downloadLink: `${process.env.BACKEND_URL}/api/download/${plugin._id}`,
    });

    const info = await transporter.sendMail({
      from: `"Revit Plugins" <${process.env.EMAIL_USER}>`,
      to: order.customerEmail,
      subject: "Your Revit Plugin Purchase",
      html,
    });

    console.log("✅ Email Sent Successfully");
    console.log(info);
  } catch (err) {
    console.log("❌ EMAIL FAILED");
    console.log("Message:", err.message);
    console.log("Code:", err.code);
    console.log("Command:", err.command);
    console.log("Response:", err.response);
  }
};
