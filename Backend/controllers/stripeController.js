import Stripe from "stripe";
import Download from "../models/downloadModel.js";
import { saveOrder } from "../services/orderService.js";
import { sendPurchaseEmail } from "../services/emailService.js";
import Order from "../models/orderModel.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  const plugin = await Download.findById(req.body.id);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: plugin.description,
          },
          unit_amount: plugin.price * 100,
        },

        quantity: 1,
      },
    ],
    mode: "payment",

    success_url: "http://localhost:5173/?payment=success",

    cancel_url: "http://localhost:5173/payment-cancel",

    metadata: {
      pluginId: plugin._id.toString(),
    },
  });

  res.json({
    url: session.url,
  });
};

export const stripeWebhook = async (req, res) => {
  const signature = req.headers["stripe-signature"];

  const event = stripe.webhooks.constructEvent(
    req.body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET,
  );

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
        console.error("Plugin ID missing from metadata");
        return res.sendStatus(200);
      }

      const pluginId = session.metadata.pluginId;

      const plugin = await Download.findById(pluginId);

      if (!plugin) {
        console.error("Plugin not found");
        return res.sendStatus(200);
      }

      const order = await saveOrder(session, plugin);

      try {
        await sendPurchaseEmail(order, plugin);
      } catch (emailError) {
        console.error("Email failed:", emailError);
      }

      console.log("Order Saved:", order._id);

      return res.sendStatus(200);
    } catch (err) {
      console.error("Webhook processing failed:", err);

      return res.sendStatus(500);
    }

    console.log(
      `Order ${order._id} saved successfully for ${order.customerEmail}`,
    );
  }
  res.sendStatus(200);
};
