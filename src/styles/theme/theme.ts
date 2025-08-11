import { ExecutionContext } from "styled-components";

import { UiRoleMap } from "./color";

export type ThemedStyledProps<P> = P & ExecutionContext;
export type StyledProps<P> = P & ExecutionContext;

export type OakTheme = {
  name: string;
  uiColors: UiRoleMap;
};

export type PropsWithTheme<Props = unknown> = ThemedStyledProps<Props>;
