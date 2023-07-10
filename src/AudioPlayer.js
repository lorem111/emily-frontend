import React, { useRef } from "react";

function AudioPlayer({ src }) {
  const audioRef = useRef(new Audio(src));

  const handlePlay = () => {
    audioRef.current.play().catch((error) => console.log("playback error", error));
  };

  handlePlay()
  
}


export default AudioPlayer;
