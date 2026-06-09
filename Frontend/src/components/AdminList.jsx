import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

const AdminList = ({ description, link }) => {
    return <div className="w-full flex justify-between items-center  px-4  py-2 rounded-lg border border-gray-400">
        <p className="font-semibold w-[40%]">{description}</p>
        <p className="text-blue-600 w-[20%] hover:cursor-pointer hover:underline">{link}</p>
        <div className="flex justify-between items-center gap-2">
            <FaPen className="mr-4 hover:cursor-pointer" color="green" />
            <FaTrash className="hover:cursor-pointer" color="red" />
        </div>
    </div>
}

export default AdminList