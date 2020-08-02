import React from "react";
import Mondrian from "./Mondrian";

const goldenRatio = 0.618;
// window width subtracted by paddings then divided by 3
const defaultWidth = (window.innerWidth - 20) / 3;
const defaultHeight = defaultWidth * goldenRatio;
const defaultSplit = 3;

export interface PropType {
  width?: number;
  height?: number;
  split?: number;
}

const Video = ({
  width = defaultWidth,
  height = defaultHeight,
  split = defaultSplit,
}: PropType) => {
  return (
    <div className="video">
      <Mondrian width={width} height={height} split={split} />
    </div>
  );
};

export default Video;
