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
// TODO: add hrefs
const Footer = () => (
  <Wrapper>
    <StyledText>
      Shop: <a>coolpottery.art</a> on Instagram
    </StyledText>
    <StyledText>Contact: coolpottery.art@gmail.com</StyledText>
  </Wrapper>
);

export default Footer;
