import React from "react";
import styled from "styled-components";
import Flexbox from "../Flexbox";
import { mainBlue, white, ButtonText } from "../constants";
import HomeIcon from "./HomeIcon";

const StyledNav = styled.nav`
  background: ${mainBlue};
  padding: 1rem;
  opacity: 0.95;
  &:hover {
    opacity: 1;
  }
`;

const StyledLink = styled.a`
  margin-left: 0.5rem;
  text-decoration: none;
  color: ${white};
  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
`;

const Heading = styled.h1`
  /* font-family: "Luckiest Guy", cursive; */
  font-family: Arial, Helvetica, sans-serif;
  color: ${white};
  letter-spacing: 0.1rem;
  display: none;
  @media (min-width: 580px) {
    display: block;
    font-size: 5vh;
  }
  @media (min-width: 700px) {
    font-size: 6.5vh;
  }
  @media (min-width: 900px) {
    font-size: 8vh;
  }
`;

const Navbar = ({ items, ...props }) => (
  <StyledNav {...props}>
    <Flexbox height="4rem" justifyContent="space-between">
      <HomeIcon href="/" />
      <Heading>Cool Pottery</Heading>
      <Flexbox>
        {items.map((item) => (
          <StyledLink
            style={{ marginLeft: "1.5rem" }}
            key={item.name}
            href={item.href}
          >
            <ButtonText>{item.name}</ButtonText>
          </StyledLink>
        ))}
      </Flexbox>
    </Flexbox>
  </StyledNav>
);

export default Navbar;
