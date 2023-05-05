import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Discover from "./routes/Discover";
import ErrorPage from "./components/errorpage";
import Sidebar from "./components/sidebar";

const Applayout = () => {
  <>
    <Sidebar />
    <Outlet />
  </>;
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Sidebar />} errorElement={<ErrorPage />}>
      <Route path="/discover" element={<Discover />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
