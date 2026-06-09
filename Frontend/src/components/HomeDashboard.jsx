import AdminList from "./AdminList";


const HomeDashboard = () => {
    return <div>
        <div className="w-full h-auto p-2 rounded-md bg-amber-200 text-lg font-semibold flex justify-center items-center mb-4 ">
            HOME DASHBOARD
        </div>

        <div className="w-full flex justify-between items-center py-2 ">

            <form >
                <select className="p-2 border outline-none rounded-lg hover:cursor-pointer">
                    <option>Foundation Isolated Pile Caps / Foundation Slab Raft / Piling</option>
                    <option>Floor Slabs / Structural Floor</option>
                    <option>Beams / Structural Framings</option>
                    <option>Structural Columns & Walls</option>
                    <option>Information</option>
                    <option>XL Master</option>
                </select>
            </form>

            <div className="bg-green-500 flex justify-between items-center p-2 rounded-lg font-semibold text-white hover:cursor-pointer">
                <p>Add New</p>
            </div>

        </div>

        <div className="flex flex-col justify-center items-center gap-4 mt-10">
            <AdminList description="Coordinates" link="Youtube Link" />
            <AdminList description="Pile Rehost" link="Youtube Link" />
            <AdminList description="Pile Counts" link="Youtube Link" />
            <AdminList description="CutOff Depths" link="Youtube Link" />
            <AdminList description="Minimum Distance" link="Youtube Link" />
            <AdminList description="Filters Pile" link="Youtube Link" />
            <AdminList description="Foundation Family Checks" link="Youtube Link" />


        </div>
    </div>
}

export default HomeDashboard;