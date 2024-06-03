import { OakZIndexToken, oakZIndexTokens } from "@/styles/theme/zIndex";

export const parseZIndex = (value?: OakZIndexToken | number) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (typeof value === "number") {
    return value;
  }
  return oakZIndexTokens[value];
};
