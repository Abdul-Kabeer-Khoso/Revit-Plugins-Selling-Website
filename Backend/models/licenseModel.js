import mongoose from "mongoose";

const licenseSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    pluginId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Download",
      required: true,
    },

    customerEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    customerName: {
      type: String,
      default: "",
      trim: true,
    },

    licenseKey: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    pluginName: {
      type: String,
      required: true,
    },

    revitVersion: {
      type: String,
      required: true,
    },

    machineFingerprint: {
      type: String,
      default: "",
      trim: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "ACTIVE", "EXPIRED", "BLOCKED"],
      default: "PENDING",
    },

    activationDate: {
      type: Date,
      default: null,
    },

    expiryDate: {
      type: Date,
      required: true,
    },

    lastValidation: {
      type: Date,
      default: null,
    },

    validationCount: {
      type: Number,
      default: 0,
    },

    activationCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const License = mongoose.model("License", licenseSchema);

export default License;
