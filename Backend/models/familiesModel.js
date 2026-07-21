import mongoose from "mongoose";

const familiesSchema = new mongoose.Schema({
  family: {
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

  resourceType: {
    type: String,
  },
});

const Families = mongoose.model("Families", familiesSchema);

export default Families;
