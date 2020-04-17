import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => (
  <Button onClick={action("clicked")}>
    <p style={{ margin: 0, color: "white" }}>Hello Button</p>
  </Button>
);

export const Emojis = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Secondary = () => <Button kind="Secondary">Click me</Button>;

export const Danger = () => <Button kind="Danger">Click me</Button>;

export const Warn = () => <Button kind="Warn">Click me</Button>;

export const Success = () => <Button kind="Success">Click me</Button>;
