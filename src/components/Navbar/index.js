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

const Navbar = ({ items, ...props }) => (
  <StyledNav {...props}>
    <Flexbox height="4rem" justifyContent="space-between">
      <HomeIcon href="/" />
      <h1>Cool Pottery</h1>
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
