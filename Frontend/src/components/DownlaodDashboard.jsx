import { useEffect, useState } from "react";
import AdminList from "./AdminList";
import DashboardForm from "./DashboardForm";
import api from "../api/axios";
import { toast } from "react-toastify";

const DownloadDashboard = () => {
  const [addRecord, setAddRecord] = useState(false);
  const [editRecord, setEditRecord] = useState(false);
  const [showRecords, setShowRecords] = useState(true);

  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");

  const [zipUrl, setZipUrl] = useState("");
  const [txtUrl, setTxtUrl] = useState("");

  const [currentFileUrl, setCurrentFileUrl] = useState("");

  const [current, setCurrent] = useState(0);

  const [revitData, setRevitData] = useState([]);

  const [editId, setEditId] = useState("");

  const handleAddRecord = () => {
    setShowRecords(false);
    setAddRecord(true);
  };

  const getEditData = (id) => {
    setEditId(id);
    try {
      api
        .get(`${import.meta.env.VITE_API_URL}/api/download/${id}`)
        .then((res) => {
          const download = res.data.data;

          setFirstInputValue(download.description);
          setSecondInputValue(download.price);

          setZipUrl(download.zipUrl);
          setTxtUrl(download.txtUrl);
        });
    } catch (err) {
      toast.error(err);
    }
  };

  const hanldeEditRecord = ({ show, edit, id }) => {
    setShowRecords(show);
    setEditRecord(edit);
    getEditData(id);
  };

  // Fetch Data
  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_API_URL}/api/download`)
      .then((res) => {
        console.log(res.data);
        setRevitData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const addDownload = async (data) => {
    try {
      const zipUpload = await uploadToCloudinary(data.zipFile);
      const txtUpload = await uploadToCloudinary(data.txtFile);

      await api.post("/download", {
        input1: data.input1,
        input2: data.input2,

        zipUrl: zipUpload.secure_url,
        zipPublicId: zipUpload.public_id,

        txtUrl: txtUpload.secure_url,
        txtPublicId: txtUpload.public_id,
      });

      toast.success("Record Added Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Unable to add record");
    }
  };

  const updateDownload = async (data) => {
    try {
      const payload = {
        input1: data.input1,
        input2: data.input2,
      };

      // Upload new ZIP only if selected
      if (data.zipFile) {
        const zipUpload = await uploadToCloudinary(data.zipFile);

        payload.zipUrl = zipUpload.secure_url;
        payload.zipPublicId = zipUpload.public_id;
      }

      // Upload new TXT only if selected
      if (data.txtFile) {
        const txtUpload = await uploadToCloudinary(data.txtFile);

        payload.txtUrl = txtUpload.secure_url;
        payload.txtPublicId = txtUpload.public_id;
      }

      await api.put(`/download/${editId}`, payload);

      toast.success("Record Updated Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Unable to update record");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/download/${id}`);

      toast.success("Record deleted successfully");

      // Refresh the list
      const res = await api.get("/download");
      setRevitData(res.data);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Unable to delete record");
    }
  };

  return (
    <div>
      <div className="w-full h-auto p-2 rounded-md bg-amber-200 text-lg font-semibold flex justify-center items-center">
        DOWNLOAD DASHBOARD
      </div>

      <div className="w-full flex justify-end items-center py-2 mt-4">
        {editRecord == false && addRecord == false && (
          <div
            onClick={() => handleAddRecord()}
            className="bg-green-500 flex justify-between items-center p-2 rounded-lg font-semibold text-white hover:cursor-pointer"
          >
            Add New
          </div>
        )}
      </div>

      {showRecords == true && (
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          {revitData.map((elem, idx) => (
            <AdminList
              key={elem._id}
              id={elem._id}
              description={elem.description}
              secondDisc={`$${elem.price}`}
              handleEditRecord={hanldeEditRecord}
              handleDelete={handleDelete}
              current={current}
              setFunc={setRevitData}
            />
          ))}
        </div>
      )}

      {addRecord == true && (
        <DashboardForm
          title="ADD NEW RECORD"
          placeholder1="Enter Description"
          placeholder2="Enter Price"
          buttonName="Add Record"
          addFormData={addDownload}
          showFileInput={true}
          fileMode="double"
          formMarginTop="mt-10"
          fileRequired={true}
        />
      )}

      {editRecord == true && (
        <DashboardForm
          title="EDIT RECORD"
          placeholder1="Enter Description"
          placeholder2="Enter Price"
          buttonName="Update Record"
          addFormData={updateDownload}
          firstValue={firstInputValue}
          secondValue={secondInputValue}
          fileRequired={false}
          formMarginTop="mt-0"
          currentFileUrl={{
            zipUrl,
            txtUrl,
          }}
          showFileInput={true}
          fileMode="double"
        />
      )}
    </div>
  );
};

export default DownloadDashboard;
