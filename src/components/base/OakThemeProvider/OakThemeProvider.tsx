import React from "react";
import { ThemeProvider } from "styled-components";

import { OakTheme } from "@/styles";

export type OakThemeProviderProps = {
  theme: OakTheme;
  children: React.ReactNode;
};

export const OakThemeProvider = ({
  theme,
  children,
}: OakThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
