import React from "react";

function Music() {
  return (
    <div className="w-full h-screen dark:bg-gray-300 text-center p-5 dark:text-white">
      <div className="text-lg font-bold mb-4 text-pink-800">
        <h3>Hot Tracks</h3>
        <p>Categorized by Genre</p>
      </div>
      <div className="bg-white text-pink-950 p-4 mx-auto w-[96%] rounded shadow">
        <p>Hiphop</p>
        <div className="bg-white text-pink-950 p-4 mx-auto w-full border-x border-gray-200 rounded shadow flex justify-between">
          <p>Super 2020 Hiphop mix</p>
          <p> by Brizzy the dj</p>
          <p>23/03/2023 12:33</p>
        </div>
      </div>
    </div>
  );
}

export default Music;
