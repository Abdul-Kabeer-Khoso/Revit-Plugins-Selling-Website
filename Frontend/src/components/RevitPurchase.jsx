import axios from "axios";

const RevitPurchase = ({ description, price, id }) => {
  const handlePurchase = async () => {
    console.log("handle purchase is working");

    const res = await axios.post(
      "http://localhost:3000/api/createCheckoutSession",
      {
        id,
      },
    );

    window.location.href = res.data.url;
  };

  return (
    <div className="bg-gray-300 text-sm md:text-lg rounded-lg mt-3 mx-5 py-3 px-5 flex justify-between items-center font-bold border-amber-950">
      <p>FOR {description}</p>
      <p>User/Year</p>
      <p>${price}</p>
      <button
        onClick={handlePurchase}
        className="bg-white p-2 rounded-lg hover:cursor-pointer"
      >
        Buy Now
      </button>
    </div>
  );
};

export default RevitPurchase;
