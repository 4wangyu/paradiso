import React, { useEffect, useRef } from "react";

interface Square {
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
}

let squares: Square[] = [];

const colors = ["#b74b2e", "#051836", "#a1ac9a"];
const white = "#7796b0";

function splitSquaresWith(coordinates: Square) {
  const { x, y } = coordinates;

  for (let i = squares.length - 1; i >= 0; i--) {
    const square = squares[i];

    if (x && x > square.x && x < square.x + square.width) {
      if (Math.random() > 0.5) {
        squares.splice(i, 1);
        splitOnX(square, x);
      }
    }

    if (y && y > square.y && y < square.y + square.height) {
      if (Math.random() > 0.5) {
        squares.splice(i, 1);
        splitOnY(square, y);
      }
    }
  }
}

function splitOnX(square: Square, splitAt: number) {
  const squareA = {
    x: square.x,
    y: square.y,
    width: square.width - (square.width - splitAt + square.x),
    height: square.height,
  };

  const squareB = {
    x: splitAt,
    y: square.y,
    width: square.width - splitAt + square.x,
    height: square.height,
  };

  squares.push(squareA);
  squares.push(squareB);
}

function splitOnY(square: Square, splitAt: number) {
  const squareA = {
    x: square.x,
    y: square.y,
    width: square.width,
    height: square.height - (square.height - splitAt + square.y),
  };

  const squareB = {
    x: square.x,
    y: splitAt,
    width: square.width,
    height: square.height - splitAt + square.y,
  };

  squares.push(squareA);
  squares.push(squareB);
}

function draw(context: CanvasRenderingContext2D) {
  for (let i = 0; i < colors.length; i++) {
    squares[Math.floor(Math.random() * squares.length)].color = colors[i];
  }
  for (let i = 0; i < squares.length; i++) {
    context.beginPath();
    context.rect(
      squares[i].x,
      squares[i].y,
      squares[i].width,
      squares[i].height
    );

    const color = squares[i].color || white;
    context.fillStyle = color;

    context.fill();
    context.stroke();
  }
}

interface PropType {
  width: number;
  height: number;
  split: number;
}

/* 
  Based on https://generativeartistry.com/tutorials/piet-mondrian/
*/
const Mondrian = ({ width, height, split }: PropType) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = width;
    canvas.height = height;
    context.lineWidth = 5;
    context.strokeStyle = "#131112";

    const size = Math.max(width, height);
    const step = size / split;
    squares = [];
    squares.push({
      x: 0,
      y: 0,
      width,
      height,
    });
    for (let i = 0; i < size; i += step) {
      splitSquaresWith({ y: i } as Square);
      splitSquaresWith({ x: i } as Square);
    }

    draw(context);
  }, [width, height, split]);

  return <canvas ref={canvasRef} />;
};

export default Mondrian;
