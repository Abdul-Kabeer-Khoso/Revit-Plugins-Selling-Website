import Foundation from "../models/foundationModel.js"
import Beams from "../models/beamsModel.js";
import Information from "../models/informationModel.js";
import XL from "../models/xlModel.js";
import Floor from "../models/floorModel.js";
import Structural from "../models/structuralModel.js";

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

