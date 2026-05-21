import { OakUiRoleToken } from "@/styles";
import { OakTextDecoration } from "@/styles/theme/typography";

export type Variant = "primary" | "secondary";

export type VariantConfig = {
  color: OakUiRoleToken;
  hoverColor: OakUiRoleToken;
  activeColor: OakUiRoleToken;
  visitedColor: OakUiRoleToken;
  textDecoration?: OakTextDecoration;
};

export const variantConfig: Record<Variant, VariantConfig> = {
  primary: {
    color: "text-link-active",
    hoverColor: "text-link-hover",
    activeColor: "text-link-pressed",
    visitedColor: "text-link-visited",
    textDecoration: "underline",
  },
  secondary: {
    color: "text-primary",
    hoverColor: "text-primary",
    activeColor: "text-primary",
    visitedColor: "text-primary",
    textDecoration: "none",
  },
};
