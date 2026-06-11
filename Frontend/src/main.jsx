
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer
      autoClose={1500} />
  </>
);