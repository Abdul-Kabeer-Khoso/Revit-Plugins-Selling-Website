import mongoose from "mongoose";

const foundationSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        requrie: true,
    }
});

const Foundation = mongoose.model("Foundation", foundationSchema);

export default Foundation;