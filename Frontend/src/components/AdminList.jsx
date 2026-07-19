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
}) => {
  const handleDelete = (id) => {
    console.log(id);
    console.log(current);

    // special case for deleting download record

    {
      current == 0 &&
        api
          .delete(`${import.meta.env.VITE_API_URL}/api/download/${id}`)
          .then((res) => {
            toast.error("Record deleted");
            setFunc(res.data.downloadData);
          })
          .catch((err) => {
            toast.error(err);
          });
    }

    // Delete Records

    {
      current == 1 &&
        api
          .delete(`${import.meta.env.VITE_API_URL}/api/foundation/${id}`)
          .then((res) => {
            toast.error("Record deleted");
            setFunc(res.data.foundationData);
          })
          .catch((err) => {
            toast.error(err);
          });
    }

    {
      current == 2 &&
        api
          .delete(`${import.meta.env.VITE_API_URL}/api/floor/${id}`)
          .then((res) => {
            toast.error("Record deleted");
            setFunc(res.data.floorData);
          })
          .catch((err) => {
            toast.error(err);
          });
    }

    {
      current == 3 &&
        api
          .delete(`${import.meta.env.VITE_API_URL}/api/beams/${id}`)
          .then((res) => {
            toast.error("Record deleted");
            setFunc(res.data.beamsData);
          })
          .catch((err) => {
            toast.error(err);
          });
    }

    {
      current == 4 &&
        api
          .delete(`${import.meta.env.VITE_API_URL}/api/structural/${id}`)
          .then((res) => {
            toast.error("Record deleted");
            setFunc(res.data.structuralData);
          })
          .catch((err) => {
            toast.error(err);
          });
    }

    {
      current == 5 &&
        api
          .delete(`${import.meta.env.VITE_API_URL}/api/information/${id}`)
          .then((res) => {
            toast.error("Record deleted");
            setFunc(res.data.informationData);
          })
          .catch((err) => {
            toast.error(err);
          });
    }

    {
      current == 6 &&
        api
          .delete(`${import.meta.env.VITE_API_URL}/api/xl/${id}`)
          .then((res) => {
            toast.error("Record deleted");
            setFunc(res.data.xlData);
          })
          .catch((err) => {
            toast.error(err);
          });
    }

    {
      current == 7 &&
        api
          .delete(`/family/${id}`)
          .then((res) => {
            toast.success("Record deleted");
            setFunc(res.data.families);
          })
          .catch((err) => {
            toast.error(err.response?.data?.message || "Delete failed");
          });
    }

    {
      current == 8 &&
        api
          .delete(`/youtubetutorial/${id}`)
          .then((res) => {
            toast.success("Record deleted");
            setFunc(res.data.youtubeTutorials);
          })
          .catch((err) => {
            toast.error(err.response?.data?.message || "Delete failed");
          });
    }
  };

  return (
    <div className="w-full flex justify-between items-center  px-4  py-2 rounded-lg border border-gray-400">
      <p className="font-semibold w-[40%]">{description}</p>
      <p className=" w-[20%] font-semibold">{secondDisc}</p>
      <div className="flex justify-between items-center gap-2">
        <FaPen
          onClick={() => {
            handleEditRecord({
              show: false,
              edit: true,
              id: id,
            });
          }}
          className="mr-4 hover:cursor-pointer"
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
