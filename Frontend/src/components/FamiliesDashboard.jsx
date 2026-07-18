import { useEffect, useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

import AdminList from "./AdminList";
import DashboardForm from "./DashboardForm";

const FamiliesDashboard = () => {
  const [families, setFamilies] = useState([]);

  const [showRecords, setShowRecords] = useState(true);
  const [addRecord, setAddRecord] = useState(false);
  const [editRecord, setEditRecord] = useState(false);

  const [editId, setEditId] = useState("");

  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  useEffect(() => {
    fetchFamilies();
  }, []);

  const fetchFamilies = async () => {
    try {
      const res = await api.get("/families");
      setFamilies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddRecord = () => {
    setShowRecords(false);
    setAddRecord(true);
    setEditRecord(false);
  };

  const handleEditRecord = ({ show, edit, id }) => {
    setShowRecords(show);
    setEditRecord(edit);
    setAddRecord(false);

    getFamily(id);
  };

  const getFamily = async (id) => {
    setEditId(id);

    try {
      const res = await api.get(`/family/${id}`);

      setFirstValue(res.data.family.family);
      setSecondValue(res.data.family.price);
    } catch (err) {
      console.log(err);
    }
  };

  const addFamily = async (data) => {
    try {
      await api.post("/addFamilies", data);

      toast.success("Family Added");

      fetchFamilies();

      setShowRecords(true);
      setAddRecord(false);
    } catch (err) {
      toast.error("Unable to add");
    }
  };

  const updateFamily = async (data) => {
    try {
      await api.put(`/family/${editId}`, data);

      toast.success("Family Updated");

      fetchFamilies();

      setShowRecords(true);
      setEditRecord(false);
    } catch (err) {
      toast.error("Unable to update");
    }
  };

  return (
    <div>
      <div className="w-full h-auto p-2 rounded-md bg-amber-200 text-lg font-semibold flex justify-center items-center">
        FAMILIES DASHBOARD
      </div>

      <div className="w-full flex justify-between items-center py-2 mt-4">
        <form>
          <select className="p-2 border outline-none rounded-lg hover:cursor-pointer">
            <option>Free Families</option>
            <option>Youtube Tutorial Links</option>
          </select>
        </form>

        {showRecords && (
          <div
            onClick={handleAddRecord}
            className="bg-green-500 flex justify-between items-center p-2 rounded-lg font-semibold text-white hover:cursor-pointer"
          >
            Add New
          </div>
        )}
      </div>

      {showRecords && (
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          {families.map((item) => (
            <AdminList
              key={item._id}
              id={item._id}
              description={item.family}
              secondDisc={`$${item.price}`}
              current={7}
              setFunc={setFamilies}
              handleEditRecord={handleEditRecord}
            />
          ))}
        </div>
      )}

      {addRecord && (
        <DashboardForm
          title="ADD NEW RECORD"
          placeholder1="Enter Family Name"
          placeholder2="Enter Price"
          buttonName="Add Record"
          addFormData={addFamily}
        />
      )}

      {editRecord && (
        <DashboardForm
          title="EDIT RECORD"
          placeholder1="Enter Family Name"
          placeholder2="Enter Price"
          buttonName="Update Record"
          addFormData={updateFamily}
          firstValue={firstValue}
          secondValue={secondValue}
        />
      )}
    </div>
  );
};

export default FamiliesDashboard;
