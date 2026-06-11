import mongoose from "mongoose";

const downloadSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    }
})

const Download = mongoose.model("Download", downloadSchema);

export default Download;