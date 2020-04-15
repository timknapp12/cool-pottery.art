import React from "react";
import ReactDOM from "react-dom";
import Grid from "./index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders with required props without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Grid>test</Grid>, div);
});

test("renders children", () => {
  const { getByText } = render(
    <Grid>
      <h1>Cool Pottery</h1>
    </Grid>
  );
  expect(getByText("Cool Pottery")).toBeInTheDocument();
});
