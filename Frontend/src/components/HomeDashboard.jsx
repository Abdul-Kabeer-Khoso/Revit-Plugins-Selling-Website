import { useState } from "react";
import AdminList from "./AdminList";
import DashboardForm from "./DashboardForm";


const HomeDashboard = () => {
    const [addRecord, setAddRecord] = useState(false);
    const [editRecord, setEditRecord] = useState(false);
    const [showRecords, setShowRecords] = useState(true);

    const handleAddRecord = () => {
        setShowRecords(false);
        setAddRecord(true);
    }


    const hanldeEditRecord = ({ show, edit }) => {
        console.log("Handle Edit record is working")
        setShowRecords(show);
        setEditRecord(edit)
    }

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

            <div
                onClick={() => handleAddRecord()}
                className="bg-green-500 flex justify-between items-center p-2 rounded-lg font-semibold text-white hover:cursor-pointer">
                <p>Add New</p>
            </div>

        </div>


        {showRecords == true &&
            <div className="flex flex-col justify-center items-center gap-4 mt-10">
                <AdminList description="Coordinates" secondDisc="Youtube Link" handleEditRecord={hanldeEditRecord} />
                <AdminList description="Pile Rehost" secondDisc="Youtube Link" handleEditRecord={hanldeEditRecord} />
                <AdminList description="Pile Counts" secondDisc="Youtube Link" handleEditRecord={hanldeEditRecord} />
                <AdminList description="CutOff Depths" secondDisc="Youtube Link" handleEditRecord={hanldeEditRecord} />
                <AdminList description="Minimum Distance" secondDisc="Youtube Link" handleEditRecord={hanldeEditRecord} />
                <AdminList description="Filters Pile" secondDisc="Youtube Link" handleEditRecord={hanldeEditRecord} />
                <AdminList description="Foundation Family Checks" secondDisc="Youtube Link" handleEditRecord={hanldeEditRecord} />
            </div>
        }

        {addRecord == true &&
            <DashboardForm title="ADD NEW RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Add Record" />
        }

        {editRecord == true &&
            <DashboardForm title="EDIT RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Update Record" />
        }
    </div>
}

export default HomeDashboard;