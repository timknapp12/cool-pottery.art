import React from "react";
import styled from "styled-components";
import Flexbox from "../Flexbox";
import { StyledText, white } from "../constants/";
import Tile from "./Tile";
import data from "./data";

const Wrapper = styled(Flexbox)`
  padding: 2rem;
  row-gap: 2rem;
  height: 100%;
`;

const TextWrapper = styled(Flexbox)`
  border: 2px solid ${white};
  padding: 2rem;
  border-radius: 8px;
`;

const ImageWrapper = styled(Flexbox)`
  flex-direction: column;
  row-gap: 1rem;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const About = () => (
  <Wrapper flexDirection="column" justifyContent="space-between" height="100%">
    <TextWrapper width="75%">
      <StyledText>
        Hi. We are just a couple of potters striving to make cooler and cooler
        pottery. We have been told that the more emotionally and mentally
        unstable we become the more artistic we will be so we are working
        diligently toward that aim.
        <br />
        <br />
        Meanwhile, we draw most of our inspiration from 80s rock love ballads.
      </StyledText>
    </TextWrapper>
    <ImageWrapper width="100%" justifyContent="space-around">
      {data.map((item) => (
        <Tile key={item.id} {...item} />
      ))}
    </ImageWrapper>
  </Wrapper>
);

export default About;
