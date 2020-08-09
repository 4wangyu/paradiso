import React, { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const Player = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = new Plyr(videoRef.current as HTMLVideoElement, {
      autoplay: true,
    });
    return () => player.destroy();
  });

  return (
    <div>
      <video ref={videoRef}>
        <source src="http://localhost:58135/random" />
      </video>
    </div>
  );
};

export default Player;
