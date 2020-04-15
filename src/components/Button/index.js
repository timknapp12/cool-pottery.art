import React from "react";
import styled from "styled-components";
import { mainBlue, warn, danger, success, white, black } from "../colors";

const StyledButton = styled.button`
  border: 1px solid ${black};
  background: ${({ color }) => color};
`;

const kindMap = {
  Primary: mainBlue,
  Secondary: white,
  Danger: danger,
  Warn: warn,
  Success: success,
};

const Button = ({ children, kind = "Primary", ...props }) => (
  <StyledButton color={kindMap[kind]} {...props}>
    {children}
  </StyledButton>
);

export default Button;
