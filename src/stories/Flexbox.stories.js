import React from "react";
import Flexbox from "../components/Flexbox";
import {
  mainBlue,
  lightBlue,
  middleBlue,
  warn,
  danger,
  success,
  black,
} from "../components/colors";

export default {
  title: "Flexbox",
  component: Flexbox,
};

export const Default = () => (
  <Flexbox style={{ background: mainBlue }}>Hello Flexbox</Flexbox>
);

export const AddHeight = () => (
  <Flexbox height="4rem" style={{ background: lightBlue }}>
    Hello Flexbox
  </Flexbox>
);

export const AddWidth = () => (
  <Flexbox width="70%" style={{ background: middleBlue }}>
    Hello Flexbox
  </Flexbox>
);

export const DefaultWithTwoChildren = () => (
  <Flexbox height="4rem" style={{ background: warn }}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    <span role="img" aria-label="so cool">
      🇰🇷 🇫🇯 🇨🇺 🇬🇷
    </span>
  </Flexbox>
);

export const AlignItemsFlexStart = () => (
  <Flexbox height="4rem" alignItems="flex-start" style={{ background: danger }}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Flexbox>
);

export const JustifyContentFlexStart = () => (
  <Flexbox
    height="4rem"
    justifyContent="flex-start"
    style={{ background: success }}
  >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Flexbox>
);

export const FlexEndForBoth = () => (
  <Flexbox
    height="4rem"
    justifyContent="flex-end"
    alignItems="flex-end"
    style={{ background: black }}
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
    height="4rem"
    justifyContent="space-between"
    style={{ background: lightBlue }}
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
    height="4rem"
    flexDirection="column"
    style={{ background: lightBlue }}
  >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    <span role="img" aria-label="so cool">
      🇰🇷 🇫🇯 🇨🇺 🇬🇷
    </span>
  </Flexbox>
);
