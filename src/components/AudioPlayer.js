import React, { useState, useRef } from "react";

const AudioPlayer = ({ audiosource }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="w-full bg-purple-300 rounded p-3 m-2">
      <audio
        ref={audioRef}
        src={audiosource}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <div className="px-6 flex">
        <div className="w-full mr-10">
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full text-pink-800 cursor-pointer"
          />
          <div>
            <span>{formatTime(currentTime)}</span> /{" "}
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume controls here */}
        <div className="flex">
          <label htmlFor="volume mt-10" className="text-xs">
            Volume:
          </label>
          <input
            type="range"
            id="volume"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="cursor-pointer ml-4 outline-none h-4"
          />
        </div>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default AudioPlayer;
