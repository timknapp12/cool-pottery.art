import React from "react";
import ReactDOM from "react-dom";
import Grid from "../index";

test("renders with required props without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Grid>test</Grid>, div);
});
