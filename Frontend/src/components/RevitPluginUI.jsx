import FOUNDATION from "../assets/FOUNDATION.png";
import FLOORS from "../assets/FLOORS.png";
import BEAMS from "../assets/BEAMS.png";
import COLUMNWALL from "../assets/COLUMN WALL.png";
import EXCEL from "../assets/EXCEL.png";
import INFO from "../assets/INFO.png";
import ribbon from "../assets/ribbon.png";

const RevitPluginUI = ({
  foundation,
  structural,
  floor,
  beams,
  information,
  xl,
}) => {
  return (
    <div className="flex-col">
      {/*  Foundation Isolated Pile Caps / Foundation Slab Raft / Piling */}
      <div className="relative w-full p-4 text-center">
        {/* 3D background layer */}
        <div className="absolute inset-0 bg-white"></div>

        {/* subtle depth overlay */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* text */}
        <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
          Foundation Isolated Pile Caps / Foundation Slab Raft / Piling
        </h1>
      </div>

      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center px-2 sm:px-10 md:px-15 py-5 text-lg">
        <div className="w-[95%] sm:w-[65%] flex flex-row justify-between items-center">
          <div className="flex-col gap-0 sm:gap-1 items-start w-[65%] sm:w-[65%] md:w-[55%] lg:w-[30%]  text-sm sm:text-lg ">
            {foundation.map((elem, idx) => (
              <p key={idx}>{elem.description}</p>
            ))}
          </div>

          <div className="flex flex-col gap-2 items-start text-sm sm:text-lg">
            {foundation.map((elem) => (
              <a
                key={elem._id}
                href={elem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-all"
              >
                ▶ Click to watch video
              </a>
            ))}
          </div>
        </div>

        <img
          src={FOUNDATION}
          alt="Revit Plugin Image"
          className="w-[40vw] sm:w-35 md:w-40 lg:w-50"
        />
      </div>

      <br></br>
      <br></br>

      {/* Floor Slabs / Structural Floor */}
      <div className="relative w-full p-4 text-center">
        {/* 3D background layer */}
        <div className="absolute inset-0 bg-white"></div>

        {/* subtle depth overlay */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* text */}
        <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
          Floor Slabs / Structural Floor
        </h1>
      </div>
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center px-2 sm:px-10 md:px-15 py-5 text-lg">
        <div className="flex-col gap-0 sm:gap-1 items-start w-[65%] sm:w-[65%] md:w-[55%] lg:w-[30%]  text-sm sm:text-lg ">
          {floor.map((elem, idx) => (
            <p key={idx}>{elem.description}</p>
          ))}
        </div>

        <div className="flex flex-col gap-2 items-start text-sm sm:text-lg">
          {floor.map((elem) => (
            <a
              key={elem._id}
              href={elem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-all"
            >
              ▶ Click to watch video
            </a>
          ))}
        </div>

        <img
          src={FLOORS}
          alt="Revit Plugin Image"
          className="w-[40vw] sm:w-35 md:w-40 lg:w-50"
        />
      </div>

      <br></br>
      <br></br>

      {/* Beams / Structural Framings*/}
      <div className="relative w-full p-4 text-center">
        {/* 3D background layer */}
        <div className="absolute inset-0 bg-white"></div>

        {/* subtle depth overlay */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* text */}
        <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
          Beams / Structural Framings
        </h1>
      </div>
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center px-2 sm:px-10 md:px-15 py-5 text-lg">
        <div className="flex-col gap-0 sm:gap-1 items-start w-[65%] sm:w-[65%] md:w-[55%] lg:w-[30%]  text-sm sm:text-lg ">
          {beams.map((elem, idx) => (
            <p key={idx}>{elem.description}</p>
          ))}
        </div>

        <div className="flex flex-col gap-1 items-center text-sm sm:text-lg">
          {beams.map((elem) => (
            <a
              key={elem._id}
              href={elem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-all"
            >
              ▶ Click to watch video
            </a>
          ))}
        </div>

        <img
          src={BEAMS}
          alt="Revit Plugin Image"
          className="w-[40vw] sm:w-35 md:w-40 lg:w-50"
        />
      </div>

      <br></br>
      <br></br>

      {/* Structural Columns & Walls */}
      <div className="relative w-full p-4 text-center">
        {/* 3D background layer */}
        <div className="absolute inset-0 bg-white"></div>

        {/* subtle depth overlay */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* text */}
        <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
          Structural Columns & Walls
        </h1>
      </div>
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center px-2 sm:px-10 md:px-15 py-5 text-lg">
        <div className="flex-col gap-0 sm:gap-1 items-start w-[65%] sm:w-[65%] md:w-[55%] lg:w-[30%]  text-sm sm:text-lg ">
          {structural.map((elem, idx) => (
            <p key={idx}>{elem.description}</p>
          ))}
        </div>

        <div className="flex flex-col gap-1 items-center text-sm sm:text-lg">
          {structural.map((elem) => (
            <a
              key={elem._id}
              href={elem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-all"
            >
              ▶ Click to watch video
            </a>
          ))}
        </div>

        <img
          src={COLUMNWALL}
          alt="Revit Plugin Image"
          className="w-[40vw] sm:w-35 md:w-40 lg:w-50"
        />
      </div>

      <br></br>
      <br></br>

      {/* Information */}
      <div className="relative w-full p-4 text-center">
        {/* 3D background layer */}
        <div className="absolute inset-0 bg-white"></div>

        {/* subtle depth overlay */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* text */}
        <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
          Information
        </h1>
      </div>
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center px-2 sm:px-10 md:px-15 py-5 text-lg">
        <div className="flex flex-col gap-0 sm:gap-1 items-start w-[65%] sm:w-[65%] md:w-[55%] lg:w-[30%]  text-sm sm:text-lg ">
          {information.map((elem, idx) => (
            <p key={idx}>{elem.description}</p>
          ))}
        </div>

        <div className="flex-col gap-1 items-center text-sm sm:text-lg">
          {information.map((elem) => (
            <a
              key={elem._id}
              href={elem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-all"
            >
              ▶ Click to watch video
            </a>
          ))}
        </div>

        <img
          src={FOUNDATION}
          alt="Revit Plugin Image"
          className="w-[40vw] sm:w-35 md:w-40 lg:w-50"
        />
      </div>

      <br></br>
      <br></br>

      {/* XL Master */}
      <div className="relative w-full p-4 text-center">
        {/* 3D background layer */}
        <div className="absolute inset-0 bg-white"></div>

        {/* subtle depth overlay */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* text */}
        <h1 className="relative z-10 font-extrabold tracking-wide text-black drop-shadow-md text-base sm:text-lg md:text-2xl lg:text-3xl">
          XL Master
        </h1>
      </div>
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center px-2 sm:px-10 md:px-15 py-5 text-lg">
        <div className="flex-col gap-0 sm:gap-1 items-start w-[65%] sm:w-[65%] md:w-[55%] lg:w-[30%]  text-sm sm:text-lg ">
          {xl.map((elem, idx) => (
            <p key={idx}>{elem.description}</p>
          ))}
        </div>

        <div className="flex flex-col gap-1 items-center text-sm sm:text-lg">
          {xl.map((elem) => (
            <a
              key={elem._id}
              href={elem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-all"
            >
              ▶ Click to watch video
            </a>
          ))}
        </div>

        <img
          src={FOUNDATION}
          alt="Revit Plugin Image"
          className="w-[40vw] sm:w-35 md:w-40 lg:w-50"
        />
      </div>

      <br></br>
      <br></br>
    </div>
  );
};

export default RevitPluginUI;
