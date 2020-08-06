import React, { useState } from "react";
import styled from "styled-components";
import { mainBlue, white } from "../constants";
import HomeIcon from "./HomeIcon";
import NavItems from "./NavItems";

const StyledNav = styled.nav`
  background: ${mainBlue};
  padding: 1rem;
  opacity: 0.95;
  height: 4rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  &:hover {
    opacity: 1;
  }
`;

const Heading = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: ${white};
  letter-spacing: 0.1rem;
  font-size: 6vw;
  margin: 0;
  justify-self: center;
  align-self: center;
  grid-column: 2/5;
  @media (min-width: 700px) {
    font-size: 4.5vw;
  }
`;

const IconWrapper = styled.div`
  justify-self: start;
  align-self: center;
`;

const Navbar = ({ items, ...props }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((state) => !state);
  return (
    <StyledNav {...props}>
      <IconWrapper>
        <HomeIcon href="/" />
      </IconWrapper>
      <Heading>Cool Pottery</Heading>
      <NavItems open={open} toggleOpen={toggleOpen} items={items} />
    </StyledNav>
  );
};

export default Navbar;
