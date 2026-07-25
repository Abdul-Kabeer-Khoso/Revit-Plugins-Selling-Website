import brevo from "../config/brevo.js";
import { purchaseEmailTemplate } from "../utils/emailTemplate.js";

export const sendPurchaseEmail = async (order, plugin, licenses) => {
  try {
    const html = purchaseEmailTemplate({
      customerEmail: order.customerEmail,
      pluginName: plugin.description,
      price: plugin.price,
      licenses,
      downloadLink: `${process.env.BACKEND_URL}/api/download/${plugin._id}`,
    });

    const response = await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: "Hamstruk",
        email: "support@hamstruk.com",
      },

      to: [
        {
          email: order.customerEmail,
        },
      ],

      subject: "Your Revit Plugin Purchase",

      htmlContent: html,
    });

    console.log("✅ Purchase email sent successfully");
    console.log(response);
  } catch (err) {
    console.log("❌ EMAIL FAILED");
    console.log(err);
  }
};
