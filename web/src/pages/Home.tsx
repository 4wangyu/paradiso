import React, { useEffect, useState } from "react";
import Recent from "../components/Recent";
import Video from "../components/Video";
import axios from "axios";
import { handleError } from "../utils/util";
import { VideoFile } from "../models/model";

const Home = () => {
  const [randomVideo, setRandomVideo] = useState<VideoFile>();

  useEffect(() => {
    axios
      .get("http://localhost:9000/random")
      .then((res) => {
        setRandomVideo(res.data);
      })
      .catch(handleError);
  }, []);

  return (
    <div>
      <Video
        videoFile={randomVideo as VideoFile}
        width={window.innerWidth}
        height={window.innerHeight}
        split={5}
        hideTitle={true}
      />
      <Recent />
    </div>
  );
};

export default Home;
