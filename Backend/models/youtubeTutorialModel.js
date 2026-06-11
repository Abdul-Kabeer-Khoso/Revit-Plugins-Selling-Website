import mongoose from "mongoose";

const youtubeTutorialSchema = new mongoose.Schema({
    tutorial: {
        type: String,
        requrie: true,
    },
    link: {
        type: String,
        require: true,
    }
})

const YoutubeTutorial = mongoose.model("YoutubeTutorial", youtubeTutorialSchema);

export default YoutubeTutorial;