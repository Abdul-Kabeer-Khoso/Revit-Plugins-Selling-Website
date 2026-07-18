import { useState, useEffect } from "react";
import AdminList from "./AdminList";
import DashboardForm from "./DashboardForm";
import axios from "axios"
import { toast } from "react-toastify";

const HomeDashboard = () => {
    const [addRecord, setAddRecord] = useState(false);
    const [editRecord, setEditRecord] = useState(false);
    const [showRecords, setShowRecords] = useState(true);

    const [foundation, setFoundation] = useState([]);
    const [structural, setStructural] = useState([]);
    const [floor, setFloor] = useState([]);
    const [beams, setBeams] = useState([]);
    const [information, setInformation] = useState([]);
    const [xl, setXl] = useState([]);

    const [currentRecord, setCurrentRecord] = useState(1);

    const [firstInputValue, setFirstInputValue] = useState('');
    const [secondInputValue, setSecondInputValue] = useState('');

    const [editId, setEditId] = useState('');

    const hanldeData = (data) => {
        setFoundation(data.foundation);
        setStructural(data.structural);
        setFloor(data.floor);
        setBeams(data.beams);
        setInformation(data.information);
        setXl(data.xl);

    }


    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/`)
            .then((res) => {
                hanldeData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleAddRecord = () => {
        setShowRecords(false);
        setAddRecord(true);
    }


    const getEditData = (id) => {

        setEditId(id);

        if (currentRecord == 1) {
            try {
                axios
                    .get(`${import.meta.env.VITE_API_URL}/api/foundation/${id}`)
                    .then((res) => {
                        setFirstInputValue(res.data.data.description);
                        setSecondInputValue(res.data.data.link);
                    })
            }
            catch (err) {
                toast.error(err);
            }
        } else if (currentRecord == 2) {
            try {
                axios
                    .get(`${import.meta.env.VITE_API_URL}/api/floor/${id}`)
                    .then((res) => {
                        setFirstInputValue(res.data.data.description);
                        setSecondInputValue(res.data.data.link);
                    })
            }
            catch (err) {
                toast.error(err);
            }
        } else if (currentRecord == 3) {
            try {
                axios
                    .get(`${import.meta.env.VITE_API_URL}/api/beams/${id}`)
                    .then((res) => {
                        setFirstInputValue(res.data.data.description);
                        setSecondInputValue(res.data.data.link);
                    })
            }
            catch (err) {
                toast.error(err);
            }
        } else if (currentRecord == 4) {
            try {
                axios
                    .get(`${import.meta.env.VITE_API_URL}/api/structural/${id}`)
                    .then((res) => {
                        setFirstInputValue(res.data.data.description);
                        setSecondInputValue(res.data.data.link);
                    })
            }
            catch (err) {
                toast.error(err);
            }
        } else if (currentRecord == 5) {
            try {
                axios
                    .get(`${import.meta.env.VITE_API_URL}/api/information/${id}`)
                    .then((res) => {
                        setFirstInputValue(res.data.data.description);
                        setSecondInputValue(res.data.data.link);
                    })
            }
            catch (err) {
                toast.error(err);
            }
        } else if (currentRecord == 6) {
            try {
                axios
                    .get(`${import.meta.env.VITE_API_URL}/api/xl/${id}`)
                    .then((res) => {
                        setFirstInputValue(res.data.data.description);
                        setSecondInputValue(res.data.data.link);
                    })
            }
            catch (err) {
                toast.error(err);
            }
        }

    }



    const hanldeEditRecord = ({ show, edit, id }) => {
        setShowRecords(show);
        setEditRecord(edit);
        getEditData(id);
    }



    // Add Methods

    const addFoundation = (data) => {
        try {
            axios.post(`${import.meta.env.VITE_API_URL}/api/foundation`, data)
            toast.success("Record Added Succesfully");

        } catch (err) {
            toast.error(err);
        }
    }

    const addFloor = (data) => {
        try {
            axios.post(`${import.meta.env.VITE_API_URL}/api/floor`, data)
            toast.success("Record Added Succesfully");
        } catch (err) {
            toast.error(err);
        }
    }

    const addBeams = (data) => {
        try {
            axios.post(`${import.meta.env.VITE_API_URL}/api/beams`, data)
            toast.success("Record Added Succesfully");
        } catch (err) {
            toast.error(err);
        }
    }

    const addStructural = (data) => {
        try {
            axios.post(`${import.meta.env.VITE_API_URL}/api/structural`, data)
            toast.success("Record Added Succesfully");
        } catch (err) {
            toast.error(err);
        }
    }


    const addInformation = (data) => {
        try {
            axios.post(`${import.meta.env.VITE_API_URL}/api/information`, data)
            toast.success("Record Added Succesfully");
        } catch (err) {
            toast.error(err);
        }
    }

    const addXL = (data) => {
        try {
            axios.post(`${import.meta.env.VITE_API_URL}/api/xl`, data)
            toast.success("Record Added Succesfully");
        } catch (err) {
            toast.error(err);
        }
    }


    // Update Methods
    const updateFoundation = (data) => {
        const { input1, input2 } = data;

        const updatedData = {
            description: input1,
            link: input2,
        }
        try {
            axios.put(`${import.meta.env.VITE_API_URL}/api/foundation/${editId}`, updatedData)
            toast.success("Record Updated Succesfully");
        } catch (err) {
            toast.error(err);
        }
    }

    const updateFloor = (data) => {
        const { input1, input2 } = data;

        const updatedData = {
            description: input1,
            link: input2,
        }
        try {
            axios.put(`${import.meta.env.VITE_API_URL}/api/floor/${editId}`, updatedData)
            toast.success("Record Updated Succesfully");
        } catch (err) {
            toast.error(err);
        }
    }

    const updateBeams = (data) => {
        const { input1, input2 } = data;

        const updatedData = {
            description: input1,
            link: input2,
        }
        try {
            axios.put(`${import.meta.env.VITE_API_URL}/api/beams/${editId}`, updatedData)
            toast.success("Record Updated Succesfully");
        } catch (err) {
            toast.error(err);
        }
    }


    const updateStructural = (data) => {
        const { input1, input2 } = data;

        const updatedData = {
            description: input1,
            link: input2,
        }
        try {
            axios.put(`${import.meta.env.VITE_API_URL}/api/structural/${editId}`, updatedData)
            toast.success("Record Updated Succesfully");
        } catch (err) {
            toast.error(err);
        }
    }


    const updateInformation = (data) => {
        const { input1, input2 } = data;

        const updatedData = {
            description: input1,
            link: input2,
        }
        try {
            axios.put(`${import.meta.env.VITE_API_URL}/api/information/${editId}`, updatedData)
            toast.success("Record Updated Succesfully");
        } catch (err) {
            toast.error(err);
        }
    }



    const updateXL = (data) => {
        const { input1, input2 } = data;

        const updatedData = {
            description: input1,
            link: input2,
        }
        try {
            axios.put(`${import.meta.env.VITE_API_URL}/api/xl/${editId}`, updatedData)
            toast.success("Record Updated Succesfully");
        } catch (err) {
            toast.error(err);
        }
    }







    return <div>
        <div className="w-full h-auto p-2 rounded-md bg-amber-200 text-lg font-semibold flex justify-center items-center mb-4 ">
            HOME DASHBOARD
        </div>

        <div className="w-full flex justify-between items-center py-2 ">

            {editRecord == false &&
                <form >
                    <select
                        onChange={(e) => setCurrentRecord(parseInt(e.target.value))}
                        className="p-2 border outline-none rounded-lg hover:cursor-pointer">
                        <option value="1">Foundation Isolated Pile Caps / Foundation Slab Raft / Piling</option>
                        <option value="2">Floor Slabs / Structural Floor</option>
                        <option value="3">Beams / Structural Framings</option>
                        <option value="4">Structural Columns & Walls</option>
                        <option value="5">Information</option>
                        <option value="6">XL Master</option>
                    </select>
                </form>

            }


            {editRecord == false && addRecord == false &&

                <div
                    onClick={() => handleAddRecord()}
                    className="bg-green-500 flex justify-between items-center p-2 rounded-lg font-semibold text-white hover:cursor-pointer">
                    <p>Add New</p>
                </div>

            }




        </div>


        {/* Show records */}
        <>
            {showRecords == true && currentRecord == 1 &&
                <div className="flex flex-col justify-center items-center gap-4 mt-10">
                    {foundation.map((elem, idx) => (
                        <AdminList key={elem._id} id={elem._id} description={elem.description} secondDisc={elem.link} handleEditRecord={hanldeEditRecord} current={currentRecord} setFunc={setFoundation} />
                    ))}
                </div>
            }

            {showRecords == true && currentRecord == 2 &&
                <div className="flex flex-col justify-center items-center gap-4 mt-10">
                    {floor.map((elem, idx) => (
                        <AdminList key={elem._id} id={elem._id} description={elem.description} secondDisc={elem.link} handleEditRecord={hanldeEditRecord} current={currentRecord} setFunc={setFloor} />
                    ))}
                </div>
            }

            {showRecords == true && currentRecord == 3 &&
                <div className="flex flex-col justify-center items-center gap-4 mt-10">
                    {beams.map((elem, idx) => (
                        <AdminList key={elem._id} id={elem._id} description={elem.description} secondDisc={elem.link} handleEditRecord={hanldeEditRecord} current={currentRecord} setFunc={setBeams} />
                    ))}
                </div>
            }

            {showRecords == true && currentRecord == 4 &&
                <div className="flex flex-col justify-center items-center gap-4 mt-10">
                    {structural.map((elem, idx) => (
                        <AdminList key={elem._id} id={elem._id} description={elem.description} secondDisc={elem.link} handleEditRecord={hanldeEditRecord} current={currentRecord} setFunc={setStructural} />
                    ))}
                </div>
            }


            {showRecords == true && currentRecord == 5 &&
                <div className="flex flex-col justify-center items-center gap-4 mt-10">
                    {information.map((elem, idx) => (
                        <AdminList key={elem._id} id={elem._id} description={elem.description} secondDisc={elem.link} handleEditRecord={hanldeEditRecord} current={currentRecord} setFunc={setInformation} />
                    ))}
                </div>
            }

            {showRecords == true && currentRecord == 6 &&
                <div className="flex flex-col justify-center items-center gap-4 mt-10">
                    {xl.map((elem, idx) => (
                        <AdminList key={elem._id} id={elem._id} description={elem.description} secondDisc={elem.link} handleEditRecord={hanldeEditRecord} current={currentRecord} setFunc={setXl} />
                    ))}
                </div>
            }

        </>


        {/* Add new forms */}
        <>
            {addRecord == true && currentRecord == 1 &&
                <DashboardForm title="ADD NEW RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Add Record" addFormData={addFoundation} />
            }

            {addRecord == true && currentRecord == 2 &&
                <DashboardForm title="ADD NEW RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Add Record" addFormData={addFloor} />
            }


            {addRecord == true && currentRecord == 3 &&
                <DashboardForm title="ADD NEW RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Add Record" addFormData={addBeams} />
            }


            {addRecord == true && currentRecord == 4 &&
                <DashboardForm title="ADD NEW RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Add Record" addFormData={addStructural} />
            }


            {addRecord == true && currentRecord == 5 &&
                <DashboardForm title="ADD NEW RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Add Record" addFormData={addInformation} />
            }


            {addRecord == true && currentRecord == 6 &&
                <DashboardForm title="ADD NEW RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Add Record" addFormData={addXL} />
            }
        </>



        {/* Edit Form */}
        <>
            {editRecord == true && currentRecord == 1 &&
                <DashboardForm title="EDIT RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Update Record" addFormData={updateFoundation} firstValue={firstInputValue} secondValue={secondInputValue} />
            }

            {editRecord == true && currentRecord == 2 &&
                <DashboardForm title="EDIT RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Update Record" addFormData={updateFloor} firstValue={firstInputValue} secondValue={secondInputValue} />
            }

            {editRecord == true && currentRecord == 3 &&
                <DashboardForm title="EDIT RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Update Record" addFormData={updateBeams} firstValue={firstInputValue} secondValue={secondInputValue} />
            }

            {editRecord == true && currentRecord == 4 &&
                <DashboardForm title="EDIT RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Update Record" addFormData={updateStructural} firstValue={firstInputValue} secondValue={secondInputValue} />
            }

            {editRecord == true && currentRecord == 5 &&
                <DashboardForm title="EDIT RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Update Record" addFormData={updateInformation} firstValue={firstInputValue} secondValue={secondInputValue} />
            }

            {editRecord == true && currentRecord == 6 &&
                <DashboardForm title="EDIT RECORD" placeholder1="Enter Description" placeholder2="Enter Youtube Link" buttonName="Update Record" addFormData={updateXL} firstValue={firstInputValue} secondValue={secondInputValue} />
            }
        </>


    </div>
}

export default HomeDashboard;