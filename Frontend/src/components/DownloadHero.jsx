import { useEffect, useState } from "react";
import ribbon from "./../assets/ribbon.png";
import Review from "./Review";
import RevitPurchase from "./RevitPurchase";
import api from "../api/axios";

const DownloadHero = () => {
  const [revit, setRevit] = useState([]);

  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_API_URL}/api/download`)
      .then((res) => {
        console.log(res.data);
        setRevit(res.data);
      })
      .catch((err) => {
        console.log(err);
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
      <div className="my-13 shadow-2xl p-5">
        <img src={ribbon} alt="Ribbon Image" />
      </div>

      {revit.map((elem, idx) => (
        <RevitPurchase
          key={idx}
          id={elem._id}
          description={elem.description}
          price={elem.price}
        />
      ))}

      <div className="px-4 my-12 mx-5">
        <p className="text-xl font-semibold">
          INSTALLATION AND ACTIVATION INSTRUCTIONS:
        </p>
        <br></br>
        <p className="text-lg">
          The .exe installer is a per-user installer and does not require any
          admin install privileges. Don't "Run as Admin" or it may not appear on
          the current user's profile. <br></br>
          The .msi installer is a per-machine installer and will require admin
          install privileges.<br></br>
          Both installers have a -quiet switch for silent installation by
          deployment software.<br></br>
          Single-User Licenses:<br></br>
          Purchase<br></br>
          Purchase the quantity of licenses needed for your team.<br></br>
          All licenses purchased are attributed to the company email domain name
          (unless using a personal email).<br></br>
          Each single user license authorizes you to register two computers for
          the same user. A unique registration code must be requested from each
          computer. A separate license should be purchased for each user that
          will use the tools. <br></br>
          Notify Users<br></br>
          You can immediately notify users that they can install and activate
          the software.<br></br>
          Each user license request will be counted toward the total number
          purchased for the company on a first come, first served basis. If you
          would like to submit a list of authorized users via email to control
          who can request activations, that can be accommodated as well.{" "}
          <br></br>
          Click Activate<br></br>
          Your user(s) can immediately install the tools and click the
          Licensing/Activation button on the RF Tools ribbon in Revit. Use the
          'Request individual user registration key' option to generate and send
          in an activation request code. Check your spam folder or send a follow
          up email if your registration key is not received within 24 hours of
          sending your activation request email.<br></br>
          As long as the user email address domain matches the purchasing
          company email address domain, the activation will be attributed to the
          purchase
        </p>

        <p className="mt-5 text-lg">
          Note: All licenses are annual and apply only to the specific Revit
          version purchased. Each version of Autodesk Revit requires its own
          compatible version of the HamstrUK Plug-In. Licenses and installations
          are sold separately for each Revit version.
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
