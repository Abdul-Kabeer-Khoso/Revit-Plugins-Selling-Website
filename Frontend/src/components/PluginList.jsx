import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

const PluginList = ({ productKey, email, country, productPurchaseDate, computerId, installationDate, expiryDate, handleEditRecord }) => {
    return <div className="w-full h-atuo flex flex-col justify-between items-center  px-2  py-2 rounded-lg border border-gray-400">
        <div className="w-full flex justify-between items-center gap-1">
            <p className="w-[25%] font-sm  text-center border-r">{productKey}</p>
            <p className="w-[24%] font-sm  text-center border-r">{email}</p>
            <p className="w-[20%] font-sm  text-center border-r">{country}</p>
            <p className="w-[16%] font-sm  text-center border-r">{productPurchaseDate}</p>
            <p className="w-[27%] font-sm  text-center border-r">{computerId}</p>
            <p className="w-[16%] font-sm  text-center border-r">{installationDate}</p>
            <p className="w-[16%] font-sm  text-center">{expiryDate}</p>
        </div>

        <div className="w-full flex justify-between items-center gap-2 my-2 ">

            <div className="w-[50%] flex justify-center items-center bg-green-400 rounded-md p-1 hover:cursor-pointer">
                <FaPen
                    onClick={() => {
                        handleEditRecord({
                            show: false,
                            edit: true
                        })
                    }}
                    className="w-10" color="white" />

                <p className="text-white font-semibold">Edit</p>
            </div>

            <div className="w-[50%] flex justify-center items-center bg-red-400 rounded-md p-1 hover:cursor-pointer">
                <FaTrash
                    className="w-10" color="white" />

                <p className="font-semibold text-white">Delete</p>
            </div>



        </div>


    </div>
}

export default PluginList