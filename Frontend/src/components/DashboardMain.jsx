import DownloadDashboard from "./DownlaodDashboard"
import FamiliesDashboard from "./FamiliesDashboard"
import HomeDashboard from "./HomeDashboard"
import PluginPurchaseLogDashboard from "./PluginPurchaseLogDashboard"

const DashboardMain = ({ activeDashboard }) => {
    return <div className="w-[74%] h-full p-5 bg-white rounded-lg ">
        {activeDashboard == "Home" && <HomeDashboard />}
        {activeDashboard == "Downloads" && <DownloadDashboard />}
        {activeDashboard == "Families" && <FamiliesDashboard />}
        {activeDashboard == "Plugin" && <PluginPurchaseLogDashboard />}
    </div >
}

export default DashboardMain