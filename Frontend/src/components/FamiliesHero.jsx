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

  // Single search state for both Families and YouTube Tutorials
  const [searchQuery, setSearchQuery] = useState("");

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

  // Single search applied to both Families and Tutorials
  const filteredFamilies = families.filter((family) =>
    family.family.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredTutorials = youtubeTutorials.filter((tutorial) =>
    tutorial.tutorial.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Check if search is active
  const isSearching = searchQuery.trim() !== "";

  // Check whether anything was found in either section
  const noSearchResults =
    isSearching &&
    !loadingFirst &&
    !loadingSecond &&
    filteredFamilies.length === 0 &&
    filteredTutorials.length === 0;

  return (
    <div>
      <div className="flex-col justify-center items-center mt-8 p-5">
        <p className="text-2xl md:text-4xl font-bold text-center uppercase">
          Smarter Revit Structural Design Starts Here.
        </p>

        <p className="mt-2 lg:mt-0 text-xl md:text-2xl font-semibold text-center">
          Built on 25 years of hands-on global project delivery. Made for Revit.
          Made for engineers.
        </p>
      </div>

      {/* Single Search Section */}
      <div className="px-4 mt-12 mb-6 mx-5">
        <div className="flex justify-center items-center">
          <form
            className="w-full sm:w-80 md:w-100 relative"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search Families or YouTube Tutorials"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-4xl"
            />

            <img
              src={search}
              alt="Search Icon"
              className="w-5 absolute left-4 top-1/2 -translate-y-1/2"
            />
          </form>
        </div>
      </div>

      {/* No Results */}
      {noSearchResults ? (
        <div className="mt-16 mb-16">
          <p className="text-center text-gray-500 text-lg font-medium">
            No Family or Youtube Tutorial
          </p>
        </div>
      ) : (
        <>
          {/* Families Section */}
          <div className="px-4 mt-12 mb-6 mx-5">
            <p className="text-xl font-semibold">DOWNLOAD FREE FAMILIES</p>
          </div>

          <hr />

          <div className="mt-10 mb-10">
            {loadingFirst ? (
              <SkeletonList count={1} />
            ) : filteredFamilies.length > 0 ? (
              filteredFamilies.map((elem) => (
                <Family
                  key={elem._id}
                  name={elem.family}
                  price={elem.price}
                  fileUrl={elem.fileUrl}
                />
              ))
            ) : isSearching ? null : (
              <p className="text-center text-gray-500 text-lg">
                No family found.
              </p>
            )}
          </div>

          <hr />

          {/* Tutorials Section */}
          <div className="px-4 mt-12 mb-6 mx-5">
            <p className="text-xl font-semibold">YouTube Tutorials Links</p>
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
            ) : isSearching ? null : (
              <p className="text-center text-gray-500 text-lg">
                No tutorial found.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FamiliesHero;
