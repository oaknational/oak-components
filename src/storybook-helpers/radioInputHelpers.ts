import { oakColorTokens } from "..";

export const radioInputArgTypes = {
  $inputCheckedColor: {
    options: Object.keys(oakColorTokens),
    control: { type: "select" },
  },
  $inputFocusColor: {
    options: Object.keys(oakColorTokens),
    control: { type: "select" },
  },
};
