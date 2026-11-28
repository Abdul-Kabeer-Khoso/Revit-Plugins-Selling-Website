import Review from "./Review";

const ReviewsDashboard = () => {
  return (
    <div>
      <div className="w-full h-auto p-2 rounded-md bg-amber-200 text-lg font-semibold flex justify-center items-center">
        REVIEWS DASHBOARD
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mt-10">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default ReviewsDashboard;
