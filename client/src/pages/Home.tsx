import React from "react";
import Mondrian from "../components/Mondrian";
import Recent from "../components/Recent";

const Home = () => {
  return (
    <div>
      <Mondrian width={window.innerWidth} height={window.innerHeight} />
      <Recent />
    </div>
  );
};

export default Home;
