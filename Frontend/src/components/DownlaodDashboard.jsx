import { useEffect, useState } from "react";
import AdminList from "./AdminList";
import DashboardForm from "./DashboardForm";
import axios from "axios";
import { toast } from "react-toastify";

const DownloadDashboard = () => {
    const [addRecord, setAddRecord] = useState(false);
    const [editRecord, setEditRecord] = useState(false);
    const [showRecords, setShowRecords] = useState(true);

    const [firstInputValue, setFirstInputValue] = useState('');
    const [secondInputValue, setSecondInputValue] = useState('');

    const [current, setCurrent] = useState(0);

    const [revitData, setRevitData] = useState([]);




    const handleAddRecord = () => {
        setShowRecords(false);
        setAddRecord(true);

    }

    const getEditData = (id) => {
        try {
            axios
                .get(`http://localhost:3000/api/download/${id}`)
                .then((res) => {
                    console.log(res.data.data.description);
                    console.log(res.data.data.price);
                    setFirstInputValue(res.data.data.description);
                    setSecondInputValue(res.data.data.price);
                })
        }
        catch (err) {
            toast.error(err);
        }
    }


    const hanldeEditRecord = ({ show, edit, id }) => {
        setShowRecords(show);
        setEditRecord(edit)
        getEditData(id)
    }



    // Fetch Data 
    useEffect(() => {
        axios
            .get("http://localhost:3000/api/download")
            .then((res) => {
                console.log(res.data);
                setRevitData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    const addDownload = (data) => {
        try {
            axios
                .post("http://localhost:3000/api/download", data)
            toast.success("Record Added Successfully")
        } catch (err) {
            toast.error(err);
        }
    }

    return <div>
        <div className="w-full h-auto p-2 rounded-md bg-amber-200 text-lg font-semibold flex justify-center items-center">
            DOWNLOAD DASHBOARD
        </div>


        <div className="w-full flex justify-end items-center py-2 mt-4">

            {editRecord == false && addRecord == false &&

                <div
                    onClick={() => handleAddRecord()}
                    className="bg-green-500 flex justify-between items-center p-2 rounded-lg font-semibold text-white hover:cursor-pointer">
                    Add New
                </div>

            }

        </div>

        {showRecords == true &&
            <div className="flex flex-col justify-center items-center gap-4 mt-10">
                {revitData.map((elem, idx) => (
                    <AdminList key={elem._id} id={elem._id} description={elem.description} secondDisc={`$${elem.price}`} handleEditRecord={hanldeEditRecord} current={current} setFunc={setRevitData} />
                ))}


            </div>
        }

        {addRecord == true &&
            <DashboardForm title="ADD NEW RECORD" placeholder1="Enter Description" placeholder2="Enter Price" buttonName="Add Record" addFormData={addDownload} />
        }

        {editRecord == true &&
            <DashboardForm title="EDIT RECORD" placeholder1="Enter Description" placeholder2="Enter Price" buttonName="Update Record" addFormData={addDownload} firstValue={firstInputValue} secondValue={secondInputValue} />
        }

    </div>

}

export default DownloadDashboard