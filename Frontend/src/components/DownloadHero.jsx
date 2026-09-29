import { useEffect, useState } from "react";
import ribbon from "./../assets/ribbon.png";
import Review from "./Review";
import RevitPurchase from "./RevitPurchase";
import api from "../api/axios";
import SkeletonList from "./loader/SkeletonList";

const DownloadHero = () => {
  const [revit, setRevit] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_API_URL}/api/download`)
      .then((res) => {
        setRevit(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="flex-col justify-center items-center mt-8 p-5">
        <p className="text-2xl md:text-4xl font-bold text-center uppercase ">
          Smarter Revit Structural Design Starts Here.
        </p>
        <p className="mt-2 lg:mt-0 text-xl md:text-2xl font-semibold text-center">
          Built on 25 years of hands-on global project delivery. Made for Revit.
          Made for engineers.
        </p>
      </div>
      <div className="mb-13 mt-5 shadow-2xl p-5">
        <img src={ribbon} alt="Ribbon Image" className="w-[100%]" />
      </div>
      {loading ? (
        <SkeletonList count={2} />
      ) : (
        revit.map((elem, idx) => (
          <RevitPurchase
            key={idx}
            id={elem._id}
            description={elem.description}
            price={elem.price}
          />
        ))
      )}
      <div className="px-4 my-12 mx-5">
        <p className="text-xl font-semibold">
          INSTALLATION AND ACTIVATION INSTRUCTIONS:
        </p>
        <br></br>
        <p className="text-lg">
          After purchase, you will receive an email containing your License Key
          and the download link for the plugin. <br></br>
          <br></br> 1. Install the plugin. <br></br>
          <br></br>2. Open Autodesk Revit. <br></br>
          <br></br>3. Go to the HamstrUK Plugin ribbon. <br></br>
          <br></br>4. Click the Key command located at the top right corner.{" "}
          <br></br>
          <br></br>5. Enter the License Key you received via email. <br></br>
          <br></br>6. Click Activate License. <br></br>
          <br></br>Note: All licenses are annual per user and apply only to the
          specific Revit version purchased. Each version of Autodesk Revit
          requires its own compatible version of the HamstrUK Plug In. Licenses
          and installations are sold separately for each Revit version.{" "}
          <br></br>
          <br></br> The purchase date will be considered the start date of your
          license, and the annual period will be counted from that date.{" "}
          <br></br>If you do not receive your registration key within 24 hours
          of purchasing the plugin, please send a follow up email to
          support@hamstruk.com.
        </p>
      </div>
      <hr></hr>
      <div className="my-12 mx-5 px-4">
        <p className="text-xl font-semibold">REVIEWS</p>
        <Review review="A must-have plugin for anyone working with structural elements in Revit." />
        <Review review="Saved me hours on foundation modeling. Brilliant tool" />
        <Review review="Clean, fast, and incredibly reliable. Worth every penny" />
        <Review review="Makes slab detailing so much easier. Highly recommended." />
        <Review review="The automation for beams and columns is a game changer." />
        <Review review="Finally, a plugin that understands real-world structural workflows" />
        <Review review="Our team's productivity jumped immediately after using this." />
        <Review review="Accurate, intuitive, and very well-designed." />
        <Review review="Perfect for speeding up repetitive structural tasks" />
        <Review review="The best plugin I've used for foundation layouts" />
        <Review review="Transforms Revit into a much more powerful structural tool." />
        <Review review="Simple interface, powerful results" />
        <Review review="Column placement has never been this fast" />
        <Review review="Great value for money. Paid for itself in the first week." />
        <Review review="Wall modeling is now smooth and error-free" />
        <Review review="Excellent support and even better functionality" />
        <Review review="A lifesaver for tight project deadlines." />
        <Review review="Smart, efficient, and very dependable" />
        <Review review="Makes structural coordination so much easier" />
        <Review review="The automation features are incredibly well thought out." />
        <Review review="Perfect for both small and large-scale projects." />
        <Review review="Our engineers love how much time it saves" />
        <Review review="Very polished plugin with professional-grade results" />
      </div>
    </div>
  );
};

export default DownloadHero;
