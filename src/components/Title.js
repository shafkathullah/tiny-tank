import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: #66af29;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
