import search from "../assets/search.png"
import Family from "./Family"
import YoutubeTutorial from "./YoutubeTutorial"
const FamiliesHero = () => {
    return <div>
        <div className="flex-col justify-center items-center mt-8 p-5">
            <p className="text-2xl md:text-4xl font-bold text-center uppercase ">Smarter Revit Structural Design Starts Here.</p>
            <p className="mt-2 lg:mt-0 text-xl md:text-2xl font-semibold text-center">Built on 25 years of hands-on global project delivery. Made for Revit. Made for engineers.</p>
        </div>




        <div className="px-4 mt-12 mb-6 mx-5">
            <div className="flex flex-col sm:flex-row justify-between items-center relative">
                <p className="text-xl font-semibold inline">DOWNLOAD FREE FAMILIES</p>
                <form className=" mt-4 sm:mt-0">
                    <input type="text" placeholder="Search Families"
                        className=" w-[83vw] sm:w-60 md:w-100 pl-12 pr-4 py-2 border border-gray-300 rounded-4xl" />
                </form>
                <img src={search} alt="Search Icon" className="w-5 absolute top-14 right-[73vw] min-[485px]:max-[640px]:right-[78vw]  sm:top-3 sm:right-50 md:right-90" />
            </div>
        </div>

        <hr></hr>

        <div className="mt-10 mb-10">
            <Family name="GRID" price="1000" />
            <Family name="LEVEL TRIANGLE" price="1200" />
            <Family name="COLUMN WALL REINF SEC" price="1500" />
            <Family name="GRID" price="1000" />
            <Family name="LEVEL TRIANGLE" price="1200" />
            <Family name="COLUMN WALL REINF SEC" price="1500" />
            <Family name="GRID" price="1000" />
            <Family name="LEVEL TRIANGLE" price="1200" />
            <Family name="COLUMN WALL REINF SEC" price="1500" />
            <Family name="GRID" price="1000" />
            <Family name="LEVEL TRIANGLE" price="1200" />
            <Family name="COLUMN WALL REINF SEC" price="1500" />
            <Family name="GRID" price="1000" />
            <Family name="LEVEL TRIANGLE" price="1200" />
            <Family name="COLUMN WALL REINF SEC" price="1500" />
            <Family name="GRID" price="1000" />
            <Family name="LEVEL TRIANGLE" price="1200" />
            <Family name="COLUMN WALL REINF SEC" price="1500" />
        </div>


        <hr></hr>

        <div className="px-4 mt-12 mb-6 mx-5">
            <div className="flex flex-col sm:flex-row justify-between items-center relative">
                <p className="text-xl font-semibold inline">YouTube Tutorials Links</p>
                <form className=" mt-4 sm:mt-0">
                    <input type="text" placeholder="Search Tutorials"
                        className=" w-[83vw] sm:w-60 md:w-100 pl-12 pr-4 py-2 border border-gray-300 rounded-4xl" />
                </form>
                <img src={search} alt="Search Icon" className="w-5 absolute top-14 right-[73vw] min-[485px]:max-[640px]:right-[78vw]  sm:top-3 sm:right-50 md:right-90" />
            </div>
        </div>

        <div className="mt-10 mb-10">
            <YoutubeTutorial name="How To Place a Structural Column" />
            <YoutubeTutorial name="How To Place a Structural Framing" />
            <YoutubeTutorial name="How To Place a Floor" />
            <YoutubeTutorial name="How To Place a Structural Column" />
            <YoutubeTutorial name="How To Place a Structural Framing" />
            <YoutubeTutorial name="How To Place a Floor" />

            <YoutubeTutorial name="How To Place a Structural Column" />
            <YoutubeTutorial name="How To Place a Structural Framing" />
            <YoutubeTutorial name="How To Place a Floor" />

            <YoutubeTutorial name="How To Place a Structural Column" />
            <YoutubeTutorial name="How To Place a Structural Framing" />
            <YoutubeTutorial name="How To Place a Floor" />

            <YoutubeTutorial name="How To Place a Structural Column" />
            <YoutubeTutorial name="How To Place a Structural Framing" />
            <YoutubeTutorial name="How To Place a Floor" />

            <YoutubeTutorial name="How To Place a Structural Column" />
            <YoutubeTutorial name="How To Place a Structural Framing" />
            <YoutubeTutorial name="How To Place a Floor" />


        </div>

    </div>
}

export default FamiliesHero
