import { ThemedStyledProps, DefaultTheme } from "styled-components";

import { OakColorTheme } from "./color";

export type OakTheme = {
  name: string;
  uiColors: OakColorTheme;
};

export type PropsWithTheme<Props = unknown> = ThemedStyledProps<
  Props,
  DefaultTheme
>;
