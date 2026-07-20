import mongoose from "mongoose";

const downloadSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  fileUrl: {
    type: String,
    required: true,
  },

  publicId: {
    type: String,
    required: true,
  },
});

const Download = mongoose.model("Download", downloadSchema);

export default Download;
