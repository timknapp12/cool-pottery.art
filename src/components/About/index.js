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
        Hi. We are just a couple of potters making cool pottery. We draw
        inspiration from many of the classic musicians of the world's history.
        This music stirs our souls and transforms us into creative beings with
        the yearning to give life to our hightened emotions through the medium
        of clay dug from the earth from whence we came.
        <br />
        <br /> Mozart, Beethoven, Chopin, Bach and the classics have their
        place, but we're talking about more along the lines of Tom Petty,
        Journey, Kensington, Mongolian Throat Music, and pretty much any love
        ballad from the 80s.
        <br />
        <br /> We don't smoke weed, but we are inspired by those that do.
        <br />
        <br /> To see what we have for sale, visit @coolpottery.art on
        Instagram. If you find a piece that you would like to buy then be the
        first to comment with your zip code. We will then send you a private
        message with calculated shipping (USA only) and we'll go from there :)
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
