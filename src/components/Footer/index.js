import React from "react";
import styled from "styled-components";
import { mainBlue, white, ButtonText } from "../constants";

const Wrapper = styled.div`
  background: ${mainBlue};
  padding: 1rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${white};
`;

const Footer = () => (
  <Wrapper>
    <ButtonText>
      Shop: <a>coolpottery.art</a> on Instagram
    </ButtonText>
    <ButtonText>Contact: coolpottery.art@gmail.com</ButtonText>
  </Wrapper>
);

export default Footer;