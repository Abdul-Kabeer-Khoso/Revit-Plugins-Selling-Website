// import Order from "../models/orderModel.js";

// export const saveOrder = async (session, plugin) => {
//   try {
//     const order = new Order({
//       customerEmail: session.customer_details.email,

//       pluginId: plugin._id,
//       pluginName: plugin.description,
//       price: plugin.price,

//       currency: session.currency,

//       stripeSessionId: session.id,

//       paymentIntentId: session.payment_intent,

//       paymentStatus: "paid",

//       licenseKey: "",

//       downloadCount: 0,
//     });

//     const savedOrder = await order.save();

//     return savedOrder;
//   } catch (err) {
//     console.error("Error saving order:", err);
//     throw err;
//   }
// };
