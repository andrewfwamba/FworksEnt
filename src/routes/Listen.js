import React from "react";
import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "react-h5-audio-player";

function Listen() {
  return (
    <div className="w-full p-4">
      <div>
        <p className="font-bold text-lg text-pink-800">Listen</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="p-20 col-span-2 bg-purple-500 rounded-xl shadow-md"></div>
        <div className="p-20 bg-gray-400 rounded-md shadow-md"></div>
      </div>
      <div>
        <p className="font-bold text-lg mt-2 text-pink-800">Popular</p>
      </div>
      <div className="bg-white text-pink-800 p-7 shadow-lg shadow-pink-300 rounded m-4 ring-1 ring-pink-500 ">
        <div className="flex">
          <p className="font-bold text-lg pr-10">Dancehall</p>
          <p className="text-base text-pink-900">Dancehall vibes 2023</p>
          <p className="text-gray-400 italic px-8">by Nigel Braize</p>
        </div>
        <ReactAudioPlayer
          src={require("../assets/Vivian-Charm-ft-Jose-Chameleone-Official-Video-Skiza-8541101_qtqQ7ZFgdxI.mp3")}
          controls
          className="w-full flex py-2"
        />
      </div>
      <div className="bg-white text-pink-800 p-7 shadow-lg shadow-pink-300 rounded m-4 ring-1 ring-pink-500 ">
        <div className="flex">
          <p className="font-bold text-lg pr-10">Dancehall</p>
          <p className="text-base text-pink-900">Dancehall vibes 2023</p>
          <p className="text-gray-400 italic px-8">by Nigel Braize</p>
        </div>
        <ReactAudioPlayer
          src={
            "https://www2.iis.fraunhofer.de/AAC/ChID-BLITS-EBU-Narration.mp4"
          }
          controls
          className="w-full flex py-2 bg-pink-300 rounded-xl px-8"
        />
      </div>
    </div>
  );
}

export default Listen;
