import React from "react";
import Grid from "../components/Grid";
import Pagination from "../components/Pagination";

const Videos = () => {
  return (
    <div className="videos">
      <h2>Latest Videos</h2>
      <Grid></Grid>
      <Pagination></Pagination>
    </div>
  );
};

export default Videos;
