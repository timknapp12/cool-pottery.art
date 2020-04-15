import React from "react";
import Button from ".";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders with required props without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button>test</Button>, div);
});

test("renders children", () => {
  const { getByText } = render(
    <Button>
      <h1>Hello, World!</h1>
    </Button>
  );
  expect(getByText("Hello, World!")).toBeInTheDocument();
});
