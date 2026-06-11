const YoutubeTutorial = ({ name, link }) => {
    return <div className="flex justify-between items-center px-2 py-1 sm:px-4 sm:py-2 mx-5 my-4 rounded-xl  bg-gray-200">
        <p className="w-[50%] sm:w-[60%] font-extrabold ml-4 text-sm sm:text-lg">{name}</p>
        <div className="pr-2 sm:pr-6 flex justify-end font-semibold text-sm sm:text-lg">{link}</div>
    </div>
}

export default YoutubeTutorial;