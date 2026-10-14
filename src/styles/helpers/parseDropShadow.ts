import { parseColor } from "./parseColor";

import {
  OakDropShadowToken,
  oakDropShadowTokens,
} from "@/styles/theme/dropShadow";
import { PropsWithTheme } from "@/styles/theme/theme";

function parseDropShadow(
  variant?: OakDropShadowToken | null,
): (props: PropsWithTheme) => string;
function parseDropShadow(
  variant?: OakDropShadowToken | null,
): ((props: PropsWithTheme) => string) | undefined;
function parseDropShadow(variant?: OakDropShadowToken | null) {
  if (variant === null) {
    return "none";
  }

  if (!variant) {
    return;
  }

  if (variant in oakDropShadowTokens) {
    const borderCss = oakDropShadowTokens[variant];
    if (borderCss !== "none") {
      const out = (props: PropsWithTheme) => {
        const c = parseColor(variant)(props) ?? "transparent";
        return `${borderCss} ${c}`;
      };
      return out;
    }
    return borderCss;
  }
}

export { parseDropShadow };
