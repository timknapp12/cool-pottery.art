import React, { useState } from "react";
import styled from "styled-components";
import Flexbox from "../Flexbox";
import { ButtonText, white } from "../constants";
import HamburgerIcon from "./HamburgerIcon";

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const ResponsiveFlexBox = styled(Flexbox)`
  display: none;
  @media (min-width: 580px) {
    display: flex;
  }
`;

const HamburgerMenu = styled.div`
  /* width: 12vw; */
  /* display: flex; */
  /* justify-content: flex-end; */
  position: absolute;
  top: 60;
  right: 60;
  @media (min-width: 580px) {
    display: none;
  }
`;

const Dropdown = styled.div`
  margin-top: 200px;
  height: 200px;
  z-index: 10;
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

const NavItems = ({ items, ...props }) => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen((state) => !state);

  return (
    <Wrapper {...props}>
      <HamburgerMenu>
        <HamburgerIcon onClick={toggleOpen} />
        {open && (
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
        )}
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
};

export default NavItems;
