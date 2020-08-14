import React from "react";
import styled from "styled-components";
import { mainBlue } from "./components/constants";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import router from "./router";

const items = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${mainBlue};
  width: 100vw;
`;

function App() {
  return (
    <Wrapper>
      <Navbar items={items} />
      {router}
      <Footer />
    </Wrapper>
  );
}

export default App;
