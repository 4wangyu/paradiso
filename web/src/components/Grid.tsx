import React from "react";
import Video from "./Video";
import { VideoFile } from "../models/model";

export interface PropType {
  videoFiles?: VideoFile[];
}

const Grid = ({ videoFiles = [] }: PropType) => {
  return (
    <div className="grid">
      {videoFiles.map((videoFile) => (
        <Video key={videoFile.id} videoFile={videoFile}></Video>
      ))}
    </div>
  );
};

export default Grid;
