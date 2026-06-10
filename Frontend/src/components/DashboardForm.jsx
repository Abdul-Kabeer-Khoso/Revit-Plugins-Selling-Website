const DashboardForm = ({ title, placeholder1, placeholder2, buttonName }) => {
    return <form className="w-full flex flex-col justify-center items-center gap-5 mt-20">
        <p className="text-lg font-semibold">{title}</p>
        <input type="text" className="w-120 rounded-lg px-4 py-2 border border-gray-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder={placeholder1} />
        <input type="text" className="w-120 rounded-lg px-4 py-2 border border-gray-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder={placeholder2} />
        <button className="w-120 bg-teal-700 px-4 py-2 rounded-lg font-semibold text-white hover:cursor-pointer">{buttonName}</button>
    </form>
}

export default DashboardForm