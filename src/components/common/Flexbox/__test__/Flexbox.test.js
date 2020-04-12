import React from "react";
import ReactDOM from "react-dom";
import Flexbox from "../index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders with required props without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Flexbox>test</Flexbox>, div);
});

test("renders children", () => {
  const { getByText } = render(
    <Flexbox>
      <h1>Hello, World!</h1>
    </Flexbox>
  );
  expect(getByText("Hello, World!")).toBeInTheDocument();
});
