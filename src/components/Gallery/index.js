import React from "react";
import styled from "styled-components";
import { StyledText, white } from "../constants/";
import Flexbox from "../Flexbox";
import Grid from "../Grid";
import Image from "../Image";
import data from "./data";

const Wrapper = styled(Flexbox)`
  padding: 2rem 0;
  row-gap: 2rem;
`;

const GridWrapper = styled.div`
  width: 80%;
`;

const TextWrapper = styled(Flexbox)`
  border: 2px solid ${white};
  padding: 2rem;
  border-radius: 8px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${white};
`;

const Gallery = () => (
  <Wrapper flexDirection="column">
    <TextWrapper width="75%">
      <StyledText>
        This is a sample of some of the ceramic vessels that we have fashioned.
        <br />
        <br /> To see what we have for sale, visit{" "}
        <StyledLink
          target="_blank"
          href="https://www.instagram.com/coolpottery.art/"
        >
          coolpottery.art
        </StyledLink>{" "}
        on Instagram. Each post has directions on how to purchase.
      </StyledText>
    </TextWrapper>
    <GridWrapper>
      <Grid min="7rem" gapSize="2rem">
        {data.map((item) => (
          <Image key={item.src} {...item} />
        ))}
      </Grid>
    </GridWrapper>
  </Wrapper>
);

export default Gallery;
