import React from "react";
import Mondrian from "../components/Mondrian";

const Home = () => {
  return (
    <div>
      <Mondrian width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default Home;
