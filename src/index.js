import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Discover from "./routes/Discover";
import ErrorPage from "./components/errorpage";
import Sidebar from "./components/sidebar";
import Home from "./routes/Home";
import Music from "./routes/Music";
import Profile from "./routes/Profile";
import LoginPage from "./routes/Auth";
import Listen from "./routes/Listen";
import Entry from "./routes/Entry";
import SignupPage from "./routes/Signup";
import Service from "./routes/Service";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorPage />} element={<Sidebar />}>
        <Route errorElement={<ErrorPage />}>
          <Route index path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/music" element={<Music />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/services" element={<Service />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
      <Route errorElement={<ErrorPage />}>
        <Route path="/index" element={<Entry />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
