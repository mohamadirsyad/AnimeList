"use client";

import { useState } from "react";

const { default: YouTube } = require("react-youtube");

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-end bg-color-secondary px-3 mb-0 "
        >
          close
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Vidio error guys")}
        />
      </div>
    );
  };
  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className=" fixed bottom-5 w-32 right-5 bg-color-primary shadow-xl rounded-md hover:bg-color-accent transition-all"
      >
        Tonton Trailer
      </button>
    );
  };
  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};
export default VideoPlayer;
