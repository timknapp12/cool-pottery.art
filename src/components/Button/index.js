import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mainBlue, warn, danger, success, white, black } from "../colors";

const StyledButton = styled.button`
  border: 1px solid ${black};
  background: ${({ color }) => color};
`;

const kindsMap = {
  Primary: mainBlue,
  Secondary: white,
  Danger: danger,
  Warn: warn,
  Success: success,
};

const Button = ({ children, kind = "Primary", ...props }) => (
  <StyledButton color={kindsMap[kind]} {...props}>
    {children}
  </StyledButton>
);

const kindsKeys = Object.keys(kindsMap);

Button.propTypes = {
  /** children inside of button */
  children: PropTypes.node.isRequired,

  /** the type of button */
  kind: PropTypes.oneOf(kindsKeys),
};

export default Button;
