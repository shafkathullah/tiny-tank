import { useContext, useEffect, useState } from "react";
import { Store } from "./store";
// useControls hook
export function useControls() {
  const { store, dispatch } = useContext(Store);
  const { gridSize, position, direction } = store;

  const handleRightControl = () => {
    dispatch({
      type: "right",
      value: direction + 90
    });
  };

  const handleLeftControl = () => {
    dispatch({
      type: "left",
      value: direction - 90
    });
  };

  const handleForwardControl = () => {
    let [x, y] = [...position];

    let reduced_direction = direction % 360;
    // deciding which way the tank should move
    if (Math.abs(reduced_direction) === 0) {
      // y--
      y > 0 ? dispatch({ type: "forward", value: [x, y - 1] }) : null;
    } else if (reduced_direction === 90 || reduced_direction === -270) {
      // x++
      x < gridSize - 1
        ? dispatch({ type: "forward", value: [x + 1, y] })
        : null;
    } else if (Math.abs(reduced_direction) === 180) {
      // y++
      y < gridSize - 1
        ? dispatch({ type: "forward", value: [x, y + 1] })
        : null;
    } else if (reduced_direction === 270 || reduced_direction === -90) {
      // x--
      x > 0 ? dispatch({ type: "forward", value: [x - 1, y] }) : null;
    }
  };

  return { handleRightControl, handleLeftControl, handleForwardControl };
}

// useKeyPress hook
export function useKeyPress(targetKey, onPressUp = () => {}) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // Add event listeners
  useEffect(() => {
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
        onPressUp();
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [onPressUp, targetKey]);

  return keyPressed;
}
