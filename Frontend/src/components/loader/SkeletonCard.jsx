const SkeletonCard = () => {
  return (
    <div className="w-full p-5 rounded-xl border border-gray-200 shadow-sm animate-pulse">
      <div className="w-full flex justify-between items-center px-12 py-6 rounded-lg border border-gray-300 animate-pulse">
        <div className="h-6 w-48 bg-gray-300 rounded"></div>

        <div className="h-6 w-40 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
