import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    console.log("handle Submit is working");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        {
          username,
          password,
        },
      );

      localStorage.setItem("adminToken", res.data.token);

      setUsername("");
      setPassword("");

      navigate("/admindashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-between items-center p-5 w-[90%] min-[450px]:max-[640px]:w-100 sm:w-100 h-auto bg-amber-50 border border-gray-100 shadow-md rounded-lg py-10">
        <p className="text-2xl font-bold mb-2">Welcome Back</p>

        <p className="text-md mb-10 text-center">
          Enter your username and password to access admin dashboard
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-5 text-center">{error}</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-between items-center gap-10"
        >
          <input
            type="text"
            placeholder="Enter Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-100 rounded-lg bg-white w-full p-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />

          <input
            type="Enter password secretly"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-100 rounded-lg bg-white w-full p-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full h-auto py-2 rounded-lg bg-teal-600 text-white font-bold hover:cursor-pointer disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
