import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DashboardForm = ({
  title,
  placeholder1,
  placeholder2,
  buttonName,
  addFormData,
  firstValue,
  secondValue,
  showFileInput = false,
  currentFileUrl,
  thirdPlaceholder = "Choose File",
  formMarginTop = "mt-20",
  fileRequired = false,
  fileMode = "none",
}) => {
  const navigate = useNavigate();

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    setInput1(firstValue || "");
    setInput2(secondValue || "");
  }, [firstValue, secondValue]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      input1,
      input2,
      file,
    };

    console.log("Submitting Data:", data);

    addFormData(data);

    setInput1("");
    setInput2("");
    setFile(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full flex flex-col justify-center items-center gap-5 ${formMarginTop} relative`}
    >
      <p className="text-lg font-semibold">{title}</p>

      <div
        onClick={() => (window.location.href = `/admindashboard`)}
        className="absolute flex justify-center items-center p-2 rounded-lg bg-green-600 hover:cursor-pointer bottom-60 right-218"
      >
        <FaLongArrowAltLeft size="20px" color="white" />

        <p className="ml-2 font-semibold text-white">Back</p>
      </div>

      <input
        onChange={(e) => setInput1(e.target.value)}
        value={input1}
        required
        type="text"
        className="w-120 rounded-lg px-4 py-2 border border-gray-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        placeholder={placeholder1}
      />

      <input
        onChange={(e) => setInput2(e.target.value)}
        value={input2}
        required
        type="text"
        className="w-120 rounded-lg px-4 py-2 border border-gray-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        placeholder={placeholder2}
      />

      {showFileInput && fileMode === "single" && (
        <div className="w-120">
          {currentFileUrl && (
            <div className=" flex items-center gap-3">
              <p className=" text-gray-500">Current File:</p>

              <a
                href={currentFileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Download Current File
              </a>
            </div>
          )}

          <p className="font-semibold mb-2 text-gray-700">
            Choose File {currentFileUrl ? "(Optional)" : ""}
          </p>

          <input
            type="file"
            required={fileRequired}
            onChange={(e) => {
              console.log("Selected File:", e.target.files[0]);
              setFile(e.target.files[0]);
            }}
            className="w-full rounded-lg px-4 py-2 border border-gray-400"
          />

          {file && (
            <p className="mt-2 text-green-600 text-sm">
              Selected File: {file.name}
            </p>
          )}
        </div>
      )}

      <button
        type="submit"
        className="w-120 bg-teal-700 px-4 py-2 rounded-lg font-semibold text-white hover:cursor-pointer"
      >
        {buttonName}
      </button>
    </form>
  );
};

export default DashboardForm;
