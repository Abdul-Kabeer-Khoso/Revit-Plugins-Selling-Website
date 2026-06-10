import search from "../assets/search.png"
import { useState } from "react";
import AdminList from "./AdminList";
import DashboardForm from "./DashboardForm";
import PluginList from "./PluginList";

const PluginPurchaseLogDashboard = () => {

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
            PLUGIN PURCHASE LOG DASHBOARD
        </div>

        <div className="w-full flex justify-between items-center py-2 mt-4">


            <div className="flex  justify-between items-center relative">
                <form className=" mt-4 sm:mt-0">
                    <input type="text" placeholder="Search Row"
                        className=" w-[83vw] sm:w-60 md:w-100 pl-12 pr-4 py-2 border border-gray-300 rounded-4xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </form>
                <img src={search} alt="Search Icon" className="w-5 absolute top-14 right-[73vw] min-[485px]:max-[640px]:right-[78vw]  sm:top-3 sm:right-50 md:right-90" />
            </div>




            <div
                onClick={() => handleAddRecord()}
                className="bg-green-500 flex justify-between items-center p-2 rounded-lg font-semibold text-white hover:cursor-pointer">
                Add Row
            </div>

        </div>


        {showRecords == true &&
            <div className="flex flex-col justify-center items-center gap-4 mt-10">
                <PluginList
                    productKey="ABC-DEF-GEH-IJK"
                    email="random@abc.com"
                    country="England"
                    productPurchaseDate="10/9/2025"
                    computerId="1231-ABCGE-01FA"
                    installationDate="12/4/2026"
                    expiryDate="15/9/2027"
                    handleEditRecord={hanldeEditRecord} />

                <PluginList
                    productKey="ABC-DEF-GEH-IJK"
                    email="random@abc.com"
                    country="England"
                    productPurchaseDate="10/9/2025"
                    computerId="1231-ABCGE-01FA"
                    installationDate="12/4/2026"
                    expiryDate="15/9/2027"
                    handleEditRecord={hanldeEditRecord} />

                <PluginList
                    productKey="ABC-DEF-GEH-IJK"
                    email="random@abc.com"
                    country="England"
                    productPurchaseDate="10/9/2025"
                    computerId="1231-ABCGE-01FA"
                    installationDate="12/4/2026"
                    expiryDate="15/9/2027"
                    handleEditRecord={hanldeEditRecord} />

                <PluginList
                    productKey="ABC-DEF-GEH-IJK"
                    email="random@abc.com"
                    country="England"
                    productPurchaseDate="10/9/2025"
                    computerId="1231-ABCGE-01FA"
                    installationDate="12/4/2026"
                    expiryDate="15/9/2027"
                    handleEditRecord={hanldeEditRecord} />


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

export default PluginPurchaseLogDashboard