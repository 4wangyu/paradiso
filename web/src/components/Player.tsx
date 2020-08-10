import React, { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { ReactComponent as LeftIcon } from "../icons/left.svg";
import classNames from "classnames";

const id = "dddef4f7-d9cc-4b0e-8aba-149c3d4f4f6f";

const Player = () => {
  const [controlsshown, setControlsshown] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = new Plyr(videoRef.current as HTMLVideoElement, {
      autoplay: true,
    });
    player.on("controlsshown", () => setControlsshown(true));
    player.on("controlshidden", () => setControlsshown(false));
    return () => player.destroy();
  }, []);

  const headerClass = classNames({
    header: true,
    controlsshown,
  });

  return (
    <div className="player">
      <div className={headerClass}>
        <button>
          <LeftIcon />
        </button>
        <h1>Title</h1>
        <button></button>
      </div>
      <video ref={videoRef}>
        <source src={`http://localhost:9000/file?id=${id}`} />
      </video>
    </div>
  );
};

export default Player;
