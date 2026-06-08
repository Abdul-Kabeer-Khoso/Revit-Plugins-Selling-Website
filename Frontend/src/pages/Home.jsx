import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeMainSection from "../components/HomeMainSection";
import Navbar from "../components/Navbar";

const Home = () => {
    return <div className="w-full h-full">
        <Navbar />
        <div className="h-auto bg-white">
            <Hero />
            <HomeMainSection />
        </div>

        <Footer />


    </div>
}

export default Home;