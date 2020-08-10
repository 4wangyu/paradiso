import React from "react";
import Mondrian from "./Mondrian";
import { ReactComponent as PlayIcon } from "../icons/play.svg";
import { VideoFile } from "../models/model";

const goldenRatio = 0.618;
// window width subtracted by paddings then divided by 3
const defaultWidth = (window.innerWidth - 20) / 3;
const defaultHeight = defaultWidth * goldenRatio;
const defaultSplit = 3;

export interface PropType {
  width?: number;
  height?: number;
  split?: number;
  hideTitle?: boolean;
  videoFile?: VideoFile;
}

const Video = ({
  videoFile,
  width = defaultWidth,
  height = defaultHeight,
  split = defaultSplit,
  hideTitle = false,
}: PropType) => {
  return (
    <div>
      <div className="video">
        <Mondrian width={width} height={height} split={split} />
        <div className="control">
          <div className="play">
            <PlayIcon
              width={hideTitle ? "11.7rem" : "7.4rem"}
              height={hideTitle ? "11.7rem" : "7.4rem"}
            />
          </div>
          {hideTitle && <h3>{videoFile?.name}</h3>}
        </div>
      </div>

      {hideTitle || (
        <h3 className="title" style={{ width }}>
          {videoFile?.name}
        </h3>
      )}
    </div>
  );
};

export default Video;
