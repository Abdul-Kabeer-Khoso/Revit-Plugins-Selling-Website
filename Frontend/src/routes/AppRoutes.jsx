import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Downloads from "../pages/Downloads";
import Families from "../pages/Families";
import PageNotFound from "../components/PageNotFound,";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/downloads",
    element: <Downloads />
  },
  {
    path: "/families",
    element: <Families />
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />
  },
  {
    path: "/admindashboard",
    element: <AdminDashboard />
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);

export default router;