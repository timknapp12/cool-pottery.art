import React from "react";
import styled from "styled-components";
import Flexbox from "../Flexbox";
import { ButtonText, white } from "../constants";
import HamburgerIcon from "./HamburgerIcon";

const Wrapper = styled.div`
  display: flex;
`;

const ResponsiveFlexBox = styled(Flexbox)`
  display: none;
  @media (min-width: 580px) {
    display: flex;
  }
`;

const HamburgerMenu = styled.div`
  width: 12vw;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 580px) {
    display: none;
  }
`;

const Dropdown = styled(Flexbox)`
  height: 200px;
  display: none;
  ${HamburgerMenu}:hover & {
    display: flex;
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
  <Wrapper {...props}>
    <HamburgerMenu>
      <HamburgerIcon />
      <Dropdown flexDirection="column">
        {items.map((item) => (
          <StyledLink
            style={{ marginLeft: "1.5rem" }}
            key={item.name}
            href={item.href}
          >
            <ButtonText>{item.name}</ButtonText>
          </StyledLink>
        ))}
      </Dropdown>
    </HamburgerMenu>
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
  </Wrapper>
);

export default NavItems;
