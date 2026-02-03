import styled from "styled-components";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakDropShadowToken, OakUiRoleToken, parseColor } from "@/styles";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";

function isJSDOM() {
  return globalThis?.navigator?.userAgent?.includes("jsdom/");
}

const activeChildren = `a:active, button:active`;
const hoverChildren = `a:hover, button:hover`;
const focusVisibleChildren = `
  a${isJSDOM() ? "" : ":focus-visible"},
  button${isJSDOM() ? "" : ":focus-visible"}
`;

const focusShadow = `${parseDropShadow(
  "drop-shadow-centered-lemon",
)}, ${parseDropShadow("drop-shadow-centered-grey")}`;
const fallbackActiveShadow = `${parseDropShadow(
  "drop-shadow-lemon",
)}, ${parseDropShadow("drop-shadow-grey")}`;

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

  &:has(${hoverChildren}) {
    ${responsiveStyle(
      "background-color",
      (props) => props.hoverBackground,
      parseColor,
    )}
    box-shadow: ${(props) =>
      props.hoverDropShadow ? parseDropShadow(props.hoverDropShadow) : "none"};
  }

  &:has(${focusVisibleChildren}) {
    ${responsiveStyle(
      "border-radius",
      (props) => props.$borderRadius,
      parseBorderRadius,
    )}
    box-shadow: ${focusShadow};

    & ${focusVisibleChildren} {
      outline: none;
    }
  }

  &:has(${activeChildren}) {
    box-shadow: ${(props) =>
      props.activeDropShadow
        ? parseDropShadow(props.activeDropShadow)
        : fallbackActiveShadow};
  }
`;
