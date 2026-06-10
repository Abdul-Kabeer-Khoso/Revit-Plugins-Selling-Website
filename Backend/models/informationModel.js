import mongoose from "mongoose";

const informationSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        requrie: true,
    }
});

const Information = mongoose.model("Information", informationSchema);

export default Information;