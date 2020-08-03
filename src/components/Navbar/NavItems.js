import React from "react";
import styled from "styled-components";
import Flexbox from "../Flexbox";
import { ButtonText, white } from "../constants";

const ResponsiveFlexBox = styled(Flexbox)`
  display: none;
  @media (min-width: 580px) {
    display: flex;
  }
`;

const HamburgerMenu = styled.div`
  display: flex;
  @media (min-width: 580px) {
    display: none;
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

const NavItems = ({ items, ...props }) => (
  <div {...props}>
    <HamburgerMenu>=</HamburgerMenu>
    <ResponsiveFlexBox>
      {items.map((item) => (
        <StyledLink
          style={{ marginLeft: "1.5rem" }}
          key={item.name}
          href={item.href}
        >
          <ButtonText>{item.name}</ButtonText>
        </StyledLink>
      ))}
    </ResponsiveFlexBox>
  </div>
);

export default NavItems;
