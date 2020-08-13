import React from "react";
import styled from "styled-components";
import { mainBlue } from "../constants";
import video from "../../assets/HomePage2.mp4";

const Wrapper = styled.div`
  height: 100%;
`;

const Home = () => (
  <Wrapper>
    <video
      style={{
        width: "100vw",
        maxHeight: "100vh",
        background: mainBlue,
      }}
      autoPlay
      loop
      muted
    >
      <source src={video} type="video/mp4" />
    </video>
  </Wrapper>
);

export default Home;
