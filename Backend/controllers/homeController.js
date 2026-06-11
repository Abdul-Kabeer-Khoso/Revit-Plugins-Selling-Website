import Foundation from "../models/foundationModel.js"
import Beams from "../models/beamsModel.js";
import Information from "../models/informationModel.js";
import XL from "../models/xlModel.js";
import Floor from "../models/floorModel.js";
import Structural from "../models/structuralModel.js";


// Get all data of each
export const getFoundation = async (req, res) => {
    try {
        return await Foundation.find();
    } catch (err) {
        console.log("Error in getFoundation Controller")
    }
}

export const getFloor = async (req, res) => {
    try {
        return await Floor.find();

    } catch (err) {
        console.log("Error in getFloor Controller")
    }
}

export const getBeams = async (req, res) => {
    try {
        return await Beams.find();

    } catch (err) {
        console.log("Error in getBeams Controller")
    }
}

export const getStructural = async (req, res) => {
    try {
        return await Structural.find();

    } catch (err) {
        console.log("Error in getStructural Controller")
    }
}


export const getInformation = async (req, res) => {
    try {
        return await Information.find();

    } catch (err) {
        console.log("Error in getInformation Controller")
    }
}

export const getXL = async (req, res) => {
    try {
        return await XL.find();

    } catch (err) {
        console.log("Error in getXL Controller")
    }
}



// Delete specific record

export const deleteFoundation = async (req, res) => {
    try {
        await Foundation.findByIdAndDelete(req.params.id);
        const foundationData = await Foundation.find();
        res.json({ foundationData });
    } catch (err) {
        console.log("Error in deleteFoundation controller")
    }
}

export const deleteFloor = async (req, res) => {
    try {
        await Floor.findByIdAndDelete(req.params.id);
        const floorData = await Floor.find();
        res.json({ floorData });
    } catch (err) {
        console.log("Error in deleteFloor controller")
    }
}


export const deleteBeams = async (req, res) => {
    try {
        await Beams.findByIdAndDelete(req.params.id);
        const beamsData = await Beams.find();
        res.json({ beamsData });
    } catch (err) {
        console.log("Error in deleteBeams controller")
    }
}


export const deleteStructural = async (req, res) => {
    try {
        await Structural.findByIdAndDelete(req.params.id);
        const structuralData = await Structural.find();
        res.json({ structuralData });
    } catch (err) {
        console.log("Error in deleteStructural controller")
    }
}

export const deleteInformation = async (req, res) => {
    try {
        await Information.findByIdAndDelete(req.params.id);
        const informationData = await Information.find();
        res.json({ informationData });
    } catch (err) {
        console.log("Error in deleteInformation controller")
    }
}


export const deleteXl = async (req, res) => {
    try {
        await XL.findByIdAndDelete(req.params.id);
        const xlData = await XL.find();
        res.json({ xlData });
    } catch (err) {
        console.log("Error in deleteXl controller")
    }
}


// Add  APIs

export const addFoundation = async (req, res) => {
    try {
        const addData = await Foundation.insertOne({
            description: req.body.input1,
            link: req.body.input2
        });
    } catch (err) {
        console.log("Error in addFoundation Controller");
    }
}


export const addFloor = async (req, res) => {
    try {
        const addData = await Floor.insertOne({
            description: req.body.input1,
            link: req.body.input2
        });
    } catch (err) {
        console.log("Error in addFloor Controller");
    }
}


export const addBeams = async (req, res) => {
    try {
        const addData = await Beams.insertOne({
            description: req.body.input1,
            link: req.body.input2
        });
    } catch (err) {
        console.log("Error in addBeams Controller");
    }
}



export const addStructural = async (req, res) => {
    try {
        const addData = await Structural.insertOne({
            description: req.body.input1,
            link: req.body.input2
        });
    } catch (err) {
        console.log("Error in addStructural Controller");
    }
}


export const addInformation = async (req, res) => {
    try {
        const addData = await Information.insertOne({
            description: req.body.input1,
            link: req.body.input2
        });
    } catch (err) {
        console.log("Error in addInformation Controller");
    }
}


export const addXL = async (req, res) => {
    try {
        const addData = await XL.insertOne({
            description: req.body.input1,
            link: req.body.input2
        });
    } catch (err) {
        console.log("Error in addXL Controller");
    }
}


// Get Specifid Record By Id

export const getFoundationById = async (req, res) => {
    try {

        const data = await Foundation.findById(req.params.id);
        res.json({ data });
        console.log(data);
    } catch (err) {
        console.log("Error in getFoundationById controller");
    }
}


export const getFloorById = async (req, res) => {
    try {

        const data = await Floor.findById(req.params.id);
        res.json({ data });
        console.log(data);
    } catch (err) {
        console.log("Error in getFloorById controller");
    }
}

export const getBeamsById = async (req, res) => {
    try {

        const data = await Beams.findById(req.params.id);
        res.json({ data });
        console.log(data);
    } catch (err) {
        console.log("Error in getBeamsById controller");
    }
}


export const getStructuralById = async (req, res) => {
    try {

        const data = await Structural.findById(req.params.id);
        res.json({ data });
        console.log(data);
    } catch (err) {
        console.log("Error in getStructuralById controller");
    }
}


export const getInformationById = async (req, res) => {
    try {

        const data = await Information.findById(req.params.id);
        res.json({ data });
        console.log(data);
    } catch (err) {
        console.log("Error in getInformationById controller");
    }
}


export const getXLById = async (req, res) => {
    try {

        const data = await XL.findById(req.params.id);
        res.json({ data });
        console.log(data);
    } catch (err) {
        console.log("Error in getXLById controller");
    }
}



// Update data after edit

export const editFoundation = async (req, res) => {
    try {
        await Foundation.findByIdAndUpdate(req.params.id, req.body);
    } catch (err) {
        console.log("Error in editFoundation controller")
    }
}


export const editFloor = async (req, res) => {
    try {
        await Floor.findByIdAndUpdate(req.params.id, req.body);
    } catch (err) {
        console.log("Error in editFloor controller")
    }
}


export const editBeams = async (req, res) => {
    try {
        await Beams.findByIdAndUpdate(req.params.id, req.body);
    } catch (err) {
        console.log("Error in editBeams controller")
    }
}

export const editStructural = async (req, res) => {
    try {
        await Structural.findByIdAndUpdate(req.params.id, req.body);
    } catch (err) {
        console.log("Error in editStructural controller")
    }
}

export const editInformation = async (req, res) => {
    try {
        await Information.findByIdAndUpdate(req.params.id, req.body);
    } catch (err) {
        console.log("Error in editInformation controller")
    }
}

export const editXL = async (req, res) => {
    try {
        await XL.findByIdAndUpdate(req.params.id, req.body);
    } catch (err) {
        console.log("Error in editXL controller")
    }
}