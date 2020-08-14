import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  mainBlue,
  warn,
  danger,
  success,
  lightBlue,
  black,
  StyledText,
} from "../constants";

const StyledButton = styled.button`
  border: 1px solid ${black};
  background: ${({ color }) => color};
  border-radius: 0.25rem;
  padding: 0.5rem;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const kindsMap = {
  Primary: mainBlue,
  Secondary: lightBlue,
  Danger: danger,
  Warn: warn,
  Success: success,
};

const Button = ({ children, kind = "Primary", ...props }) => (
  <StyledButton color={kindsMap[kind]} {...props}>
    <StyledText>{children}</StyledText>
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
