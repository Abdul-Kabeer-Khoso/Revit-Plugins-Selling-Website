import Card from "./Card";
import RevitPluginUI from "./RevitPluginUI";

const HomeMainSection = () => {
    const items = [
        {
            title: "Coordinates",
            link: "https://youtube.com",
        },
        {
            title: "Pile Rehost",
            link: "https://youtube.com",
        },
        {
            title: "Pile Counts",
            link: "https://youtube.com",
        },
        {
            title: "CutOff Depths",
            link: "https://youtube.com",
        },
        {
            title: "Minimum Distance",
            link: "https://youtube.com",
        },
        {
            title: "Filters Pile",
            link: "https://youtube.com",
        },
        {
            title: "Pile Numbering",
            link: "https://youtube.com",
        },
        {
            title: "Switch Join Piles",
            link: "https://youtube.com",
        },
        {
            title: "Switch Join Pile Cap",
            link: "https://youtube.com",
        },
        {
            title: "Pile Cap Raft Top Checks",
            link: "https://youtube.com",
        },
        {
            title: "Foundation Family Checks",
            link: "https://youtube.com",
        },
        {
            title: "Filters Foundation",
            link: "https://youtube.com",
        },
        {
            title: "Clashes MEP Equip",
            link: "https://youtube.com",
        },
        {
            title: "Clashes Door Window",
            link: "https://youtube.com",
        },
        {
            title: "Foundation Reports",
            link: "https://youtube.com",
        },
    ];


    const items2 = [
        {
            title: "Switch Drops",
            link: "https://youtube.com"
        },
        {
            title: "Switch Floors",
            link: "https://youtube.com"
        },
        {
            title: "Filter Floors",
            link: "https://youtube.com"
        },
        {
            title: "Drop Dim",
            link: "https://youtube.com"
        },
        {
            title: "Trace Arch",
            link: "https://youtube.com"
        },
        {
            title: "Copy Linked",
            link: "https://youtube.com"
        },
        {
            title: "Arch Clashes",
            link: "https://youtube.com"
        },
        {
            title: "MEP Clashes",
            link: "https://youtube.com"
        },
        {
            title: "Floor Reports",
            link: "https://youtube.com"
        }
    ];

    const items3 = [
        {
            title: "Arch Clashes ColWall",
            link: "https://youtube.com"
        },
        {
            title: "MEP Clashes ColWall",
            link: "https://youtube.com"
        },
        {
            title: "Col Wall Tags",
            link: "https://youtube.com"
        },
        {
            title: "Wall Length Match",
            link: "https://youtube.com"
        },
        {
            title: "Col Wall Report",
            link: "https://youtube.com"
        },
        {
            title: "Col Wall Layouts",
            link: "https://youtube.com"
        }
    ];

    const items4 = [
        {
            title: "Beam Info",
            link: "https://youtube.com"
        },
        {
            title: "Col Wall Info",
            link: "https://youtube.com"
        }
    ]

    const items5 = [
        {
            title: "Excel To Revit",
            link: "https://youtube.com"
        },
        {
            title: "Excel Apply To",
            link: "https://youtube.com"
        },
        {
            title: "Excel Apply Upto",
            link: "https://youtube.com"
        },
        {
            title: "DWG Excel",
            link: "https://youtube.com"
        },
        {
            title: "Excel Apply",
            link: "https://youtube.com"
        }
    ];

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


        <RevitPluginUI />
















    </div>
}

export default HomeMainSection;