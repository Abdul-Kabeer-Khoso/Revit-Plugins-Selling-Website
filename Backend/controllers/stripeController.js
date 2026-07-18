import Stripe from "stripe";
import Download from "../models/downloadModel.js";
import Order from "../models/orderModel.js";

import { saveOrder } from "../services/orderService.js";
import { generateLicenses } from "../services/licenseService.js";
import { sendPurchaseEmail } from "../services/emailService.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const { id, quantity = 1 } = req.body;

    const qty = Number(quantity);

    if (!Number.isInteger(qty) || qty < 1) {
      return res.status(400).json({
        message: "Invalid quantity.",
      });
    }

    const plugin = await Download.findById(id);

    if (!plugin) {
      return res.status(404).json({
        message: "Plugin not found.",
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "usd",

            product_data: {
              name: plugin.description,
            },

            unit_amount: plugin.price * 100,
          },

          quantity: qty,
        },
      ],

      success_url: "http://localhost:5173/?payment=success",

      cancel_url: "http://localhost:5173/payment-cancel",

      metadata: {
        pluginId: plugin._id.toString(),
        quantity: qty.toString(),
      },
    });

    return res.json({
      url: session.url,
    });
  } catch (err) {
    console.error("Checkout Session Error:", err);

    return res.status(500).json({
      message: "Unable to create checkout session.",
    });
  }
};

export const stripeWebhook = async (req, res) => {
  const signature = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);

    return res.sendStatus(400);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const existingOrder = await Order.findOne({
      stripeSessionId: session.id,
    });

    if (existingOrder) {
      console.log(
        `Webhook ignored. Order already processed for session ${session.id}`,
      );

      return res.sendStatus(200);
    }

    try {
      if (!session.metadata?.pluginId) {
        console.error("Plugin ID missing from metadata.");

        return res.sendStatus(200);
      }

      const plugin = await Download.findById(session.metadata.pluginId);

      if (!plugin) {
        console.error("Plugin not found.");

        return res.sendStatus(200);
      }

      const order = await saveOrder(session, plugin);

      const licenses = await generateLicenses(
        session.metadata.quantity,
        order,
        plugin,
      );

      try {
        await sendPurchaseEmail(order, plugin, licenses);
      } catch (emailError) {
        console.error("Email failed:", emailError);
      }

      console.log(
        `Order ${order._id} saved successfully for ${order.customerEmail}`,
      );

      console.log(`${licenses.length} license(s) generated.`);

      return res.sendStatus(200);
    } catch (err) {
      console.error("Webhook processing failed:", err);

      return res.sendStatus(500);
    }
  }

  return res.sendStatus(200);
};
