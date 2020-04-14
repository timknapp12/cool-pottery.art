import React from "react";
import Grid from "../components/common/Grid";
import styled from "styled-components";

const Block = styled.div`
  height: 100px;
  background: lavender;
`;

export default {
  title: "Grid",
  component: Grid,
};

export const Default = () => (
  <Grid>
    <Block>Block One</Block>
    <Block>Block Two</Block>
    <Block>Block Three</Block>
    <Block>Block Four</Block>
    <Block>Block Five</Block>
    <Block>Block Six</Block>
    <Block>Block Seven</Block>
    <Block>Block Eight</Block>
  </Grid>
);
export const GapSize = () => (
  <Grid gapSize="2rem">
    <Block>Block One</Block>
    <Block>Block Two</Block>
    <Block>Block Three</Block>
    <Block>Block Four</Block>
    <Block>Block Five</Block>
    <Block>Block Six</Block>
    <Block>Block Seven</Block>
    <Block>Block Eight</Block>
  </Grid>
);
export const RowGapSizeOverride = () => (
  <Grid gapSize="2rem" rowGapSize="1rem">
    <Block>Block One</Block>
    <Block>Block Two</Block>
    <Block>Block Three</Block>
    <Block>Block Four</Block>
    <Block>Block Five</Block>
    <Block>Block Six</Block>
    <Block>Block Seven</Block>
    <Block>Block Eight</Block>
  </Grid>
);
export const ColumnGapSizeOverride = () => (
  <Grid gapSize="2rem" columnGapSize="1rem">
    <Block>Block One</Block>
    <Block>Block Two</Block>
    <Block>Block Three</Block>
    <Block>Block Four</Block>
    <Block>Block Five</Block>
    <Block>Block Six</Block>
    <Block>Block Seven</Block>
    <Block>Block Eight</Block>
  </Grid>
);

export const Min200px = () => (
  <Grid min="200px">
    <Block>Block One</Block>
    <Block>Block Two</Block>
    <Block>Block Three</Block>
    <Block>Block Four</Block>
    <Block>Block Five</Block>
    <Block>Block Six</Block>
    <Block>Block Seven</Block>
    <Block>Block Eight</Block>
  </Grid>
);
