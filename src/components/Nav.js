import React from "react";

function Nav() {
  return (
    <nav className="bg-white border-gray-200 px-2 p-1.5 md:py-2.5 dark:bg-gray-800">
      <div className="container flex justify-between items-center mx-auto pt-3">
        <div className="flex items-center mx-auto">
          <span className="text-xs py-2 sm:py-0 sm:text-lg font-medium whitespace-nowrap dark:text-white">
            Welcome, Andrew Fwamba
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
