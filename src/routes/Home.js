import React from "react";

function Home() {
  return (
    <div className="w-full h-screen bg-teal-200 text-center  dark:text-white">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 pt-4 px-2 w-full gap-2">
        <div className="md:col-span-2 p-20 bg-slate-400 rounded"></div>
        <div className="bg-white p-20 rounded md:row-span-2 shadow-md"></div>
        <div className="sm:col-span-2 p-20 bg-slate-400 rounded-sm shadow"></div>
      </div>
      <div className="p-20 bg-white my-4 mx-2"></div>
    </div>
  );
}

export default Home;
