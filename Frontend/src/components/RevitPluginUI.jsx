import FOUNDATION from "../assets/FOUNDATION.png"
import FLOORS from "../assets/FLOORS.png"
import BEAMS from "../assets/BEAMS.png"
import COLUMNWALL from "../assets/COLUMN WALL.png"
import EXCEL from "../assets/EXCEL.png"
import INFO from "../assets/INFO.png"
import ribbon from "../assets/ribbon.png"

const RevitPluginUI = () => {
    return <div className="flex-col">


        {/*  Foundation Isolated Pile Caps / Foundation Slab Raft / Piling */}
        <div className="relative w-full p-4 text-center">

            {/* 3D background layer */}
            <div className="absolute inset-0 bg-white"></div>

            {/* subtle depth overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            {/* text */}
            <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
                Foundation Isolated Pile Caps / Foundation Slab Raft / Piling
            </h1>

        </div>

        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center px-2 sm:px-10 md:px-15 py-5 text-lg">


            <div className="w-[95%] sm:w-[65%] flex flex-row justify-between items-center">
                <div className="flex-col gap-0 sm:gap-1 items-start w-[65%] sm:w-[65%] md:w-[55%] lg:w-[30%]  text-sm sm:text-lg ">
                    <p>Coordinates</p>
                    <p>Pile Rehost</p>
                    <p>Pile Counts</p>
                    <p>CutOff Depths</p>
                    <p>Minimum Distance</p>
                    <p>Filters Pile</p>
                    <p>Pile Numbering</p>
                    <p>Switch Join Piles</p>
                    <p>Switch Join Pile Cap</p>
                    <p>Pile Cap Raft Top Checks</p>
                    <p>Foundation Family Checks</p>
                    <p>Filters Foundation</p>
                    <p>Clashes MEP Equip</p>
                    <p>Clashes Door Window</p>
                    <p>Foundation Reports</p></div>

                <div className="flex-col gap-1 items-center text-sm sm:text-lg">
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                </div>
            </div>


            <img src={FOUNDATION} alt="Revit Plugin Image" className="w-[40vw] sm:w-35 md:w-40 lg:w-50" />


        </div>



        <br></br>
        <br></br>


        {/* Floor Slabs / Structural Floor */}
        <div className="relative w-full p-4 text-center">

            {/* 3D background layer */}
            <div className="absolute inset-0 bg-white"></div>

            {/* subtle depth overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            {/* text */}
            <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
                Floor Slabs / Structural Floor
            </h1>

        </div>
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center px-2 sm:px-10 md:px-15 py-5 text-lg">


            <div className="w-[95%] sm:w-[65%] flex flex-row justify-between items-center">
                <div className="flex-col gap-0 sm:gap-1 items-start w-[65%] sm:w-[65%] md:w-[55%] lg:w-[30%]  text-sm sm:text-lg ">
                    <p>Switch Drops</p>
                    <p>Switch Floors To</p>
                    <p>Filter Floors</p>
                    <p>Drop Dim</p>
                    <p>Trace Arch</p>
                    <p>Copy Linked</p>
                    <p>Arch Clashes</p>
                    <p>MEP Clashes</p>
                    <p>Floor Reports</p></div>

                <div className="flex-col gap-1 items-center text-sm sm:text-lg">
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                </div>
            </div>


            <img src={FLOORS} alt="Revit Plugin Image" className="w-[40vw] sm:w-35 md:w-40 lg:w-50" />


        </div>


        <br></br>
        <br></br>


        {/* Beams / Structural Framings*/}
        <div className="relative w-full p-4 text-center">

            {/* 3D background layer */}
            <div className="absolute inset-0 bg-white"></div>

            {/* subtle depth overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            {/* text */}
            <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
                Beams / Structural Framings
            </h1>

        </div>
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center px-2 sm:px-10 md:px-15 py-5 text-lg">


            <div className="w-[95%] sm:w-[65%] flex flex-row justify-between items-center">
                <div className="flex-col gap-0 sm:gap-1 items-start w-[65%] sm:w-[65%] md:w-[55%] lg:w-[30%]  text-sm sm:text-lg ">
                    <p>Arch Clashes</p>
                    <p>MEP Clashes</p>
                    <p>Top Level Check</p>
                    <p>Filter Beams</p>
                    <p>Length Match</p>
                    <p>Beam Report</p>

                </div>

                <div className="flex-col gap-1 items-center text-sm sm:text-lg">
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                </div>
            </div>


            <img src={BEAMS} alt="Revit Plugin Image" className="w-[40vw] sm:w-35 md:w-40 lg:w-50" />


        </div>


        <br></br>
        <br></br>

        {/* Structural Columns & Walls */}
        <div className="relative w-full p-4 text-center">

            {/* 3D background layer */}
            <div className="absolute inset-0 bg-white"></div>

            {/* subtle depth overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            {/* text */}
            <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
                Structural Columns & Walls
            </h1>

        </div>
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center px-2 sm:px-10 md:px-15 py-5 text-lg">


            <div className="w-[95%] sm:w-[65%] flex flex-row justify-between items-center">
                <div className="flex-col gap-0 sm:gap-1 items-start w-[65%] sm:w-[65%] md:w-[55%] lg:w-[30%]  text-sm sm:text-lg ">
                    <p>Arch Clashes ColWall</p>
                    <p>MEP Clashes ColWall</p>
                    <p>Col Wall Tags</p>
                    <p>Wall Length Match</p>
                    <p>Col Wall Report</p>
                    <p>Col Wall Layouts</p>
                </div>

                <div className="flex-col gap-1 items-center text-sm sm:text-lg">
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                </div>
            </div>


            <img src={COLUMNWALL} alt="Revit Plugin Image" className="w-[40vw] sm:w-35 md:w-40 lg:w-50" />


        </div>


        <br></br>
        <br></br>


        {/* Information */}
        <div className="relative w-full p-4 text-center">

            {/* 3D background layer */}
            <div className="absolute inset-0 bg-white"></div>

            {/* subtle depth overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            {/* text */}
            <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
                Information
            </h1>

        </div>
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center px-2 sm:px-10 md:px-15 py-5 text-lg">


            <div className="w-[95%] sm:w-[65%] flex flex-row justify-between items-center">
                <div className="flex-col gap-0 sm:gap-1 items-start w-[65%] sm:w-[65%] md:w-[55%] lg:w-[30%]  text-sm sm:text-lg ">
                    <p>Beam Info</p>
                    <p>Col Wall Info</p>
                </div>

                <div className="flex-col gap-1 items-center text-sm sm:text-lg">
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                </div>
            </div>


            <img src={FOUNDATION} alt="Revit Plugin Image" className="w-[40vw] sm:w-35 md:w-40 lg:w-50" />


        </div>


        <br></br>
        <br></br>


        {/* XL Master */}
        <div className="relative w-full p-4 text-center">

            {/* 3D background layer */}
            <div className="absolute inset-0 bg-white"></div>

            {/* subtle depth overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            {/* text */}
            <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
                XL Master
            </h1>

        </div>
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center px-2 sm:px-10 md:px-15 py-5 text-lg">

            <div className="w-[95%] sm:w-[65%] flex flex-row justify-between items-center">
                <div className="flex-col gap-0 sm:gap-1 items-start w-[65%] sm:w-[65%] md:w-[55%] lg:w-[30%]  text-sm sm:text-lg ">

                    <p>Excel To Revit</p>
                    <p>Excel Apply To</p>
                    <p>Excel Apply Upto</p>
                    <p>DWG Excel</p>
                    <p>Excel Apply</p>
                </div>

                <div className="flex-col gap-1 items-center text-sm sm:text-lg">
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                    <p>YouTube Link</p>
                </div>
            </div>


            <img src={FOUNDATION} alt="Revit Plugin Image" className="w-[40vw] sm:w-35 md:w-40 lg:w-50" />


        </div>


        <br></br>
        <br></br>

    </div>
}

export default RevitPluginUI