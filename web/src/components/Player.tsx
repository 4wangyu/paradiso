import classNames from "classnames";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ReactComponent as LeftIcon } from "../icons/left.svg";
import { useQuery } from "../utils/util";

const Player = () => {
  const { id } = useParams();
  const name = useQuery().get("name");
  const history = useHistory();

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
        <button onClick={history.goBack}>
          <LeftIcon />
        </button>
        <h1>{name}</h1>
        <button></button>
      </div>
      <video ref={videoRef}>
        <source src={`http://localhost:9000/file?id=${id}`} />
      </video>
    </div>
  );
};

export default Player;
