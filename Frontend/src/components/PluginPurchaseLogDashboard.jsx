import { useEffect, useState } from "react";
import api from "../api/axios";

const PluginPurchaseLogDashboard = () => {
  const [purchaseLogs, setPurchaseLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Fetch purchase logs from backend
  useEffect(() => {
    const fetchPurchaseLogs = async () => {
      try {
        setLoading(true);

        const res = await api.get(
          `${import.meta.env.VITE_API_URL}/api/purchase-logs`,
        );

        console.log("Purchase Logs:", res.data);

        setPurchaseLogs(res.data);
      } catch (err) {
        console.log("Error fetching purchase logs:", err);
        setPurchaseLogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchaseLogs();
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Filter records
  const filteredPurchaseLogs = purchaseLogs.filter((purchase) => {
    const purchaseDate = new Date(purchase.createdAt);

    // Year filter
    if (selectedYear && purchaseDate.getFullYear() !== Number(selectedYear)) {
      return false;
    }

    // Start date filter
    if (startDate) {
      const start = new Date(`${startDate}T00:00:00`);

      if (purchaseDate < start) {
        return false;
      }
    }

    // End date filter
    if (endDate) {
      const end = new Date(`${endDate}T23:59:59.999`);

      if (purchaseDate > end) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="w-full">
      {/* Dashboard Header */}
      <div className="w-full h-auto p-2 rounded-md bg-amber-200 text-lg font-semibold flex justify-center items-center mb-4">
        PURCHASE LOG DASHBOARD
      </div>

      {/* Filters + Export */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          {/* Start Date */}
          <div className="flex flex-col gap-2 w-full lg:w-auto">
            <label className="text-sm font-semibold text-gray-700">
              Start Date
            </label>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* End Date */}
          <div className="flex flex-col gap-2 w-full lg:w-auto">
            <label className="text-sm font-semibold text-gray-700">
              End Date
            </label>

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Year */}
          <div className="flex flex-col gap-2 w-full lg:w-auto">
            <label className="text-sm font-semibold text-gray-700">Year</label>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
            >
              <option value="">Year</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>

          {/* Export Button */}
          <button
            type="button"
            className="w-full lg:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Export
          </button>
        </div>
      </div>

      {/* Purchase Records */}
      <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
        {/* Loading */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        ) : filteredPurchaseLogs.length === 0 ? (
          /* Empty State */
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-500 text-lg font-medium">Nothing to show</p>
          </div>
        ) : (
          /* Table */
          <div className="max-h-[57vh] overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="px-5 py-4 text-left text-sm font-bold text-gray-700">
                    S.NO
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-bold text-gray-700">
                    Customer Email
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-bold text-gray-700">
                    Plugin
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-bold text-gray-700">
                    Purchased Date
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-bold text-gray-700">
                    Price
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredPurchaseLogs.map((purchase, index) => (
                  <tr
                    key={purchase._id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    {/* Serial Number */}
                    <td className="px-5 py-5">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex justify-center items-center">
                        <span className="text-sm font-semibold text-gray-700">
                          {index + 1}
                        </span>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="px-5 py-5">
                      <span className="text-sm font-medium text-gray-800">
                        {purchase.customerEmail}
                      </span>
                    </td>

                    {/* Plugin */}
                    <td className="px-5 py-5">
                      <span className="font-semibold text-gray-800">
                        {purchase.pluginName}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-5 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-800">
                          {formatDate(purchase.createdAt)}
                        </span>

                        <span className="text-xs text-gray-500 mt-1">
                          {formatTime(purchase.createdAt)}
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-5 py-5">
                      <span className="font-bold text-gray-800">
                        AED{" "}
                        {purchase.aedPrice !== null &&
                        purchase.aedPrice !== undefined
                          ? Number(purchase.aedPrice).toFixed(2)
                          : "N/A"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PluginPurchaseLogDashboard;
