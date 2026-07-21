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

  zipUrl: {
    type: String,
    required: true,
  },

  zipPublicId: {
    type: String,
    required: true,
  },

  txtUrl: {
    type: String,
    required: true,
  },

  txtPublicId: {
    type: String,
    required: true,
  },
});

const Download = mongoose.model("Download", downloadSchema);

export default Download;
