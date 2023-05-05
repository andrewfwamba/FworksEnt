import React from "react";

function Nav() {
  return (
    <nav className="bg-white border-gray-200 px-2 py-2.5 dark:bg-gray-800">
      <div className="container flex justify-between items-center mx-auto pt-3">
        <div className="flex items-center mx-auto">
          <span className="text-xl font-medium whitespace-nowrap dark:text-white">
            Welcome
          </span>
        </div>

        {/* <div className='flex justify-end pr-4'>
        <Toggle />
      </div> */}
      </div>
    </nav>
  );
}

export default Nav;
