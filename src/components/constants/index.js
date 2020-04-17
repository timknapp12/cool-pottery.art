import React from "react";
import styled from "styled-components";

export const mainBlue = "#2081C3";

export const lightBlue = "#63D2FF";

export const middleBlue = "#78D5D7";

export const white = "#F7F9F9";

export const warn = "#EDB24B";

export const danger = "#C41717";

export const success = "#129B5B";

export const black = "#0D1E16";

const ButtonP = styled.p`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.1rem;
  color: ${white};
`;

export const ButtonText = ({ children }) => <ButtonP>{children}</ButtonP>;
