import { OakAllZIndex, oakAllZIndex } from "@/styles/theme/zIndex";

export const parseZIndex = (value?: OakAllZIndex) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  return oakAllZIndex[value];
};
