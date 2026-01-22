import styled from "styled-components";

import { OakBox } from "@/components/atoms/OakBox";
import { OakDropShadowToken, OakUiRoleToken, parseColor } from "@/styles";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";

function isJSDOM() {
  return globalThis?.navigator?.userAgent?.includes("jsdom/");
}

export type OakFocusIndicatorProps = {
  hoverBackground?: OakUiRoleToken;
  dropShadow?: OakDropShadowToken;
  hoverDropShadow?: OakDropShadowToken;
  activeDropShadow?: OakDropShadowToken;
};

/**
 * Wrap focusable components `<a/>`/`<button/>` and this will add focus styles then the inner element is focused
 */
export const OakFocusIndicator = styled(OakBox)<OakFocusIndicatorProps>`
  box-shadow: ${(props) =>
    props.dropShadow ? parseDropShadow(props.dropShadow) : "none"};

  &:has(
      a${isJSDOM() ? "" : ":focus-visible"},
        button${isJSDOM() ? "" : ":focus-visible"}
    ) {
    ${responsiveStyle(
      "border-radius",
      (props) => props.$borderRadius,
      parseBorderRadius,
    )}
    z-index: 2;
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  &:has(a:hover, button:hover),
  &:has(button:hover:not(:active${isJSDOM() ? "" : ", :focus-visible"})) {
    z-index: 1;
    ${responsiveStyle(
      "background-color",
      (props) => props.hoverBackground,
      parseColor,
    )}
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
