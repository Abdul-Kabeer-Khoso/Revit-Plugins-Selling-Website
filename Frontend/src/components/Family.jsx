import download from "../assets/download.png";

const Family = ({ name, price, fileUrl }) => {
  const handleDownload = () => {
    if (!fileUrl) {
      console.error("Family file URL is missing.");
      return;
    }

    // Add Cloudinary attachment flag so the browser downloads
    // the file instead of simply opening it.
    const downloadUrl = fileUrl.includes("/upload/")
      ? fileUrl.replace("/upload/", "/upload/fl_attachment/")
      : fileUrl;

    window.open(downloadUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex justify-between items-center px-2 py-1 sm:px-4 sm:py-2 mx-5 my-4 rounded-xl bg-gray-200">
      {/* Family Name */}
      <p className="w-[30%] sm:w-[60%] font-extrabold ml-4 text-sm sm:text-lg">
        {name}
      </p>

      {/* Download Button */}
      <button
        type="button"
        onClick={handleDownload}
        className="w-25 sm:w-35 flex justify-between items-center px-2 py-1 sm:px-4 sm:py-2 bg-white font-semibold rounded-4xl hover:cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <img src={download} alt="Download Icon Image" className="w-3 sm:w-4" />

        <p className="pt-1 text-sm sm:text-lg">Download</p>
      </button>

      {/* Price */}
      <div className="w-[10%] pr-2 sm:pr-6 flex justify-end font-semibold">
        {price}
      </div>
    </div>
  );
};

export default Family;
