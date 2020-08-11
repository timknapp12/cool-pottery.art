import React from "react";
import Flexbox from "./components/Flexbox";
import Navbar from "./components/Navbar";
import router from "./router";

const items = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
];

function App() {
  return (
    <div>
      <Navbar items={items} />
      {/* <Flexbox height="150px">
        Welcome to Cool Pottery. This site is under construction. Come back and
        see us soon! Or send an email to coolpottery.art@gmail.com
      </Flexbox> */}
      {router}
    </div>
  );
}

export default App;
