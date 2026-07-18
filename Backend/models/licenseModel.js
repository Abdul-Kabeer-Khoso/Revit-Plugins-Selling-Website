import mongoose from "mongoose";

const licenseSchema = new mongoose.Schema(
  {
    licenseKey: {
      type: String,
      required: true,
      unique: true,
    },

    plugin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Download",
      required: true,
    },

    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    customerEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["inactive", "active", "expired", "revoked"],
      default: "inactive",
    },

    hardwareFingerprint: {
      type: String,
      default: null,
    },

    activatedAt: {
      type: Date,
      default: null,
    },

    expiresAt: {
      type: Date,
      default: null,
    },

    lastValidation: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("License", licenseSchema);
