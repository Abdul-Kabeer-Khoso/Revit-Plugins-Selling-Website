import Download from "../models/downloadModel.js";

export const getAllDownload = async (req, res) => {
    try {
        const allDownload = await Download.find();
        res.json(allDownload);
    } catch (err) {
        console.log("Error in getAllDownload controller");
    }
}

export const getDownload = async (req, res) => {
    try {
        const data = await Download.findById(req.params.id);
        res.json({ data });
    } catch (err) {
        console.log(err)
    }
}


export const addDownload = async (req, res) => {
    try {
        const data = await Download.insertOne({
            description: req.body.input1,
            price: req.body.input2
        });
        console.log("inserted data: ", data);
    } catch (err) {
        console.log("Error in addDownload controller")
    }
}


export const deleteDownload = async (req, res) => {
    try {
        await Download.findByIdAndDelete(req.params.id);
        const downloadData = await Download.find();
        res.json({ downloadData });
    } catch (err) {
        console.log("Error in deleteDownload controller")
    }
}


export const editDownload = async (req, res) => {
    const data = {
        description: req.body.input1,
        price: req.body.input2,
    }
    try {
        const updatedData = await Download.findByIdAndUpdate(
            req.params.id,
            data
        )
        console.log("Updated Data")
    } catch (err) {
        console.log("Error in editDownload controller")
    }
}