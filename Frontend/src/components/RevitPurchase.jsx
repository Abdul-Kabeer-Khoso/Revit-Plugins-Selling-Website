const RevitPurchase = ({ description, price }) => {
    return <div className="bg-gray-300 text-sm md:text-lg rounded-lg mt-3 mx-5 py-3 px-5 flex justify-between items-center font-bold border-amber-950">
        <p>FOR {description}</p>
        <p>User/Year</p>
        <p>${price}</p>
        <button className="bg-white p-2 rounded-lg hover:cursor-pointer">Buy Now</button>
    </div>
}

export default RevitPurchase;