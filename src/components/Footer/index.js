import React from "react";
import styled from "styled-components";
import { mainBlue, white, StyledText } from "../constants";

const Wrapper = styled.div`
  background: ${mainBlue};
  padding: 1rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${white};
  border-top: 1px solid ${white};
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${white};
`;

const Footer = () => (
  <Wrapper>
    <StyledText>
      Shop:{" "}
      <StyledLink
        target="_blank"
        href="https://www.instagram.com/coolpottery.art/"
      >
        coolpottery.art
      </StyledLink>{" "}
      on Instagram
    </StyledText>
    <StyledText>
      Contact:{" "}
      <StyledLink href="mailto:coolpottery.art@gmail.com">
        coolpottery.art@gmail.com
      </StyledLink>
    </StyledText>
  </Wrapper>
);

export default Footer;
