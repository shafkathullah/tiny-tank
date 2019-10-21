import React from "react";
import styled from "styled-components";

const StyledTile = styled.div`
  background-color: ${({ id }) => (id % 2 == 0 ? "#fdfefc" : "#f6faf2")};
  width: ${({ sizeOfTile }) => sizeOfTile}px;
  height: ${({ sizeOfTile }) => sizeOfTile}px;
`;

const Tile = props => {
  return <StyledTile {...props} />;
};

export default Tile;
