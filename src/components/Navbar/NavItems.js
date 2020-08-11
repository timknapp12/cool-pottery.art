import React from "react";
import styled from "styled-components";
import Flexbox from "../Flexbox";
import { Link } from "react-router-dom";
import { ButtonText, white, mainBlue } from "../constants";
import HamburgerIcon from "./HamburgerIcon";

const Wrapper = styled.div`
  display: flex;
  justify-self: end;
  align-self: center;
`;

const WideScreenMenuItems = styled(Flexbox)`
  display: none;
  @media (min-width: 580px) {
    display: flex;
  }
`;

const HamburgerMenu = styled(Flexbox)`
  position: relative;
  @media (min-width: 580px) {
    display: none;
  }
`;

const Dropdown = styled(Flexbox)`
  position: absolute;
  border: 1px solid ${white};
  padding: 4px;
  top: -10px;
  right: 30px;
  background: ${mainBlue};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${white};
  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
`;

const NavItems = ({ items, open, toggleOpen, ...props }) => {
  return (
    <Wrapper {...props}>
      <HamburgerMenu>
        <HamburgerIcon onClick={toggleOpen} />
        {open && (
          <Dropdown flexDirection="column">
            {items.map((item) => (
              <StyledLink to={item.href} key={item.name}>
                <ButtonText>{item.name}</ButtonText>
              </StyledLink>
            ))}
          </Dropdown>
        )}
      </HamburgerMenu>
      <WideScreenMenuItems>
        {items.map((item) => (
          <StyledLink
            key={item.name}
            to={item.href}
            style={{ marginLeft: "1.5rem" }}
          >
            <ButtonText>{item.name}</ButtonText>
          </StyledLink>
        ))}
      </WideScreenMenuItems>
    </Wrapper>
  );
};

export default NavItems;
