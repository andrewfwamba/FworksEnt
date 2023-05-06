import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Discover from "./routes/Discover";
import ErrorPage from "./components/errorpage";
import Sidebar from "./components/sidebar";
import Home from "./routes/Home";
import Music from "./routes/Music";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" errorElement={<ErrorPage />} element={<Sidebar />}>
        <Route errorElement={<ErrorPage />}>
          <Route index path="/home" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/music" element={<Music />} />
        </Route>
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
