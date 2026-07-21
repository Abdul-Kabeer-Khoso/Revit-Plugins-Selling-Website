import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import api from "../api/axios";
import { toast } from "react-toastify";

const AdminList = ({
  id,
  description,
  secondDisc,
  current,
  setFunc,
  handleEditRecord,
  handleDelete,
}) => {
  return (
    <div className="w-full flex justify-between items-start px-4 py-3 rounded-lg border border-gray-400">
      <p className="w-[40%] font-semibold break-words">{description}</p>

      <p className="w-[33%] font-semibold break-all whitespace-normal">
        {secondDisc}
      </p>

      <div className="flex gap-2 pt-1">
        <FaPen
          onClick={() =>
            handleEditRecord({
              show: false,
              edit: true,
              id,
            })
          }
          className="hover:cursor-pointer"
          color="green"
        />

        <FaTrash
          onClick={() => handleDelete(id)}
          className="hover:cursor-pointer"
          color="red"
        />
      </div>
    </div>
  );
};

export default AdminList;
