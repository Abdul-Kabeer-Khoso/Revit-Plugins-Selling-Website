import { useState } from "react";
import AdminList from "./AdminList";
import DashboardForm from "./DashboardForm";

const DownloadDashboard = () => {
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
            DOWNLOAD DASHBOARD
        </div>


        <div className="w-full flex justify-end items-center py-2 mt-4">

            <div
                onClick={() => handleAddRecord()}
                className="bg-green-500 flex justify-between items-center p-2 rounded-lg font-semibold text-white hover:cursor-pointer">
                Add New
            </div>

        </div>

        {showRecords == true &&
            <div className="flex flex-col justify-center items-center gap-4 mt-10">
                <AdminList description="FOR REVIT 2024" secondDisc="$125" handleEditRecord={hanldeEditRecord} />
                <AdminList description="FOR REVIT 2025" secondDisc="$125" handleEditRecord={hanldeEditRecord} />
                <AdminList description="FOR REVIT 2026" secondDisc="$125" handleEditRecord={hanldeEditRecord} />
                <AdminList description="FOR REVIT 2027" secondDisc="$125" handleEditRecord={hanldeEditRecord} />
                <AdminList description="FOR REVIT 2028" secondDisc="$125" handleEditRecord={hanldeEditRecord} />
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

export default DownloadDashboard