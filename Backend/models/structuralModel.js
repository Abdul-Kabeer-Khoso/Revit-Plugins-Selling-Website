import mongoose from "mongoose";

const structuralSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        requrie: true,
    }
});

const Structural = mongoose.model("Structural", structuralSchema);

export default Structural;