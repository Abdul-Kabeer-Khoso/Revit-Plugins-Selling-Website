import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import HomeMainSection from "../components/HomeMainSection";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("payment") === "success") {
      toast.success("Payment successful! Check your email.");
    }
  }, []);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="h-auto bg-white">
        <HomeHero />
        <HomeMainSection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
