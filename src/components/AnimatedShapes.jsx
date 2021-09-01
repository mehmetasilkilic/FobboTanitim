
import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 75px;
  height: 75px;
  background-color: #f0bb00;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  border-radius: 50%;
  animation: square 25s linear alternate infinite;
  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f00bb0;
  opacity: 0.5;
  position: absolute;
  top: 500px;
  left: -300px;
  z-index: -1;
  animation: circle 25s linear alternate infinite;
  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Rectangle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #0f0bb0;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  border-radius: 50%;
  animation: rectangle 25s linear alternate infinite;
  @keyframes rectangle {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

const AnimatedShapes = () => {
    return <>
        <Square />
        <Circle />
        <Rectangle />
    </>
}

export default AnimatedShapes;
