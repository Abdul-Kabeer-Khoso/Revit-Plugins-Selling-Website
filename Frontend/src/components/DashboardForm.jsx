import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DashboardForm = ({ title, placeholder1, placeholder2, buttonName, addFormData, firstValue, secondValue }) => {

    const navigate = useNavigate();

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    useEffect(() => {
        setInput1(firstValue || '');
        setInput2(secondValue || '');
    }, [firstValue, secondValue]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input1);
        console.log(input2);

        const data = {
            input1,
            input2
        }

        addFormData(data);

        setInput1('');
        setInput2('');


    }


    return <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center items-center gap-5 mt-20 relative">
        <p className="text-lg font-semibold">{title}</p>

        <div
            onClick={() => window.location.href = "http://localhost:5173/admindashboard"}
            className="absolute flex justify-center items-center p-2 rounded-lg bg-green-600 hover:cursor-pointer bottom-60 right-218">

            <FaLongArrowAltLeft
                size="20px"
                color="white"
            />

            <p className="ml-2 font-semibold text-white">Back</p>

        </div>

        <input
            onChange={(e) => setInput1(e.target.value)}
            value={input1}
            required
            type="text" className="w-120 rounded-lg px-4 py-2 border border-gray-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder={placeholder1} />

        <input
            onChange={(e) => setInput2(e.target.value)}
            value={input2}
            required
            type="text" className="w-120 rounded-lg px-4 py-2 border border-gray-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder={placeholder2} />

        <button type="submit" className="w-120 bg-teal-700 px-4 py-2 rounded-lg font-semibold text-white hover:cursor-pointer">{buttonName}</button>
    </form >

}

export default DashboardForm