import { DefaultTheme } from "styled-components";
import { UiRoleMap } from "./color";

export type OakTheme = {
  name: string;
  uiColors: UiRoleMap;
};

export type PropsWithTheme<Props = unknown> = Props & { theme: DefaultTheme };
