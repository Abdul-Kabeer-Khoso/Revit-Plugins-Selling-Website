import { FaTrash } from "react-icons/fa";

const Review = ({ review, onDelete }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-3 px-4 py-4 rounded-lg border border-gray-300 bg-white shadow-sm">
      {/* Client Name */}
      <div className="w-full sm:w-[20%] break-words">
        <p className="font-semibold text-gray-800">{review.customerName}</p>

        {/* Star Rating */}
        <p className="text-yellow-500 text-sm mt-1">
          {"★".repeat(review.rating)}
          <span className="text-gray-300">{"★".repeat(5 - review.rating)}</span>
        </p>
      </div>

      {/* Review Text */}
      <p className="w-full sm:w-[45%] text-sm text-gray-700 break-words whitespace-normal">
        {review.reviewText}
      </p>

      {/* Company Name */}
      <p className="w-full sm:w-[25%] text-sm text-gray-700 break-words">
        {review.companyName || "Not provided"}
      </p>

      {/* Delete Button */}
      <button
        type="button"
        onClick={() => onDelete(review._id)}
        className="text-red-600 hover:text-red-800 transition"
        title="Delete review"
      >
        <FaTrash className="hover:cursor-pointer" />
      </button>
    </div>
  );
};

export default Review;
