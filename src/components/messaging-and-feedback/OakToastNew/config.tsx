import { OakIconProps } from "@/components/images-and-icons/OakIcon";
import { OakUiBackgroundToken, OakUiTextToken } from "@/styles";

type ToastIconProps = Pick<OakIconProps, "iconName" | "$colorFilter"> & {
  iconBackground?: OakUiBackgroundToken | "transparent";
};

export type VariantConfig = {
  iconProps: ToastIconProps;
  background?: OakUiBackgroundToken;
  color?: OakUiTextToken;
  text?: string;
  role: "alert" | "status";
};

export const variantConfig: Record<
  "informative" | "success" | "error",
  VariantConfig
> = {
  informative: {
    iconProps: {
      iconName: "success",
      iconBackground: "transparent",
    },
    role: "status",
  },
  success: {
    iconProps: {
      iconName: "success",
      iconBackground: "bg-primary",
    },
    background: "bg-success",
    color: "text-inverted",
    text: "Success",
    role: "status",
  },
  error: {
    iconProps: {
      iconName: "warning",
      iconBackground: "transparent",
      $colorFilter: "text-inverted",
    },
    background: "bg-error",
    color: "text-inverted",
    text: "Something went wrong",
    role: "alert",
  },
};

type ColorSchemeConfig = {
  background: OakUiBackgroundToken;
  color: OakUiTextToken;
};

export const colorSchemeConfig: Record<
  "primary" | "inverted",
  ColorSchemeConfig
> = {
  primary: {
    background: "bg-primary",
    color: "text-primary",
  },
  inverted: {
    background: "bg-inverted",
    color: "text-inverted",
  },
};
