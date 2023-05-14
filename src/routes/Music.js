import React from "react";
import { downloadIcon } from "../assets/svgs";

function Music() {
  return (
    <div className="w-full h-screen dark:bg-gray-300 text-center p-2 dark:text-white">
      <div className="text-lg font-bold mb-4 text-pink-800">
        <h3>Hot Tracks</h3>
        <p>Categorized by Genre</p>
      </div>
      <div className="bg-white text-pink-950 p-2 w-full rounded shadow">
        <p>Hiphop</p>
        <div className="bg-white text-pink-950 p-2 mx-auto text-xs md:text-base w-full border-x border-b border-gray-900 rounded shadow flex justify-between">
          <p>Super 2020 Hiphop mix</p>
          <div className="flex">
            <p className="mx-2"> by Brizzy the dj</p>
            <p>23/03/2023 12:33</p>
          </div>
          <div className="cursor-pointer">{downloadIcon}</div>
        </div>
      </div>
    </div>
  );
}

export default Music;
