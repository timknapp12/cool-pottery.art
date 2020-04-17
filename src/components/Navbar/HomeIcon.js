import React from "react";
import styled from "styled-components";
import logo from "../../assets/cool-pottery.png";

const HomeLogo = styled.img`
  width: 6rem;
  height: 4rem;
  cursor: pointer;
`;

const HomeIcon = () => <HomeLogo alt="home" src={logo} />;

export default HomeIcon;
