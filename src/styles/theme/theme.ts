import { ThemedStyledProps, DefaultTheme } from "styled-components";

import { UiRoleMap } from "./color";

export type OakTheme = {
  name: string;
  uiColors: UiRoleMap;
};

export type PropsWithTheme<Props = unknown> = ThemedStyledProps<
  Props,
  DefaultTheme
>;
