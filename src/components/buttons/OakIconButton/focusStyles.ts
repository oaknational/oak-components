import { css } from "styled-components";

import { OakBoxProps } from "@/components/layout-and-structure/OakBox";
import { OakUiRoleToken, parseColor } from "@/styles";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";

function isJSDOM() {
  return globalThis?.navigator?.userAgent?.includes("jsdom/");
}

const focusVisibleChildren = `
  a${isJSDOM() ? "" : ":focus-visible"},
  button${isJSDOM() ? "" : ":focus-visible"}
`;

export type OakFocusStyleProps = OakBoxProps & {
  as?: "div" | "li";
  $hoverBackground?: OakUiRoleToken;
  $disabled?: boolean;
};

/**
 * Wrap focusable components `<a/>`/`<button/>` and this will add focus styles then the inner element is focused
 */
export const focusStyles = css<OakFocusStyleProps>`
  ${(props) => {
    let focusStyles = css<OakFocusStyleProps>``;
    if (!props.$disabled) {
      focusStyles = css<OakFocusStyleProps>`
        &:hover: {
          ${responsiveStyle(
            "background-color",
            (props) => props.$hoverBackground,
            (value) => parseColor(value),
          )};
          box-shadow: ${parseDropShadow("drop-shadow-lemon")};
        }

        &:active {
          box-shadow: ${(["drop-shadow-lemon", "drop-shadow-grey"] as const)
            .map((i) => parseDropShadow(i))
            .join(", ")};
        }
      `;
    }
    return css<OakFocusStyleProps>`
      &:focus {
        ${responsiveStyle(
          "border-radius",
          (props) => props.$borderRadius,
          parseBorderRadius,
        )}
        box-shadow: ${(
          ["drop-shadow-centered-lemon", "drop-shadow-centered-grey"] as const
        )
          .map((i) => parseDropShadow(i))
          .join(", ")};

        & ${focusVisibleChildren} {
          outline: none;
        }
      }
      ${focusStyles}
    `;
  }}
`;
