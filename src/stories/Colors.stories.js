import React from "react";
import styled from "styled-components";
import {
  mainBlue,
  lightBlue,
  middleBlue,
  warn,
  danger,
  success,
  white,
  black,
} from "../components/colors";
import Grid from "../components/Grid";

const Block = styled.div`
  height: 6.25rem;
  background: ${({ color }) => (color ? color : white)};
`;

export default { title: "Colors" };

export const colors = () => (
  <Grid>
    <Block color={mainBlue} />
    <Block color={lightBlue} />
    <Block color={middleBlue} />
    <Block color={warn} />
    <Block />
    <Block color={danger} />
    <Block color={success} />
    <Block color={black} />
  </Grid>
);

export const MainBlueWithText = () => (
  <Grid>
    <Block color={mainBlue}>
      <p style={{ color: white }}>This is main blue with white text</p>
    </Block>
    <Block color={mainBlue}>
      <p style={{ color: black }}>This is main blue with black text</p>
    </Block>
  </Grid>
);

export const LightBlueWithText = () => (
  <Grid>
    <Block color={lightBlue}>
      <p style={{ color: white }}>This is light blue with white text</p>
    </Block>
    <Block color={lightBlue}>
      <p style={{ color: black }}>This is light blue with black text</p>
    </Block>
  </Grid>
);

export const MiddleBlueWithText = () => (
  <Grid>
    <Block color={middleBlue}>
      <p style={{ color: white }}>This is middle blue with white text</p>
    </Block>
    <Block color={middleBlue}>
      <p style={{ color: black }}>This is middle blue with black text</p>
    </Block>
  </Grid>
);
