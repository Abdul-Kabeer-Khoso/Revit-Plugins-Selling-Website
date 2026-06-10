import { useState, useEffect } from "react";
import Card from "./Card";
import RevitPluginUI from "./RevitPluginUI";
import axios from "axios";
// import XL from "../../../Backend/models/xlModel";

const HomeMainSection = () => {

    const [foundation, setFoundation] = useState([]);
    const [structural, setStructural] = useState([]);
    const [floor, setFloor] = useState([]);
    const [beams, setBeams] = useState([]);
    const [information, setInformation] = useState([]);
    const [xl, setXl] = useState([]);


    const setData = (data) => {
        setFoundation(data.foundation);
        setStructural(data.structural);
        setFloor(data.floor);
        setBeams(data.beams);
        setInformation(data.information);
        setXl(data.xl);
        console.log(data);
    }


    useEffect(() => {
        axios
            .get("http://localhost:3000/api/")
            .then((res) => {
                // console.log(res.data.foundation);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return <div>
        <div className="text-2xl font-bold px-5">Designed for Architects, Engineers, Contractors, Fabricators & BIM Professionals</div>
        <div className="text-lg md:text-xl mt-0 ml-3 px-5 py-3">
            <div className="mt-2">&#9989; Save hundreds of hours and Helping BIM Implitation</div>
            <div className="mt-2">&#9989; Excel Uses As Per User Requirements Extract Excel data or draw table formatting as drafting view</div>
            <div className="mt-2">&#9989; Drawing Submission Control throughg Excel As Per User Requirements</div>
            <div className="mt-2">&#9989; Foundation (Pile, PileCaps, Isolated Footings or Raft ) Related Commands </div>
            <div className="mt-2">&#9989; Floor Related Commands Switch Joins, Filters, Door Window Clashes, MEP Cashes</div>
            <div className="mt-2">&#9989; Structural Framing Related Commands Top Level Check, Filters, Door Window Clashes, MEP Cashes </div>
            <div className="mt-2">&#9989; Column Walls Related Commands Column Layouts, Tags, Door Window Clashes, MEP Cashes</div>
            <div className="mt-2">&#9989; Project Information Related Commands Column Wall Informations , Beam Informations and much more....</div>
        </div>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>


        <RevitPluginUI foundation={foundation} beams={beams} structural={structural} information={information} floor={floor} xl={xl} />

    </div>
}

export default HomeMainSection;