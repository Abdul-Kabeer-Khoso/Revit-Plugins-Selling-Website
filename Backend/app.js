import express from "express"
import cors from "cors"
import connectDB from "./db/db.js";
import homeRoutes from "./routes/homeRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

connectDB()

app.use("/api", homeRoutes)

app.listen(3000, (req, res) => {
    console.log("Sever is running on port 3000");
})