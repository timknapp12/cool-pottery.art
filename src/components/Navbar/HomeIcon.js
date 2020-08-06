import React from "react";
import styled from "styled-components";
import logo from "../../assets/cool-pottery.png";

const HomeLogo = styled.img`
  cursor: pointer;
  width: 3rem;
  @media (min-width: 375px) {
    width: 4rem;
  }
  @media (min-width: 700px) {
    width: 6rem;
  }
`;

const HomeIcon = () => <HomeLogo alt="home" src={logo} />;

export default HomeIcon;
