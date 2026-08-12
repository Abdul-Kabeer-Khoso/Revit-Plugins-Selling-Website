import Order from "../models/orderModel.js";

export const getAllPurchaseLogs = async (req, res) => {
  try {
    const purchaseLogs = await Order.find({
      paymentStatus: "paid",
    })
      .select("customerEmail pluginName price currency paymentStatus createdAt")
      .sort({ createdAt: -1 });

    return res.status(200).json(purchaseLogs);
  } catch (err) {
    console.error("Get Purchase Logs Error:", err);

    return res.status(500).json({
      message: "Unable to fetch purchase logs.",
    });
  }
};
