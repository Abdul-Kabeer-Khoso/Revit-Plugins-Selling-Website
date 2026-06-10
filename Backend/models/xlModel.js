import mongoose from "mongoose";

const xlSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        requrie: true,
    }
});

const XL = mongoose.model("XL", xlSchema);

export default XL;