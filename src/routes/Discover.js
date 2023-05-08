import React from "react";

function Discover() {
  return (
    <div className="w-full justify-center items-center py-4 px-4 bg-gray-200 text-center">
      <div>
        <p className="font-bold text-xl my-4 mx-10 text-pink-900">New Mixes</p>
      </div>
      <div className="grid md:grid-cols-6 gap-2">
        <div className="bg-pink-600 rounded h-[10rem] p-10"></div>
        <div className="bg-purple-400 rounded p-10"></div>
        <div className="bg-green-400 rounded p-10"></div>
        <div className="bg-amber-200 rounded p-10"></div>
        <div className="bg-violet-500 rounded p-10"></div>
        <div className="bg-pink-200 rounded p-10"></div>
      </div>
    </div>
  );
}

export default Discover;
