import { useEffect, useState } from "react";
import axios from "axios";

import AdminList from "./AdminList";
import DashboardForm from "./DashboardForm";

const FamiliesDashboard = () => {
  const [families, setFamilies] = useState([]);

  const [addRecord, setAddRecord] = useState(false);
  const [editRecord, setEditRecord] = useState(false);
  const [showRecords, setShowRecords] = useState(true);

  useEffect(() => {
    fetchFamilies();
  }, []);

  const fetchFamilies = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/families`,
      );

      setFamilies(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddRecord = () => {
    setShowRecords(false);
    setAddRecord(true);
  };

  const hanldeEditRecord = ({ show, edit }) => {
    setShowRecords(show);
    setEditRecord(edit);
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

        <div
          onClick={handleAddRecord}
          className="bg-green-500 flex justify-between items-center p-2 rounded-lg font-semibold text-white hover:cursor-pointer"
        >
          <p>Add New</p>
        </div>
      </div>

      {showRecords && (
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          {families.map((family) => (
            <AdminList
              key={family._id}
              id={family._id}
              description={family.description}
              secondDisc={family.price}
              handleEditRecord={hanldeEditRecord}
            />
          ))}
        </div>
      )}

      {addRecord && (
        <DashboardForm
          title="ADD NEW RECORD"
          placeholder1="Enter Description"
          placeholder2="Enter Price"
          buttonName="Add Record"
        />
      )}

      {editRecord && (
        <DashboardForm
          title="EDIT RECORD"
          placeholder1="Enter Description"
          placeholder2="Enter Price"
          buttonName="Update Record"
        />
      )}
    </div>
  );
};

export default FamiliesDashboard;
