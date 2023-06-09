import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
// import AudioPlayer from "react-h5-audio-player";
import { baseURL, getMusic, stream } from "../assets/api";
import { PropagateLoader } from "react-spinners";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";

function Listen() {
  const navigate = useNavigate();
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeStream, setActiveStream] = useState([]);
  const failed = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      html: "Something went wrong while fetching tracks try again later",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDQzZmZkM2M1NDA1MzI2MTk3OGUxYTIiLCJpYXQiOjE2ODM3MzY4ODEsImV4cCI6MTY4MzgyMzI4MX0.0ePz8S6LLCqao2t0d8IMPvCbze0Z8ZDo36AkwPqaN7Y";
  const headers = { Authorization: `Bearer ${token}` };
  const getTracks = async () => {
    try {
      setLoading(true);

      const res = await axios.get(getMusic, {
        headers,
      });
      if (res.status === 200) {
        setTracks(res.data.music);
      } else if (res.error) {
        failed();
        navigate("/signup");
      }

      console.log(res.status);
      setLoading(false);
    } catch (error) {
      console.log(error);
      failed();
      // setLoading(false);
    }
  };
  const streamMusic = async () => {
    try {
      const res = axios.get(`${stream}/2023mixes`, { headers });
      console.log(res);
      if (res.status === 200) {
        const data = await res.data;
        const { fileUrl } = data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTracks();
  }, []);
  console.log(tracks);

  return (
    <div className="w-full">
      <div>
        <p className="font-bold m-4 text-lg text-pink-800">Listen</p>
      </div>
      <div className="grid lg:grid-cols-3 mx-4 gap-3">
        <div className="p-20 lg:col-span-2 bg-purple-500 rounded-xl shadow-md"></div>
        <div className="p-20 bg-gray-400 rounded-md shadow-md"></div>
      </div>
      <div>
        <p className="font-bold text-lg mt-2 mx-4 text-pink-800">Popular</p>
      </div>
      {/* <div className="bg-white text-pink-800 p-7 shadow-lg shadow-pink-300 rounded m-4 ring-1 ring-pink-500 ">
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
      </div> */}
      {loading && (
        <div className="h-[35rem] flex justify-center items-center rounded shadow-md bg-gray-50 text-center ">
          <PropagateLoader color="#0E7DD5" className="mx-auto" />
        </div>
      )}

      {tracks.map((track, index) => (
        <div
          key={index}
          className="bg-white text-pink-800 p-7 shadow-lg shadow-blue-300 rounded m-4 ring-1 ring-blue-400 "
        >
          <div className="flex">
            <p className="font-bold text-lg pr-10">Mixes</p>
            <p className="text-base text-pink-900">{track.title}</p>
            <p className="text-gray-400 italic px-8">by {track.artist.name}</p>
          </div>
          <ReactAudioPlayer
            src={require("../assets/Vivian-Charm-ft-Jose-Chameleone-Official-Video-Skiza-8541101_qtqQ7ZFgdxI.mp3")}
            controls
            className="w-full flex py-2"
          />
        </div>
      ))}
      {/* <div className="bg-white text-pink-800 p-7 shadow-lg shadow-pink-300 rounded m-4 ring-1 ring-pink-500 ">
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
      </div> */}
      <div className="w-full">
        <AudioPlayer
          audiosource={`${baseURL}/uploads//1683036791443-552903765.mp3`}
        />
      </div>
    </div>
  );
}

export default Listen;
