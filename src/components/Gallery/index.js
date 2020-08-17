import React from "react";
import styled from "styled-components";
import Grid from "../Grid";
import Flexbox from "../Flexbox";
import Image from "../Image";
import data from "./data";

const Wrapper = styled.div`
  padding: 3rem;
`;

const Gallery = () => (
  <Wrapper>
    <Grid min="7rem" gapSize="2rem">
      {data.map((item) => (
        <Image key={item.src} {...item} />
      ))}
    </Grid>
  </Wrapper>
);

export default Gallery;
