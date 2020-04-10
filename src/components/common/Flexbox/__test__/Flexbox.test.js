import React from "react";
import ReactDOM from "react-dom";
import Flexbox from "../index";

test("renders with required props without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Flexbox>test</Flexbox>, div);
});
