import React from "react";

// Implementing a global store using useReducer and useContext hooks.
export const initialState = {
  maxWidth: 500,
  gridSize: 5,
  direction: 0,
  position: [0, 0]
};

export const reducer = (state, { type, value }) => {
  switch (type) {
    case "right":
      return { ...state, direction: value };
    case "left":
      return { ...state, direction: value };
    case "forward":
      return { ...state, position: value };
    default:
      return state;
  }
};

export const Store = React.createContext();
