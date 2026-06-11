import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const AdminList = ({ id, description, secondDisc, current, setFunc, handleEditRecord }) => {

    const handleDelete = (id) => {
        console.log(id);
        console.log(current);


        // special case for deleting download record

        {
            current == 0 &&
                axios
                    .delete(`http://localhost:3000/api/download/${id}`)
                    .then((res) => {
                        toast.error('Record deleted')
                        setFunc(res.data.downloadData);
                    })
                    .catch((err) => {
                        toast.error(err);
                    })
        }


        // Delete Records

        {
            current == 1 &&
                axios
                    .delete(`http://localhost:3000/api/foundation/${id}`)
                    .then((res) => {
                        toast.error('Record deleted')
                        setFunc(res.data.foundationData);
                    })
                    .catch((err) => {
                        toast.error(err);
                    })
        }

        {
            current == 2 &&
                axios
                    .delete(`http://localhost:3000/api/floor/${id}`)
                    .then((res) => {
                        toast.error('Record deleted')
                        setFunc(res.data.floorData);
                    })
                    .catch((err) => {
                        toast.error(err);
                    })
        }

        {
            current == 3 &&
                axios
                    .delete(`http://localhost:3000/api/beams/${id}`)
                    .then((res) => {
                        toast.error('Record deleted')
                        setFunc(res.data.beamsData);
                    })
                    .catch((err) => {
                        toast.error(err);
                    })
        }

        {
            current == 4 &&
                axios
                    .delete(`http://localhost:3000/api/structural/${id}`)
                    .then((res) => {
                        toast.error('Record deleted')
                        setFunc(res.data.structuralData);
                    })
                    .catch((err) => {
                        toast.error(err);
                    })
        }


        {
            current == 5 &&
                axios
                    .delete(`http://localhost:3000/api/information/${id}`)
                    .then((res) => {
                        toast.error('Record deleted')
                        setFunc(res.data.informationData);
                    })
                    .catch((err) => {
                        toast.error(err);
                    })
        }


        {
            current == 6 &&
                axios
                    .delete(`http://localhost:3000/api/xl/${id}`)
                    .then((res) => {
                        toast.error('Record deleted')
                        setFunc(res.data.xlData);
                    })
                    .catch((err) => {
                        toast.error(err);
                    })
        }
    }


    return <div className="w-full flex justify-between items-center  px-4  py-2 rounded-lg border border-gray-400">
        <p className="font-semibold w-[40%]">{description}</p>
        <p className=" w-[20%] font-semibold">{secondDisc}</p>
        <div className="flex justify-between items-center gap-2">
            <FaPen
                onClick={() => {
                    handleEditRecord({
                        show: false,
                        edit: true,
                        id: id,
                    })
                }}
                className="mr-4 hover:cursor-pointer" color="green" />
            <FaTrash
                onClick={() => handleDelete(id)}
                className="hover:cursor-pointer" color="red" />
        </div>
    </div>
}

export default AdminList