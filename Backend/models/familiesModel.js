import mongoose from "mongoose";

const familiesSchema = new mongoose.Schema({
    family: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    }
})

const Families = mongoose.model("Families", familiesSchema);

export default Families;