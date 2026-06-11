import Download from "../models/downloadModel.js";

export const getAllDownload = async (req, res) => {
    try {
        const allDownload = await Download.find();
        res.json(allDownload);
    } catch (err) {
        console.log("Error in getAllDownload controller");
    }
}