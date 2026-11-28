const TestimonialPageReviewBox = ({ review }) => {
  const {
    customerName,
    designation,
    companyName,
    customerPhoto,
    companyLogo,
    reviewText,
    rating,
    pluginVersion,
  } = review;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_1.1fr] gap-4 mb-5">
      {/* Customer Review */}
      <div
        className="flex flex-col sm:flex-row items-start gap-5
        border border-gray-200 rounded-xl p-5 bg-white
        shadow-sm hover:shadow-md transition-shadow"
      >
        {/* Customer Photo */}
        {customerPhoto?.url ? (
          <img
            src={customerPhoto.url}
            alt={customerName}
            className="w-28 h-28 object-cover rounded-lg shrink-0"
          />
        ) : (
          <div
            className="w-28 h-28 rounded-lg shrink-0 bg-gray-100
            flex items-center justify-center text-gray-500 text-3xl font-semibold"
          >
            {customerName?.charAt(0)?.toUpperCase() || "?"}
          </div>
        )}

        {/* Review Details */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">
            {customerName}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {designation}
            {companyName ? ` | ${companyName}` : ""}
          </p>

          {/* Star Rating */}
          <div
            className="flex items-center gap-1 mt-3"
            aria-label={`${rating} out of 5 stars`}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-xl ${
                  star <= rating ? "text-red-600" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Review Text */}
          <p className="text-gray-700 leading-relaxed mt-2">"{reviewText}"</p>

          {/* Plugin Version */}
          {pluginVersion && (
            <p className="text-xs text-gray-400 mt-3">
              Plugin: Revit {pluginVersion}
            </p>
          )}
        </div>
      </div>

      {/* Company Logo */}
      <div
        className="flex items-center justify-center
        border border-gray-200 rounded-xl p-5 bg-white
        shadow-sm hover:shadow-md transition-shadow min-h-40"
      >
        {companyLogo?.url ? (
          <img
            src={companyLogo.url}
            alt={`${companyName || "Company"} logo`}
            className="max-w-full max-h-32 object-contain"
          />
        ) : (
          <span className="text-xl font-bold text-gray-700 text-center">
            {companyName || " "}
          </span>
        )}
      </div>
    </div>
  );
};

export default TestimonialPageReviewBox;
