import React, { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { ReactComponent as LeftIcon } from "../icons/left.svg";
import classNames from "classnames";
import { useParams, useLocation, useHistory } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Player = () => {
  const { id } = useParams();
  let name = useQuery().get("name");
  let history = useHistory();

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
