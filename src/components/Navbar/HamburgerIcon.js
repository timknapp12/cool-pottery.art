import React from "react";
import styled from "styled-components";
import hamburger from "../../assets/hamburger.png";

const HamburgerLogo = styled.img`
  width: 1.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const HamburgerIcon = ({ ...props }) => (
  <HamburgerLogo {...props} alt="menu" src={hamburger} />
);

export default HamburgerIcon;
