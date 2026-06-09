import { useState } from "react";
import DashboardMain from "../components/DashboardMain";
import DashboardSideBar from "../components/DashboardSideBar"

const AdminDashboard = () => {

    const [activeDashboard, setActiveDashboard] = useState("Home");

    return <div className="w-full h-screen flex justify-between items-center p-3 bg-gray-100">
        <DashboardSideBar activeDashboard={activeDashboard} setActiveDashboard={setActiveDashboard} />
        <DashboardMain activeDashboard={activeDashboard} />
    </div>
}

export default AdminDashboard;