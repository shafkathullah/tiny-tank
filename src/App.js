import React, { useReducer } from "react";
import Stage from "./components/Stage";
import Title from "./components/Title";
import Tank from "./components/Tank";
import Controls from "./components/Controls";
import { createGlobalStyle } from "styled-components";
import { Store, initialState, reducer } from "./store";

const GlobalStyle = createGlobalStyle`
html,body{
  margin: 0;
  padding: 0;
}

body {
  color: #3a3a3a;
  background-color: white;
}
`;
const App = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ store, dispatch }}>
      <GlobalStyle />
      <Title>Tiny Tank</Title>
      <Stage>
        <Tank />
      </Stage>
      <Controls />
    </Store.Provider>
  );
};

export default App;
