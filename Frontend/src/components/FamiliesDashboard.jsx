import { useEffect, useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

import AdminList from "./AdminList";
import DashboardForm from "./DashboardForm";

const FamiliesDashboard = () => {
  // -----------------------------
  // DATA
  // -----------------------------

  const [families, setFamilies] = useState([]);
  const [youtubeTutorials, setYoutubeTutorials] = useState([]);

  // -----------------------------
  // SELECT MODE
  // family | youtube
  // -----------------------------

  const [selectedType, setSelectedType] = useState("family");

  // -----------------------------
  // UI STATES
  // -----------------------------

  const [showRecords, setShowRecords] = useState(true);
  const [addRecord, setAddRecord] = useState(false);
  const [editRecord, setEditRecord] = useState(false);

  // -----------------------------
  // EDIT STATES
  // -----------------------------

  const [editId, setEditId] = useState("");

  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [currentFileUrl, setCurrentFileUrl] = useState("");

  // -----------------------------
  // LOAD DATA
  // -----------------------------

  useEffect(() => {
    if (selectedType === "family") {
      fetchFamilies();
    } else {
      fetchYoutubeTutorials();
    }
  }, [selectedType]);

  // -----------------------------
  // FETCH FAMILIES
  // -----------------------------

  const fetchFamilies = async () => {
    try {
      const res = await api.get("/families");

      setFamilies(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Unable to fetch families");
    }
  };

  // -----------------------------
  // FETCH YOUTUBE TUTORIALS
  // -----------------------------

  const fetchYoutubeTutorials = async () => {
    try {
      const res = await api.get("/youtubeTutorials");

      setYoutubeTutorials(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Unable to fetch tutorials");
    }
  };

  const uploadToCloudinary = async (file) => {
    try {
      // 1. Get signature from backend
      const { data } = await api.get("/cloudinary/signature");

      // 2. Prepare form data
      const formData = new FormData();

      formData.append("file", file);
      formData.append("api_key", data.apiKey);
      formData.append("timestamp", data.timestamp);
      formData.append("signature", data.signature);

      // Optional: organize uploads in a folder
      formData.append("folder", "revit-downloads");

      // 3. Upload directly to Cloudinary
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${data.cloudName}/auto/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();

      console.log("Cloudinary Response:", result);

      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  // -----------------------------
  // ADD BUTTON
  // -----------------------------

  const handleAddRecord = () => {
    setShowRecords(false);
    setAddRecord(true);
    setEditRecord(false);

    setFirstValue("");
    setSecondValue("");
  };

  // -----------------------------
  // EDIT BUTTON
  // -----------------------------

  const handleEditRecord = ({ show, edit, id }) => {
    setShowRecords(show);
    setEditRecord(edit);
    setAddRecord(false);

    if (selectedType === "family") {
      getFamily(id);
    } else {
      getYoutubeTutorial(id);
    }
  };

  // -----------------------------
  // GET SINGLE FAMILY
  // -----------------------------

  const getFamily = async (id) => {
    setEditId(id);

    try {
      const res = await api.get(`/family/${id}`);

      setFirstValue(res.data.family);
      setSecondValue(res.data.price);
      setCurrentFileUrl(res.data.fileUrl);
    } catch (err) {
      console.log(err);
      toast.error("Unable to load family");
    }
  };

  // -----------------------------
  // GET SINGLE YOUTUBE TUTORIAL
  // -----------------------------

  const getYoutubeTutorial = async (id) => {
    setEditId(id);

    try {
      const res = await api.get(`/youtubetutorial/${id}`);

      setFirstValue(res.data.tutorial);
      setSecondValue(res.data.link);
    } catch (err) {
      console.log(err);
      toast.error("Unable to load tutorial");
    }
  };

  // =============================
  // ADD FAMILY
  // =============================

  const addFamily = async (data) => {
    try {
      const uploadResult = await uploadToCloudinary(data.file);

      await api.post("/addFamilies", {
        input1: data.input1,
        input2: data.input2,
        fileUrl: uploadResult.secure_url,
        publicId: uploadResult.public_id,
        resourceType: uploadResult.resource_type,
      });

      toast.success("Family Added Successfully");

      fetchFamilies();

      setShowRecords(true);
      setAddRecord(false);
    } catch (err) {
      console.log(err);
      toast.error("Unable to add family");
    }
  };

  // =============================
  // UPDATE FAMILY
  // =============================

  const updateFamily = async (data) => {
    try {
      let body = {
        input1: data.input1,
        input2: data.input2,
      };

      // Admin selected a new file
      if (data.file) {
        const uploadResult = await uploadToCloudinary(data.file);

        body.fileUrl = uploadResult.secure_url;
        body.publicId = uploadResult.public_id;
        body.resourceType = uploadResult.resource_type;
      }
      console.log("Body:", body);

      await api.put(`/family/${editId}`, body);

      toast.success("Family Updated Successfully");

      fetchFamilies();

      setShowRecords(true);
      setEditRecord(false);
    } catch (err) {
      console.log(err);
      toast.error("Unable to update family");
    }
  };

  // =============================
  // ADD YOUTUBE TUTORIAL
  // =============================

  const addYoutubeTutorial = async (data) => {
    try {
      await api.post("/addYoutubeTutorial", data);

      toast.success("Tutorial Added Successfully");

      fetchYoutubeTutorials();

      setShowRecords(true);
      setAddRecord(false);
    } catch (err) {
      console.log(err);
      toast.error("Unable to add tutorial");
    }
  };

  // =============================
  // UPDATE YOUTUBE TUTORIAL
  // =============================

  const updateYoutubeTutorial = async (data) => {
    try {
      await api.put(`/youtubetutorial/${editId}`, data);

      toast.success("Tutorial Updated Successfully");

      fetchYoutubeTutorials();

      setShowRecords(true);
      setEditRecord(false);
    } catch (err) {
      console.log(err);
      toast.error("Unable to update tutorial");
    }
  };

  // =============================
  // JSX
  // =============================

  return (
    <div>
      <div className="w-full h-auto p-2 rounded-md bg-amber-200 text-lg font-semibold flex justify-center items-center">
        FAMILIES DASHBOARD
      </div>

      <div className="w-full flex justify-between items-center py-2 mt-4">
        <form>
          <select
            value={selectedType}
            onChange={(e) => {
              setSelectedType(e.target.value);

              setShowRecords(true);
              setAddRecord(false);
              setEditRecord(false);
            }}
            className="p-2 border outline-none rounded-lg hover:cursor-pointer"
          >
            <option value="family">Free Families</option>

            <option value="youtube">Youtube Tutorial Links</option>
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
          {selectedType === "family"
            ? families.map((item) => (
                <AdminList
                  key={item._id}
                  id={item._id}
                  description={item.family}
                  secondDisc={`$${item.price}`}
                  current={7}
                  setFunc={fetchFamilies}
                  handleEditRecord={handleEditRecord}
                />
              ))
            : youtubeTutorials.map((item) => (
                <AdminList
                  key={item._id}
                  id={item._id}
                  description={item.tutorial}
                  secondDisc={item.link}
                  current={8}
                  setFunc={fetchYoutubeTutorials}
                  handleEditRecord={handleEditRecord}
                />
              ))}
        </div>
      )}

      {addRecord && (
        <DashboardForm
          title={
            selectedType === "family"
              ? "ADD NEW FAMILY"
              : "ADD NEW YOUTUBE TUTORIAL"
          }
          placeholder1={
            selectedType === "family"
              ? "Enter Family Name"
              : "Enter Tutorial Name"
          }
          placeholder2={
            selectedType === "family" ? "Enter Price" : "Enter Youtube Link"
          }
          buttonName="Add Record"
          addFormData={
            selectedType === "family" ? addFamily : addYoutubeTutorial
          }
          showFileInput={selectedType === "family"}
          fileMode="single"
          fileRequired={selectedType === "family"}
        />
      )}

      {editRecord && (
        <DashboardForm
          title={
            selectedType === "family" ? "EDIT FAMILY" : "EDIT YOUTUBE TUTORIAL"
          }
          placeholder1={
            selectedType === "family"
              ? "Enter Family Name"
              : "Enter Tutorial Name"
          }
          placeholder2={
            selectedType === "family" ? "Enter Price" : "Enter Youtube Link"
          }
          buttonName="Update Record"
          addFormData={
            selectedType === "family" ? updateFamily : updateYoutubeTutorial
          }
          firstValue={firstValue}
          secondValue={secondValue}
          showFileInput={selectedType === "family"}
          fileMode="single"
          currentFileUrl={currentFileUrl}
        />
      )}
    </div>
  );
};

export default FamiliesDashboard;
