import React, { useContext } from "react";
import styled from "styled-components";
import Tile from "./Tile.js";
import { Store } from "../store";

const StyledStage = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  max-width: ${({ maxWidth }) => maxWidth}px;
  margin: 0 auto;
`;

const Stage = ({ children }) => {
  const { store } = useContext(Store);
  const { maxWidth, gridSize } = store;
  const width = maxWidth > window.innerWidth ? innerWidth : maxWidth;
  const sizeOfTile = Math.floor(width / gridSize);

  return (
    <StyledStage maxWidth={maxWidth}>
      {new Array(gridSize ** 2).fill(1).map((item, index) => (
        <Tile sizeOfTile={sizeOfTile} key={index} id={index}></Tile>
      ))}
      {children}
    </StyledStage>
  );
};

export default Stage;
