import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

const AdminList = ({ description, secondDisc, handleEditRecord }) => {
    return <div className="w-full flex justify-between items-center  px-4  py-2 rounded-lg border border-gray-400">
        <p className="font-semibold w-[40%]">{description}</p>
        <p className=" w-[20%] font-semibold">{secondDisc}</p>
        <div className="flex justify-between items-center gap-2">
            <FaPen
                onClick={() => {
                    handleEditRecord({
                        show: false,
                        edit: true
                    })
                }}
                className="mr-4 hover:cursor-pointer" color="green" />
            <FaTrash className="hover:cursor-pointer" color="red" />
        </div>
    </div>
}

export default AdminList