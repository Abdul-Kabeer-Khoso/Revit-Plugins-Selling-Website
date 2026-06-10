import mongoose from "mongoose";


const floorSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        requrie: true,
    }
});

const Floor = mongoose.model("Floor", floorSchema);

export default Floor;