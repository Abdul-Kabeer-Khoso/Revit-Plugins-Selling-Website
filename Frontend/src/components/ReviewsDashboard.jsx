import { useEffect, useState } from "react";
import Review from "./Review";
import api from "../api/axios";

const ReviewsDashboard = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api.get("/reviews");
        setReviews(response.data.reviews || []);
      } catch (err) {
        console.error("Fetch Reviews Error:", err);
        setError("Unable to load reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Delete review
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this review?",
    );

    if (!confirmed) return;

    try {
      await api.delete(`/reviews/${id}`);

      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== id),
      );
    } catch (err) {
      console.error("Delete Review Error:", err);
      alert("Unable to delete review. Please try again.");
    }
  };

  return (
    <div>
      <div className="w-full h-auto p-2 rounded-md bg-amber-200 text-lg font-semibold flex justify-center items-center">
        REVIEWS DASHBOARD
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mt-10">
        {loading ? (
          <p className="text-gray-500">Loading reviews...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : reviews.length === 0 ? (
          <p className="text-gray-500">No reviews available.</p>
        ) : (
          reviews.map((review) => (
            <Review key={review._id} review={review} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewsDashboard;
