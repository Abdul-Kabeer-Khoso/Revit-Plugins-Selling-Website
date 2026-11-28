import Review from "../models/reviewModel.js";

export const addReview = async (req, res) => {
  try {
    const {
      customerName,
      designation,
      companyName,
      reviewText,
      pluginVersion,
      rating,
      customerPhoto,
      companyLogo,
    } = req.body;

    // Validate required fields
    if (
      !customerName?.trim() ||
      !designation?.trim() ||
      !reviewText?.trim() ||
      !pluginVersion?.trim() ||
      rating === undefined ||
      rating === null
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required review fields.",
      });
    }

    // Validate rating
    const numericRating = Number(rating);

    if (
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5.",
      });
    }

    // Create review
    const review = await Review.create({
      customerName: customerName.trim(),
      designation: designation.trim(),
      companyName: companyName?.trim() || "",
      reviewText: reviewText.trim(),
      pluginVersion: pluginVersion.trim(),
      rating: numericRating,

      customerPhoto: {
        url: customerPhoto?.url || "",
        publicId: customerPhoto?.publicId || "",
      },

      companyLogo: {
        url: companyLogo?.url || "",
        publicId: companyLogo?.publicId || "",
      },
    });

    return res.status(201).json({
      success: true,
      message: "Review submitted successfully.",
      review,
    });
  } catch (err) {
    console.error("Add Review Error:", err);

    return res.status(500).json({
      success: false,
      message: "Unable to submit review.",
    });
  }
};

// Get all reviews (newest first)
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      reviews,
    });
  } catch (err) {
    console.error("Get Reviews Error:", err);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch reviews.",
    });
  }
};
