import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Downloads from "../pages/Downloads";
import Families from "../pages/Families";
import PageNotFound from "../components/PageNotFound";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import Testimonials from "../pages/Testimonials";
import ReviewSubmission from "../pages/ReviewSubmission";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/downloads",
    element: <Downloads />,
  },
  {
    path: "/families",
    element: <Families />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "/add-review",
    element: <ReviewSubmission />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/admindashboard",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
