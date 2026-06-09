const DashboardSideBar = ({ setActiveDashboard, activeDashboard }) => {
    return <div className="w-[25%] h-full flex flex-col justify-between items-center bg-white shadow-2xl rounded-lg p-4 ">


        <div className="w-full">

            <p className="text-2xl font-bold text-center mb-8 mt-2 ">Welcome Admin</p>

            <div
                onClick={() => setActiveDashboard("Home")}
                className={`w-full h-auto p-2  font-bold rounded-lg mb-4 flex justify-center items-center hover:cursor-pointer
                    ${activeDashboard == "Home" ? "bg-teal-600 text-white" : "bg-gray-200 text-black "}
                `}>
                Home
            </div>

            <div
                onClick={() => setActiveDashboard("Downloads")}
                className={`w-full h-auto p-2 font-bold rounded-lg mb-4 flex justify-center items-center hover:cursor-pointer
                    ${activeDashboard == "Downloads" ? "bg-teal-600 text-white" : "bg-gray-200 text-black "}
                `}>
                Downloads
            </div>

            <div
                onClick={() => setActiveDashboard("Families")}
                className={`w-full h-auto p-2  font-bold rounded-lg mb-4 flex justify-center items-center hover:cursor-pointer
                 ${activeDashboard == "Families" ? "bg-teal-600 text-white" : "bg-gray-200 text-black"}
                `}>
                Families
            </div >

            <div
                onClick={() => setActiveDashboard("Plugin")}
                className={`w-full h-auto p-2  font-bold rounded-lg mb-4 flex justify-center items-center hover:cursor-pointer
                 ${activeDashboard == "Plugin" ? "bg-teal-600 text-white" : "bg-gray-200 text-black"}
                `}>
                Plugin Purchase Log
            </div >

        </div >

        <div className="w-full">

            <div className="w-full h-auto p-2 bg-red-400 text-red font-bold rounded-lg mb-4 flex justify-center items-center border border-2-red hover:cursor-pointer">Logout</div>

        </div>

    </div >
}

export default DashboardSideBar;