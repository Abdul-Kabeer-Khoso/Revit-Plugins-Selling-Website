import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/hamstrUK");
        console.log("Mongodb connected successfully");
    } catch (err) {
        console.log("Database error: " + err);
    }
}

export default connectDB;

