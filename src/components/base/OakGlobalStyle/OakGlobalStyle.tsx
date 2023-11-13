import { createGlobalStyle } from "styled-components";

import { resetGlobalCss } from "@/styles/global/reset.styles";
import { oakGlobalCss } from "@/styles/global/oak.styles";

/**
 *
 * Currently this is just for storybook as it is already applied in OWA
 *
 */

export const OakGlobalStyle = createGlobalStyle`
  ${resetGlobalCss}
  ${oakGlobalCss}
`;
