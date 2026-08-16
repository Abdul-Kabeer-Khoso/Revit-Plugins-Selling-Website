const YoutubeTutorial = ({ name, link }) => {
  const handleOpenLink = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex justify-between items-center px-2 py-1 sm:px-4 sm:py-2 mx-5 my-4 rounded-xl bg-gray-200">
      {/* Tutorial Name */}
      <p className="w-[50%] sm:w-[60%] font-extrabold ml-4 text-sm sm:text-lg">
        {name}
      </p>

      {/* Watch Video Button */}
      <button
        type="button"
        onClick={handleOpenLink}
        className="pr-2 sm:pr-6 flex items-center justify-end gap-2 font-semibold text-sm sm:text-lg text-blue-600 hover:text-blue-800  cursor-pointer transition-colors"
      >
        <span className="text-xl sm:text-2xl">▶</span>
        <span>Click to watch video</span>
      </button>
    </div>
  );
};

export default YoutubeTutorial;
