import Families from "../models/familiesModel.js";
import YoutubeTutorial from "../models/youtubeTutorialModel.js";

export const getFamilies = async (req, res) => {
    try {
        const allFamilies = await Families.find();
        console.log(allFamilies);
        res.json(allFamilies);
    } catch (err) {
        console.log("Error in getFamilies Controller");
    }
}

export const getYoutubeTutorials = async (req, res) => {
    try {
        const allYoutubeTutorials = await YoutubeTutorial.find();
        console.log(allYoutubeTutorials);
        res.json({ allYoutubeTutorials });
    } catch (err) {
        console.log("Error in getYoutubeTutorials Controller");
    }
}