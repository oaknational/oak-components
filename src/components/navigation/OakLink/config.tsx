import { OakUiRoleToken } from "@/styles";
import { OakFontToken, OakTextDecoration } from "@/styles/theme/typography";

export type Variant = "primary" | "secondary";

export type VariantConfig = {
  color: OakUiRoleToken;
  hoverColor: OakUiRoleToken;
  activeColor: OakUiRoleToken;
  disabledColor: OakUiRoleToken;
  visitedColor: OakUiRoleToken;
  font?: OakFontToken;
  textDecoration?: OakTextDecoration;
};

export const variantConfig: Record<Variant, VariantConfig> = {
  primary: {
    color: "text-link-active",
    hoverColor: "text-link-hover",
    activeColor: "text-link-pressed",
    disabledColor: "text-disabled",
    visitedColor: "text-link-visited",
    textDecoration: "underline",
  },
  secondary: {
    color: "text-primary",
    hoverColor: "text-primary",
    activeColor: "text-primary",
    disabledColor: "text-disabled",
    visitedColor: "text-primary",
    textDecoration: "none",
  },
};
