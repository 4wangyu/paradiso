import React from "react";
import Recent from "../components/Recent";
import Video from "../components/Video";

const Home = () => {
  return (
    <div>
      <Video
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
