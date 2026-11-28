import { FaTrash } from "react-icons/fa";
const Review = () => {
  return (
    <div className="w-full flex justify-between items-start px-4 py-3 rounded-lg border border-gray-400">
      <p className="w-[20%]   break-words">Client Name</p>

      <p className="w-[45%]  text-sm break-all whitespace-normal">
        This Revit plugin has significantly improved our structural modeling
        flow
      </p>

      <p className="w-[25%] text-sm break-all whitespace-normal">
        Company Name
      </p>

      <FaTrash
        onClick={() => handleDelete(id)}
        className="hover:cursor-pointer"
        color="red"
      />
    </div>
  );
};

export default Review;
