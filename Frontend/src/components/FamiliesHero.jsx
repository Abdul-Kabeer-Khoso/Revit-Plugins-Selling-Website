import { useEffect, useState } from "react";
import search from "../assets/search.png";
import Family from "./Family";
import YoutubeTutorial from "./YoutubeTutorial";
import api from "../api/axios";
import SkeletonList from "./loader/SkeletonList";

const FamiliesHero = () => {
  const [families, setFamilies] = useState([]);
  const [youtubeTutorials, setYoutubeTutorials] = useState([]);
  const [loadingFirst, setLoadingFirst] = useState(true);
  const [loadingSecond, setLoadingSecond] = useState(true);

  // Search states
  const [familySearch, setFamilySearch] = useState("");
  const [tutorialSearch, setTutorialSearch] = useState("");

  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_API_URL}/api/families`)
      .then((res) => {
        console.log("Families:", res.data);
        setFamilies(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingFirst(false);
      });

    api
      .get("/youtubeTutorials")
      .then((res) => {
        console.log("Tutorials:", res.data);
        setYoutubeTutorials(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingSecond(false);
      });
  }, []);

  // Filtered Families
  const filteredFamilies = families.filter((family) =>
    family.family.toLowerCase().includes(familySearch.toLowerCase()),
  );

  // Filtered Tutorials
  const filteredTutorials = youtubeTutorials.filter((tutorial) =>
    tutorial.tutorial.toLowerCase().includes(tutorialSearch.toLowerCase()),
  );

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

      {/* Families Section */}

      <div className="px-4 mt-12 mb-6 mx-5">
        <div className="flex flex-col sm:flex-row justify-between items-center relative">
          <p className="text-xl font-semibold inline">DOWNLOAD FREE FAMILIES</p>

          <form className="mt-4 sm:mt-0" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search Families"
              value={familySearch}
              onChange={(e) => setFamilySearch(e.target.value)}
              className="w-[83vw] sm:w-60 md:w-100 pl-12 pr-4 py-2 border border-gray-300 rounded-4xl"
            />
          </form>

          <img
            src={search}
            alt="Search Icon"
            className="w-5 absolute top-14 right-[73vw] min-[485px]:max-[640px]:right-[78vw] sm:top-3 sm:right-50 md:right-90"
          />
        </div>
      </div>

      <hr />

      <div className="mt-10 mb-10">
        {loadingFirst ? (
          <SkeletonList count={1} />
        ) : filteredFamilies.length > 0 ? (
          filteredFamilies.map((elem) => (
            <Family key={elem._id} name={elem.family} price={elem.price} />
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">No family found.</p>
        )}
      </div>

      <hr />

      {/* Tutorials Section */}

      <div className="px-4 mt-12 mb-6 mx-5">
        <div className="flex flex-col sm:flex-row justify-between items-center relative">
          <p className="text-xl font-semibold inline">
            YouTube Tutorials Links
          </p>

          <form className="mt-4 sm:mt-0" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search Tutorials"
              value={tutorialSearch}
              onChange={(e) => setTutorialSearch(e.target.value)}
              className="w-[83vw] sm:w-60 md:w-100 pl-12 pr-4 py-2 border border-gray-300 rounded-4xl"
            />
          </form>

          <img
            src={search}
            alt="Search Icon"
            className="w-5 absolute top-14 right-[73vw] min-[485px]:max-[640px]:right-[78vw] sm:top-3 sm:right-50 md:right-90"
          />
        </div>
      </div>

      <div className="mt-10 mb-10">
        {loadingSecond ? (
          <SkeletonList count={1} />
        ) : filteredTutorials.length > 0 ? (
          filteredTutorials.map((elem) => (
            <YoutubeTutorial
              key={elem._id}
              name={elem.tutorial}
              link={elem.link}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No tutorial found.
          </p>
        )}
      </div>
    </div>
  );
};

export default FamiliesHero;
