import React from "react";
import Navbar from "../components/Navbar";

export default { title: "Navbar", component: Navbar };

const items = [
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "About",
    href: "/about",
  },
];

export const Default = () => <Navbar items={items} />;
