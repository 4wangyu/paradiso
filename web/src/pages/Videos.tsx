import axios from "axios";
import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Pagination from "../components/Pagination";
import { VideoFiles } from "../models/model";
import { handleError, useQuery } from "../utils/util";

const Videos = () => {
  const [videos, setVideos] = useState<VideoFiles>();
  const page = +(useQuery().get("p") || 1);

  useEffect(() => {
    axios
      .get<VideoFiles>(`http://localhost:9000/videos?p=${page}`)
      .then((res) => {
        setVideos(res.data);
      })
      .catch(handleError);
  }, [page]);

  return (
    <div className="videos">
      <h2>Latest Videos</h2>
      <Grid videoFiles={videos?.files}></Grid>
      <Pagination total={videos?.total} current={page}></Pagination>
    </div>
  );
};

export default Videos;
