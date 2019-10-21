import React, { useContext } from "react";
import styled from "styled-components";
import { Store } from "../store";

const StyledTank = styled.div`
  display: flex;
  position: absolute;
  width: ${({ sizeOfTile }) => sizeOfTile}px;
  height: ${({ sizeOfTile }) => sizeOfTile}px;
  left: ${({ position, sizeOfTile }) => position[0] * sizeOfTile}px;
  top: ${({ position, sizeOfTile }) => position[1] * sizeOfTile}px;
  transform: rotate(${({ direction }) => direction}deg);
  background-color: transparent;
  transition: all 0.2s linear;
`;

const Tank = () => {
  const { store } = useContext(Store);
  const { maxWidth, gridSize, position, direction } = store;
  const width = maxWidth > window.innerWidth ? innerWidth : maxWidth;
  const sizeOfTile = Math.floor(width / gridSize);

  return (
    <StyledTank
      sizeOfTile={sizeOfTile}
      position={position}
      direction={direction}
    >
      <svg
        width={sizeOfTile}
        height={sizeOfTile}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="26"
          y="36.125"
          width="48.3333"
          height="42.5663"
          rx="1.37311"
          fill="#5BBD0A"
          stroke="#1E3807"
          strokeWidth="3.29545"
        />
        <rect
          x="27.6477"
          y="44.3637"
          width="6.04167"
          height="23.3428"
          fill="#2EA01E"
        />
        <rect
          x="66.6438"
          y="44.089"
          width="6.04167"
          height="23.3428"
          fill="#2EA01E"
        />
        <rect
          x="26"
          y="30.3579"
          width="10.9848"
          height="12.358"
          rx="1.37311"
          fill="#5BBD0A"
          stroke="#1E3807"
          strokeWidth="3.29545"
        />
        <rect
          x="63.3486"
          y="30.3579"
          width="10.9848"
          height="12.358"
          rx="1.37311"
          fill="#5BBD0A"
          stroke="#1E3807"
          strokeWidth="3.29545"
        />
        <rect
          x="42.2026"
          y="47.1098"
          width="15.928"
          height="17.8504"
          rx="1.37311"
          fill="#5BBD0A"
          stroke="#1E3807"
          strokeWidth="3.29545"
        />
        <rect
          x="47.1458"
          y="18"
          width="6.04167"
          height="29.1098"
          rx="1.37311"
          fill="#5BBD0A"
          stroke="#1E3807"
          strokeWidth="3.29545"
        />
        <rect
          x="26"
          y="69.0796"
          width="10.9848"
          height="12.358"
          rx="1.37311"
          fill="#5BBD0A"
          stroke="#1E3807"
          strokeWidth="3.29545"
        />
        <rect
          x="63.3486"
          y="69.0796"
          width="10.9848"
          height="12.358"
          rx="1.37311"
          fill="#5BBD0A"
          stroke="#1E3807"
          strokeWidth="3.29545"
        />
        <path
          d="M34.5132 43.1279V56.7216"
          stroke="#1E3807"
          strokeWidth="3.29545"
          strokeLinecap="round"
        />
        <path
          d="M66.3694 43.1279V56.7216"
          stroke="#1E3807"
          strokeWidth="3.29545"
          strokeLinecap="round"
        />
        <path
          d="M42.2026 71.8258V76.769"
          stroke="#1E3807"
          strokeWidth="3.29545"
          strokeLinecap="round"
        />
        <path
          d="M58.1306 71.8258V76.769"
          stroke="#1E3807"
          strokeWidth="3.29545"
          strokeLinecap="round"
        />
      </svg>
    </StyledTank>
  );
};

export default Tank;
