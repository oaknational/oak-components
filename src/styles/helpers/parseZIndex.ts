import { OakZIndexToken, oakZIndexTokens } from "@/styles/theme/zIndex";

export const parseZIndex = (value?: OakZIndexToken) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  return oakZIndexTokens[value];
};
