import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-auto h-screen">
        <Sidebar />
        <div className="grow">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
