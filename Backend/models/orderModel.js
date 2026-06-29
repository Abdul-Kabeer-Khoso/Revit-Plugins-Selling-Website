import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerEmail: {
      type: String,
      required: true,
    },

    pluginId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Download",
      required: true,
    },

    pluginName: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "usd",
    },

    stripeSessionId: {
      type: String,
      required: true,
      unique: true,
    },

    paymentIntentId: {
      type: String,
      required: true,
    },

    paymentStatus: {
      type: String,
      default: "paid",
    },

    licenseKey: {
      type: String,
      default: "",
    },

    downloadCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
