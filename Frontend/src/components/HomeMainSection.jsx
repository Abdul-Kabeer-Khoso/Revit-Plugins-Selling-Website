import Card from "./Card";

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


        {/*  Foundation Isolated Pile Caps / Foundation Slab Raft / Piling */}
        <div className="relative w-full p-4 text-center">

            {/* 3D background layer */}
            <div className="absolute inset-0 bg-[#85CB33] shadow-[0_18px_45px_rgba(0,0,0,0.35)]"></div>

            {/* subtle depth overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            {/* text */}
            <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
                Foundation Isolated Pile Caps / Foundation Slab Raft / Piling
            </h1>

        </div>
        <div className="p-0 w-full overflow-hidden mt-5">
            <div className="scroll-track flex gap-4">

                {[...items].map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center p-4 cursor-pointer"
                    >

                        <div
                            className="relative group w-32 sm:w-36 md:w-40 aspect-square rounded-2xl
          bg-white border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          transition-all duration-500
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          hover:-translate-y-2 hover:scale-[1.03]
          backdrop-blur-xl"
                        >

                            {/* soft 3D inner highlight */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-80"></div>

                            {/* CONTENT */}
                            <div className="relative z-10 flex items-center justify-center h-full">

                                {/* TEXT (hide on hover) */}
                                <p className="text-center px-2 text-gray-800 font-semibold transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                                    {item.title}
                                </p>

                                {/* YOUTUBE ICON (show on hover) */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                    <svg
                                        className="w-10 h-10 text-red-500 drop-shadow-md"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.498 6.186a2.965 2.965 0 00-2.088-2.096C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.41.59A2.965 2.965 0 00.502 6.186 31.42 31.42 0 000 12a31.42 31.42 0 00.502 5.814 2.965 2.965 0 002.088 2.096C4.5 20.5 12 20.5 12 20.5s7.5 0 9.41-.59a2.965 2.965 0 002.088-2.096A31.42 31.42 0 0024 12a31.42 31.42 0 00-.502-5.814zM9.75 15.02V8.98L15.75 12l-6 3.02z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </a>
                ))}

            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>


        {/* Floor Slabs / Structural Floor */}
        <div className="relative w-full p-4 text-center">

            {/* 3D background layer */}
            <div className="absolute inset-0 bg-[#85CB33] shadow-[0_18px_45px_rgba(0,0,0,0.35)]"></div>

            {/* subtle depth overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            {/* text */}
            <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
                Floor Slabs / Structural Floor
            </h1>

        </div>
        <div className="p-0 w-full overflow-hidden mt-5">
            <div className="scroll-track flex gap-4">

                {[...items2].map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center p-4 cursor-pointer"
                    >

                        <div
                            className="relative group w-32 sm:w-36 md:w-40 aspect-square rounded-2xl
          bg-white border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          transition-all duration-500
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          hover:-translate-y-2 hover:scale-[1.03]
          backdrop-blur-xl"
                        >

                            {/* soft 3D inner highlight */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-80"></div>

                            {/* CONTENT */}
                            <div className="relative z-10 flex items-center justify-center h-full">

                                {/* TEXT (hide on hover) */}
                                <p className="text-center px-2 text-gray-800 font-semibold transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                                    {item.title}
                                </p>

                                {/* YOUTUBE ICON (show on hover) */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                    <svg
                                        className="w-10 h-10 text-red-500 drop-shadow-md"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.498 6.186a2.965 2.965 0 00-2.088-2.096C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.41.59A2.965 2.965 0 00.502 6.186 31.42 31.42 0 000 12a31.42 31.42 0 00.502 5.814 2.965 2.965 0 002.088 2.096C4.5 20.5 12 20.5 12 20.5s7.5 0 9.41-.59a2.965 2.965 0 002.088-2.096A31.42 31.42 0 0024 12a31.42 31.42 0 00-.502-5.814zM9.75 15.02V8.98L15.75 12l-6 3.02z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </a>
                ))}

            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>


        {/* Structural Columns & Walls */}
        <div className="relative w-full p-4 text-center">

            {/* 3D background layer */}
            <div className="absolute inset-0 bg-[#85CB33] shadow-[0_18px_45px_rgba(0,0,0,0.35)]"></div>

            {/* subtle depth overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            {/* text */}
            <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
                Structural Columns & Walls
            </h1>

        </div>
        <div className="p-0 w-full overflow-hidden mt-5">
            <div className="scroll-track flex gap-4 lg:!animate-none lg:!w-auto lg:!transform-none">

                {[...items3].map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center p-4 cursor-pointer"
                    >

                        <div
                            className="relative group w-32 sm:w-36 md:w-40 aspect-square rounded-2xl
          bg-white border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          transition-all duration-500
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          hover:-translate-y-2 hover:scale-[1.03]
          backdrop-blur-xl"
                        >

                            {/* soft 3D inner highlight */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-80"></div>

                            {/* CONTENT */}
                            <div className="relative z-10 flex items-center justify-center h-full">

                                {/* TEXT (hide on hover) */}
                                <p className="text-center px-2 text-gray-800 font-semibold transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                                    {item.title}
                                </p>

                                {/* YOUTUBE ICON (show on hover) */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                    <svg
                                        className="w-10 h-10 text-red-500 drop-shadow-md"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.498 6.186a2.965 2.965 0 00-2.088-2.096C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.41.59A2.965 2.965 0 00.502 6.186 31.42 31.42 0 000 12a31.42 31.42 0 00.502 5.814 2.965 2.965 0 002.088 2.096C4.5 20.5 12 20.5 12 20.5s7.5 0 9.41-.59a2.965 2.965 0 002.088-2.096A31.42 31.42 0 0024 12a31.42 31.42 0 00-.502-5.814zM9.75 15.02V8.98L15.75 12l-6 3.02z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </a>
                ))}

            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>


        {/* Information */}
        <div className="relative w-full p-4 text-center">

            {/* 3D background layer */}
            <div className="absolute inset-0 bg-[#85CB33] shadow-[0_18px_45px_rgba(0,0,0,0.35)]"></div>

            {/* subtle depth overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            {/* text */}
            <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
                Information
            </h1>

        </div>
        <div className="p-0 w-full overflow-hidden mt-5">
            <div className="flex gap-4">

                {[...items4].map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center p-4 cursor-pointer"
                    >

                        <div
                            className="relative group w-32 sm:w-36 md:w-40 aspect-square rounded-2xl
          bg-white border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          transition-all duration-500
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          hover:-translate-y-2 hover:scale-[1.03]
          backdrop-blur-xl"
                        >

                            {/* soft 3D inner highlight */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-80"></div>

                            {/* CONTENT */}
                            <div className="relative z-10 flex items-center justify-center h-full">

                                {/* TEXT (hide on hover) */}
                                <p className="text-center px-2 text-gray-800 font-semibold transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                                    {item.title}
                                </p>

                                {/* YOUTUBE ICON (show on hover) */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                    <svg
                                        className="w-10 h-10 text-red-500 drop-shadow-md"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.498 6.186a2.965 2.965 0 00-2.088-2.096C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.41.59A2.965 2.965 0 00.502 6.186 31.42 31.42 0 000 12a31.42 31.42 0 00.502 5.814 2.965 2.965 0 002.088 2.096C4.5 20.5 12 20.5 12 20.5s7.5 0 9.41-.59a2.965 2.965 0 002.088-2.096A31.42 31.42 0 0024 12a31.42 31.42 0 00-.502-5.814zM9.75 15.02V8.98L15.75 12l-6 3.02z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </a>
                ))}

            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>



        {/* XL Master */}
        <div className="relative w-full p-4 text-center">

            {/* 3D background layer */}
            <div className="absolute inset-0 bg-[#85CB33] shadow-[0_18px_45px_rgba(0,0,0,0.35)]"></div>

            {/* subtle depth overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            {/* text */}
            <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
                XL Master
            </h1>

        </div>
        <div className="p-0 w-full overflow-hidden mt-5">
            <div className="scroll-track flex gap-4 lg:!animate-none lg:!w-auto lg:!transform-none">

                {[...items5].map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center p-4 cursor-pointer"
                    >

                        <div
                            className="relative group w-32 sm:w-36 md:w-40 aspect-square rounded-2xl
          bg-white border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          transition-all duration-500
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          hover:-translate-y-2 hover:scale-[1.03]
          backdrop-blur-xl"
                        >

                            {/* soft 3D inner highlight */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-80"></div>

                            {/* CONTENT */}
                            <div className="relative z-10 flex items-center justify-center h-full">

                                {/* TEXT (hide on hover) */}
                                <p className="text-center px-2 text-gray-800 font-semibold transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                                    {item.title}
                                </p>

                                {/* YOUTUBE ICON (show on hover) */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                    <svg
                                        className="w-10 h-10 text-red-500 drop-shadow-md"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.498 6.186a2.965 2.965 0 00-2.088-2.096C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.41.59A2.965 2.965 0 00.502 6.186 31.42 31.42 0 000 12a31.42 31.42 0 00.502 5.814 2.965 2.965 0 002.088 2.096C4.5 20.5 12 20.5 12 20.5s7.5 0 9.41-.59a2.965 2.965 0 002.088-2.096A31.42 31.42 0 0024 12a31.42 31.42 0 00-.502-5.814zM9.75 15.02V8.98L15.75 12l-6 3.02z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </a>
                ))}

            </div>
        </div>


        <br></br>
        <br></br>
        <br></br>
        <br></br>


    </div>
}

export default HomeMainSection;