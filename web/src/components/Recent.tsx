import axios from "axios";
import React, { useEffect, useState } from "react";
import { VideoFile } from "../models/model";
import Grid from "./Grid";
import { handleError } from "../utils/util";

const Recent = () => {
  const [recentVideos, setRecentVideos] = useState<VideoFile[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/recent")
      .then((res) => {
        setRecentVideos(res.data);
      })
      .catch(handleError);
  }, []);

  return (
    <div className="recent">
      <div className="heading">
        <hr />
        <h2>Recent</h2>
      </div>

      <Grid videoFiles={recentVideos}></Grid>
    </div>
  );
};

export default Recent;
