import styled from "styled-components";

import { OakBox } from "@/components/atoms/OakBox";
import { OakCombinedColorToken, OakDropShadowToken } from "@/styles";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

function isJSDOM() {
  return globalThis?.navigator?.userAgent?.includes("jsdom/");
}

export type OakFocusIndicatorProps = {
  hoverBackground?: OakCombinedColorToken;
  dropShadow?: OakDropShadowToken;
  hoverDropShadow?: OakDropShadowToken;
  activeDropShadow?: OakDropShadowToken;
};

export const OakFocusIndicator = styled(OakBox)<OakFocusIndicatorProps>`
  box-shadow: ${(props) =>
    props.dropShadow ? parseDropShadow(props.dropShadow) : "none"};

  &:has(
      a${isJSDOM() ? "" : ":focus-visible"},
        button${isJSDOM() ? "" : ":focus-visible"}
    ) {
    border-radius: ${(props) => props.$borderRadius ?? "0.25em;"};
    z-index: 2;
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  &:has(a:hover, button:hover),
  &:has(button:hover:not(:active${isJSDOM() ? "" : ", :focus-visible"})) {
    z-index: 1;
    background-color: ${(props) => props.hoverBackground ?? ""};
  }

  &:has(a:hover, button:hover) {
    box-shadow: ${(props) =>
      props.hoverDropShadow ? parseDropShadow(props.hoverDropShadow) : "none"};
  }

  &:has(a:active, button:active) {
    z-index: 2;
    box-shadow: ${(props) =>
      props.activeDropShadow
        ? parseDropShadow(props.activeDropShadow)
        : `${parseDropShadow("drop-shadow-lemon")}, ${parseDropShadow(
            "drop-shadow-grey",
          )};`};
  }
`;
