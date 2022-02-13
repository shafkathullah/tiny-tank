import React from "react";
import styled from "styled-components";
import { useControls, useKeyPress } from "../custom_hooks";

const StyledControls = styled.div`
  text-align: center;
  margin-top: 20px;
  button {
    background: #66af29;
    color: white;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 4px 0px #469207;
    padding: 15px;
    outline: none;
    transition: all 0.1s ease-in;
    cursor:pointer;
    &:active,
    &.pressed {
      transform: translateY(5px);
      box-shadow: 0px 0px 0px #469207;
      background: #459403;
    }
    &:nth-child(even) {
      margin: 0 10px;
    }
    svg {
      display: block;
    }
  }
  p {
    font-family: "SF Mono", "Roboto Mono", monospace;
    font-size: 12px;
    color: #afafaf;
  }
`;

const Controls = () => {
  const {
    handleRightControl,
    handleLeftControl,
    handleForwardControl
  } = useControls();

  const leftArrowKey = useKeyPress("ArrowLeft", handleLeftControl);
  const rightArrowKey = useKeyPress("ArrowRight", handleRightControl);
  const upArrowKey = useKeyPress("ArrowUp", handleForwardControl);

  return (
    <StyledControls>
      <button
        className={leftArrowKey ? "pressed" : null}
        onClick={handleLeftControl}
      >
        <Arrow angle={-90} />
      </button>
      <button
        className={upArrowKey ? "pressed" : null}
        onClick={handleForwardControl}
      >
        <Arrow angle={0} />
      </button>
      <button
        className={rightArrowKey ? "pressed" : null}
        onClick={handleRightControl}
      >
        <Arrow angle={90} />
      </button>
      <p>Or use arrow keys on a keyboard</p>
    </StyledControls>
  );
};

const Arrow = ({ angle }) => {
  return (
    <svg
      transform={`rotate(${angle})`}
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.82675 0.366272L18.9372 16.146H0.716332L9.82675 0.366272Z"
        fill="white"
      />
    </svg>
  );
};

export default Controls;
