import mongoose from "mongoose";

const beamsSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        requrie: true,
    }
});

const Beams = mongoose.model("Beams", beamsSchema);

export default Beams;