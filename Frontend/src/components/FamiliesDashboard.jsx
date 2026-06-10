import { useState } from "react";
import AdminList from "./AdminList";
import DashboardForm from "./DashboardForm";

const FamiliesDashboard = () => {

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
        <div className="w-full h-auto p-2 rounded-md bg-amber-200 text-lg font-semibold flex justify-center items-center">
            FAMILIES DASHBOARD
        </div>


        <div className="w-full flex justify-between items-center py-2 mt-4">

            <form >
                <select className="p-2 border outline-none rounded-lg hover:cursor-pointer">
                    <option>Free Families</option>
                    <option>Youtube Tutorial Links</option>
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
                <AdminList description="GRID" secondDisc="1000" handleEditRecord={hanldeEditRecord} />
                <AdminList description="LEVEL TRIANGLE" secondDisc="1200" handleEditRecord={hanldeEditRecord} />
                <AdminList description="COLUMN WALL REINF SEC" secondDisc="1500" handleEditRecord={hanldeEditRecord} />
                <AdminList description="GRID" secondDisc="1000" handleEditRecord={hanldeEditRecord} />
                <AdminList description="LEVEL TRIANGLE" secondDisc="1200" handleEditRecord={hanldeEditRecord} />
                <AdminList description="COLUMN WALL REINF SEC" secondDisc="1500" handleEditRecord={hanldeEditRecord} />
                <AdminList description="GRID" secondDisc="1000" handleEditRecord={hanldeEditRecord} />

            </div>
        }

        {addRecord == true &&
            <DashboardForm title="ADD NEW RECORD" placeholder1="Enter Description" placeholder2="Enter Price" buttonName="Add Record" />
        }

        {editRecord == true &&
            <DashboardForm title="EDIT RECORD" placeholder1="Enter Description" placeholder2="Enter Price" buttonName="Update Record" />
        }


    </div>
}

export default FamiliesDashboard;