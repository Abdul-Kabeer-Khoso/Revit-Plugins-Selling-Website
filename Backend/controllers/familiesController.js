import Families from "../models/familiesModel.js";
import YoutubeTutorial from "../models/youtubeTutorialModel.js";

export const getFamilies = async (req, res) => {
    try {
        const allFamilies = await Families.find();
        res.json(allFamilies);
    } catch (err) {
        console.log("Error in getFamilies Controller");
    }
}

export const getYoutubeTutorials = async (req, res) => {
    try {
        const allYoutubeTutorials = await YoutubeTutorial.find();
        res.json({ allYoutubeTutorials });
    } catch (err) {
        console.log("Error in getYoutubeTutorials Controller");
    }
}


export const getFamilyById = async (req, res) => {
    try {
        const family = await Families.findById(req.params.id);
        res.json({ family });
    } catch (err) {
        console.log("Error in getFamilyById controller");
    }
}


export const getYoutubeTutorialById = async (req, res) => {
    try {
        const youtubeTutorial = await YoutubeTutorial.findById(req.params.id);
        res.json({ youtubeTutorial });
    } catch (err) {
        console.log("Error in getYoutubeTutorialById controller")
    }
}


export const allFamilies = async (req, res) => {
    try {
        const families = await Families.find();
        const youtubeTutorials = await YoutubeTutorial.find();
        res.json({ families, youtubeTutorials })
    } catch (err) {
        console.log("Error in allFamilies Controller");
    }
}


export const addFamilies = async (req, res) => {
    const data = {
        family: req.body.input1,
        price: req.body.input2
    }
    try {
        await Families.insertOne(data);

    } catch (err) {
        console.log("Error in addFamilies Controller");
    }
}


export const addYoutubeTutorials = async (req, res) => {
    const data = {
        tutorial: req.body.input1,
        link: req.body.input2
    }
    try {
        await YoutubeTutorial.insertOne(data);
    } catch (err) {
        console.log("Error in addYoutubeTutorials controller");
    }
}


export const deleteFamily = async (req, res) => {
    try {
        await Families.findByIdAndDelete(req.params.id);
        const families = await Families.find();
        res.json({ families })
    } catch (err) {
        console.log("Error in deleteFamily controller")
    }
}


export const deleteYoutubeTutorial = async (req, res) => {
    try {
        await YoutubeTutorial.findByIdAndDelete(req.params.id);
        const youtubeTutorials = await YoutubeTutorial.find();
        res.json({ youtubeTutorials })
    } catch (err) {

    }
}

export const updateFamily = async (req, res) => {
    const updatedData = {
        family: req.body.input1,
        price: req.body.input2
    }
    try {
        const data = await Families.findByIdAndUpdate(req.params.id, updatedData);
    } catch (err) {
        console.log("Error in updateFamily controller")
    }
}


export const updateYoutubeTutorial = async (req, res) => {
    const updatedData = {
        tutorial: req.body.input1,
        link: req.body.input2
    }
    try {
        const data = await YoutubeTutorial.findByIdAndUpdate(req.params.id, updatedData);
    } catch (err) {
        console.log("Error in updateFamily controller")
    }
}