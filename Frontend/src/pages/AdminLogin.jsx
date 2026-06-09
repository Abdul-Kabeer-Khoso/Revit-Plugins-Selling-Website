import { useState } from "react";

const AdminLogin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(username);
        console.log(password);

        setUsername("");
        setPassword("")
    }

    return <div className="w-full h-screen flex justify-center items-center">

        <div className="flex flex-col justify-between items-center p-5 w-[90%] min-[450px]:max-[640px]:w-100  sm:w-100 h-auto bg-amber-50 border border-gray-100 shadow-md rounded-lg py-10">
            <p className="text-2xl font-bold mb-2">Welcome Back</p>
            <p className="text-md mb-10 text-center">Enter your username and password to access admin dashboard</p>

            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col justify-between items-center gap-10"
            >

                <input type="text"
                    placeholder="Enter Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray-100 rounded-lg bg-white w-full p-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />

                <input type="password"
                    placeholder="Enter Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-100 rounded-lg bg-white w-full p-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />

                <button type="submit" className="w-full h-auto py-2 rounded-lg bg-teal-600 text-white font-bold hover:cursor-pointer">Login</button>
            </form>

        </div>

    </div>
}

export default AdminLogin;