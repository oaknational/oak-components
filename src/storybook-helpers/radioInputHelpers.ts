import { oakColorTokens } from "..";

export const radioInputArgTypes = {
  $inputCheckedColor: {
    options: Object.keys(oakColorTokens),
    control: { type: "select" },
  },
};
