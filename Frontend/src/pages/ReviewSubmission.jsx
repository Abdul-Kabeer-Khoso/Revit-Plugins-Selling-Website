import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api/axios";

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3 MB

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            aria-label={`Rate ${star} out of 5 stars`}
            className={`text-3xl transition-transform hover:scale-110 ${
              star <= rating ? "text-red-600" : "text-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      <span className="text-sm font-medium text-gray-500">
        {rating > 0 ? `${rating}/5` : "Select a rating"}
      </span>
    </div>
  );
};

// Upload an image directly to Cloudinary
const uploadImage = async (file) => {
  // Get signed upload credentials from backend
  const { data: signatureData } = await api.get("/cloudinary/signature", {
    params: {
      folder: "revit-reviews",
    },
  });

  const { timestamp, signature, cloudName, apiKey, folder } = signatureData;

  // Prepare Cloudinary upload data
  const uploadData = new FormData();

  uploadData.append("file", file);
  uploadData.append("api_key", apiKey);
  uploadData.append("timestamp", timestamp);
  uploadData.append("signature", signature);
  uploadData.append("folder", folder);

  // Upload directly to Cloudinary
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: uploadData,
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error?.message || "Unable to upload image.");
  }

  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
};

const ReviewSubmission = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    designation: "",
    companyName: "",
    reviewText: "",
    pluginVersion: "",
    rating: 0,
  });

  const [customerPhoto, setCustomerPhoto] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);

  const [customerPhotoPreview, setCustomerPhotoPreview] = useState("");
  const [companyLogoPreview, setCompanyLogoPreview] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!customerPhoto) {
      setCustomerPhotoPreview("");
      return;
    }

    const preview = URL.createObjectURL(customerPhoto);
    setCustomerPhotoPreview(preview);

    return () => URL.revokeObjectURL(preview);
  }, [customerPhoto]);

  useEffect(() => {
    if (!companyLogo) {
      setCompanyLogoPreview("");
      return;
    }

    const preview = URL.createObjectURL(companyLogo);
    setCompanyLogoPreview(preview);

    return () => URL.revokeObjectURL(preview);
  }, [companyLogo]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e, setFile) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setError("");

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("Image size must not exceed 3 MB.");
      e.target.value = "";
      return;
    }

    setFile(file);
  };

  const removeImage = (setFile, inputId) => {
    setFile(null);

    const input = document.getElementById(inputId);

    if (input) {
      input.value = "";
    }
  };

  const initials = formData.customerName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (formData.rating === 0) {
      setError("Please select your star rating.");
      return;
    }

    try {
      setIsSubmitting(true);

      // Upload optional images to Cloudinary
      const [uploadedCustomerPhoto, uploadedCompanyLogo] = await Promise.all([
        customerPhoto
          ? uploadImage(customerPhoto)
          : Promise.resolve({ url: "", publicId: "" }),

        companyLogo
          ? uploadImage(companyLogo)
          : Promise.resolve({ url: "", publicId: "" }),
      ]);

      // Prepare review data
      const reviewData = {
        customerName: formData.customerName.trim(),
        designation: formData.designation.trim(),
        companyName: formData.companyName.trim(),
        reviewText: formData.reviewText.trim(),
        pluginVersion: formData.pluginVersion.trim(),
        rating: Number(formData.rating),

        customerPhoto: uploadedCustomerPhoto,
        companyLogo: uploadedCompanyLogo,
      };

      // Submit review to backend
      const response = await api.post("/reviews", reviewData);

      if (!response.data.success) {
        throw new Error(response.data.message || "Unable to submit review.");
      }

      setSuccess("Thank you! Your review has been submitted successfully.");

      // Reset form
      setFormData({
        customerName: "",
        designation: "",
        companyName: "",
        reviewText: "",
        pluginVersion: "",
        rating: 0,
      });

      setCustomerPhoto(null);
      setCompanyLogo(null);

      const customerInput = document.getElementById("customerPhoto");
      const companyInput = document.getElementById("companyLogo");

      if (customerInput) customerInput.value = "";
      if (companyInput) companyInput.value = "";
    } catch (err) {
      console.error("Review Submission Error:", err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Page Heading */}
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
              CUSTOMER FEEDBACK
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Share Your Experience
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              We'd love to hear about your experience. Your feedback helps us
              improve and helps other professionals make better decisions.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-5">
            {/* Review Form */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
              <div className="mb-7">
                <h2 className="text-xl font-bold text-gray-900">
                  Write Your Review
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Fields marked with * are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Customer Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="e.g. Daniel Carter"
                    required
                    maxLength={80}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </div>

                {/* Position */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Job Title / Position *
                  </label>

                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="e.g. Structural Engineer"
                    required
                    maxLength={100}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Company Name *
                  </label>

                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Nova Design Group"
                    required
                    maxLength={100}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </div>

                {/* Plugin Version */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Plugin Version *
                  </label>

                  <input
                    type="text"
                    name="pluginVersion"
                    value={formData.pluginVersion}
                    onChange={handleChange}
                    placeholder="e.g. Revit 2025"
                    required
                    maxLength={50}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </div>

                {/* Review Description */}
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label className="text-sm font-semibold text-gray-700">
                      Your Review *
                    </label>

                    <span className="text-xs text-gray-400">
                      {formData.reviewText.length}/500
                    </span>
                  </div>

                  <textarea
                    name="reviewText"
                    value={formData.reviewText}
                    onChange={handleChange}
                    placeholder="Tell us how our plugin has helped your workflow..."
                    required
                    minLength={10}
                    maxLength={500}
                    rows={5}
                    className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />

                  <p className="mt-2 text-xs text-gray-400">
                    Please share an honest review. Your testimonial preview will
                    display a maximum of two lines.
                  </p>
                </div>

                {/* Profile Photo */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Profile Photo
                    <span className="ml-2 font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <div className="flex flex-wrap items-center gap-4 rounded-lg border border-dashed border-gray-300 p-4">
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-gray-100 text-lg font-bold text-gray-500">
                      {customerPhotoPreview ? (
                        <img
                          src={customerPhotoPreview}
                          alt="Profile preview"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        initials || "?"
                      )}
                    </div>

                    <div className="flex-1">
                      <input
                        id="customerPhoto"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, setCustomerPhoto)}
                        className="block w-full text-sm text-gray-500 file:mr-3 file:rounded-lg file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:font-medium file:text-gray-700 hover:file:bg-gray-200"
                      />

                      <p className="mt-2 text-xs text-gray-400">
                        JPG, PNG or WebP. Maximum 3 MB.
                      </p>
                    </div>

                    {customerPhoto && (
                      <button
                        type="button"
                        onClick={() =>
                          removeImage(setCustomerPhoto, "customerPhoto")
                        }
                        className="text-sm font-medium text-red-600 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>

                {/* Company Logo */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Company Logo
                    <span className="ml-2 font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <div className="flex flex-wrap items-center gap-4 rounded-lg border border-dashed border-gray-300 p-4">
                    <div className="flex h-16 w-20 items-center justify-center overflow-hidden rounded-lg bg-gray-50 p-2 text-center text-xs font-semibold text-gray-500">
                      {companyLogoPreview ? (
                        <img
                          src={companyLogoPreview}
                          alt="Company logo preview"
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        formData.companyName || "Company Name"
                      )}
                    </div>

                    <div className="flex-1">
                      <input
                        id="companyLogo"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, setCompanyLogo)}
                        className="block w-full text-sm text-gray-500 file:mr-3 file:rounded-lg file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:font-medium file:text-gray-700 hover:file:bg-gray-200"
                      />

                      <p className="mt-2 text-xs text-gray-400">
                        JPG, PNG or WebP. Maximum 3 MB.
                      </p>
                    </div>

                    {companyLogo && (
                      <button
                        type="button"
                        onClick={() =>
                          removeImage(setCompanyLogo, "companyLogo")
                        }
                        className="text-sm font-medium text-red-600 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>

                {/* Star Rating */}
                <div>
                  <label className="mb-3 block text-sm font-semibold text-gray-700">
                    Your Rating *
                  </label>

                  <StarRating
                    rating={formData.rating}
                    setRating={(rating) =>
                      setFormData((prev) => ({
                        ...prev,
                        rating,
                      }))
                    }
                  />
                </div>

                {/* Error / Success */}
                {error && (
                  <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
                    {success}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-red-600 px-6 py-3.5 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting Review..." : "Submit Your Review"}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Your review will be published immediately after successful
                  submission.
                </p>
              </form>
            </div>

            {/* Live Preview */}
            <div className="lg:sticky lg:top-8 lg:col-span-2">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Live Preview
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  This is how your testimonial will look on our website.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                {/* Review Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100 text-lg font-bold text-gray-500">
                      {customerPhotoPreview ? (
                        <img
                          src={customerPhotoPreview}
                          alt="Customer"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        initials || "?"
                      )}
                    </div>

                    <div className="min-w-0">
                      <h3 className="break-words font-bold text-gray-900">
                        {formData.customerName || "Your Name"}
                      </h3>

                      <p className="mt-1 break-words text-sm text-gray-500">
                        {formData.designation || "Your Position"}
                        {formData.companyName
                          ? ` | ${formData.companyName}`
                          : ""}
                      </p>

                      <div className="mt-3 flex gap-0.5 text-xl text-red-600">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star}>
                            {star <= formData.rating ? "★" : "☆"}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 min-h-12 break-words text-sm leading-6 text-gray-600 line-clamp-2">
                    {formData.reviewText ||
                      "Your review will appear here. Share your experience with our Revit plugin..."}
                  </p>

                  <p className="mt-3 text-xs text-gray-400">
                    Plugin: {formData.pluginVersion || "Revit Version"}
                  </p>
                </div>

                {/* Company Logo / Name */}
                <div className="flex min-h-36 items-center justify-center border-t border-gray-100 bg-gray-50 p-6">
                  {companyLogoPreview ? (
                    <img
                      src={companyLogoPreview}
                      alt="Company"
                      className="max-h-24 max-w-full object-contain"
                    />
                  ) : (
                    <h3 className="break-words text-center text-xl font-semibold text-gray-700">
                      {formData.companyName || "Company Name"}
                    </h3>
                  )}
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-gray-100 p-4">
                <p className="text-sm leading-6 text-gray-600">
                  <strong>Tip:</strong> A clear profile picture, company logo,
                  and specific feedback make your testimonial more helpful to
                  other Revit professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ReviewSubmission;
