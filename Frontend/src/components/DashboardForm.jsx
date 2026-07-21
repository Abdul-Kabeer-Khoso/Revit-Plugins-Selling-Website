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
}) => {
  const navigate = useNavigate();

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [zipFile, setZipFile] = useState(null);
  const [txtFile, setTxtFile] = useState(null);

  useEffect(() => {
    setInput1(firstValue || "");
    setInput2(secondValue || "");
  }, [firstValue, secondValue]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      input1,
      input2,
      zipFile,
      txtFile,
    };

    addFormData(data);

    setInput1("");
    setInput2("");
    setZipFile(null);
    setTxtFile(null);
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

      {showFileInput && (
        <div className="w-120 flex flex-col gap-3">
          {/* ================= ZIP ================= */}

          {currentFileUrl?.zipUrl && (
            <div className="flex items-center gap-3">
              <p className=" text-gray-500">Current Plugin ZIP</p>

              <a
                href={currentFileUrl.zipUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Download Current ZIP
              </a>
            </div>
          )}

          <div>
            <label className="font-semibold text-gray-700">
              {fileRequired
                ? "Choose Plugin ZIP"
                : "Choose New Plugin ZIP (Optional)"}
            </label>

            <input
              type="file"
              required={fileRequired}
              accept=".zip"
              onChange={(e) => {
                const file = e.target.files[0];

                if (!file) return;

                if (!file.name.toLowerCase().endsWith(".zip")) {
                  toast.error("Please select a ZIP file.");

                  e.target.value = "";
                  setZipFile(null);

                  return;
                }

                setZipFile(file);
              }}
              className="w-full rounded-lg px-4 py-2 border border-gray-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />

            {zipFile && (
              <p className="mt-2 text-green-600 text-sm">
                Selected ZIP: {zipFile.name}
              </p>
            )}
          </div>

          {/* ================= TXT ================= */}

          {currentFileUrl?.txtUrl && (
            <div className="flex items-center gap-3">
              <p className=" text-gray-500">Current Instruction TXT</p>

              <a
                href={currentFileUrl.txtUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Download Current TXT
              </a>
            </div>
          )}

          <div>
            <label className="font-semibold text-gray-700">
              {fileRequired
                ? "Choose TXT File"
                : "Choose New TXT File (Optional)"}
            </label>

            <input
              type="file"
              accept=".txt"
              required={fileRequired}
              onChange={(e) => {
                const file = e.target.files[0];

                if (!file) return;

                if (!file.name.toLowerCase().endsWith(".txt")) {
                  toast.error("Please select a TXT file.");

                  e.target.value = "";
                  setTxtFile(null);

                  return;
                }

                setTxtFile(file);
              }}
              className="w-full rounded-lg px-4 py-2 border border-gray-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />

            {txtFile && (
              <p className="mt-2 text-green-600 text-sm">
                Selected TXT: {txtFile.name}
              </p>
            )}
          </div>
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
