import React from "react";
import Flexbox from "../components/common/Flexbox";

export default {
  title: "Flexbox",
  component: Flexbox,
};

export const Default = () => (
  <Flexbox style={{ background: "aliceblue", height: "4rem" }}>
    Hello Flexbox
  </Flexbox>
);

export const DefaultWithTwoChildren = () => (
  <Flexbox style={{ background: "aliceblue", height: "4rem" }}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    <span role="img" aria-label="so cool">
      🇰🇷 🇫🇯 🇨🇺 🇬🇷
    </span>
  </Flexbox>
);

export const AlignItemsFlexStart = () => (
  <Flexbox
    alignItems="flex-start"
    style={{ background: "aliceblue", height: "4rem" }}
  >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Flexbox>
);

export const JustifyContentFlexStart = () => (
  <Flexbox
    justifyContent="flex-start"
    style={{ background: "aliceblue", height: "4rem" }}
  >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Flexbox>
);

export const FlexEndForBoth = () => (
  <Flexbox
    justifyContent="flex-end"
    alignItems="flex-end"
    style={{ background: "aliceblue", height: "4rem" }}
  >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    <span role="img" aria-label="so cool">
      🇰🇷 🇫🇯 🇨🇺 🇬🇷
    </span>
  </Flexbox>
);

export const SpaceBetween = () => (
  <Flexbox
    justifyContent="space-between"
    style={{ background: "aliceblue", height: "4rem" }}
  >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    <span role="img" aria-label="so cool">
      🇰🇷 🇫🇯 🇨🇺 🇬🇷
    </span>
  </Flexbox>
);

export const DirectionColumn = () => (
  <Flexbox
    flexDirection="column"
    // justifyContent="space-between"
    style={{ background: "aliceblue", height: "4rem" }}
  >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    <span role="img" aria-label="so cool">
      🇰🇷 🇫🇯 🇨🇺 🇬🇷
    </span>
  </Flexbox>
);
