import React, { useEffect } from "react";
import Recent from "../components/Recent";
import Video from "../components/Video";
import axios from "axios";

const call = () => {
  axios
    .get("/random")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

const Home = () => {
  useEffect(() => {
    call();
  }, []);

  return (
    <div>
      <Video
        width={window.innerWidth}
        height={window.innerHeight}
        split={5}
        hideTitle={true}
      />
      <Recent />
      <button onClick={call}></button>
    </div>
  );
};

export default Home;
