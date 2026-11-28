import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ReviewBox from "../components/TestimonialPageReviewBox";
import api from "../api/axios";

const REVIEWS_PER_PAGE = 7;

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(REVIEWS_PER_PAGE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch reviews from the backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api.get("/reviews");

        setReviews(response.data.reviews || []);
      } catch (err) {
        console.error("Fetch Reviews Error:", err);

        setError("Unable to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Get only the reviews that should be displayed
  const displayedReviews = reviews.slice(0, visibleReviews);

  // Load the next 7 reviews
  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + REVIEWS_PER_PAGE);
  };

  return (
    <>
      <Navbar />

      <div className="flex-col justify-center items-center mt-8 p-5">
        <p className="text-2xl md:text-4xl font-bold text-center uppercase">
          Smarter Revit Structural Design Starts Here.
        </p>

        <p className="mt-2 lg:mt-0 text-xl md:text-2xl font-semibold text-center">
          Built on 25 years of hands-on global project delivery. Made for Revit.
          Made for engineers.
        </p>
      </div>

      <section className="bg-white min-h-screen py-12 px-4 sm:px-8">
        {/* Page Heading */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <span
            className="inline-block bg-red-50 text-red-700
            px-5 py-2 rounded-full text-sm font-semibold mb-4"
          >
            TESTIMONIALS
          </span>

          <p className="text-gray-500 text-lg mt-4">
            Real feedback from professionals using our Revit tools.
          </p>

          <div className="w-24 h-1 bg-red-700 mx-auto mt-6 rounded-full" />
        </div>

        {/* Review List */}
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Loading reviews...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-800">
                No Reviews Yet
              </h2>

              <p className="text-gray-500 mt-3">
                Be the first to share your experience with our Revit plugins!
              </p>
            </div>
          ) : (
            <>
              {/* Display Reviews */}
              {displayedReviews.map((review) => (
                <ReviewBox key={review._id} review={review} />
              ))}

              {/* Load More Button */}
              {visibleReviews < reviews.length && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={handleLoadMore}
                    className="bg-red-700 hover:bg-red-800
                    text-white font-semibold px-8 py-3
                    rounded-lg transition duration-300"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Testimonials;
