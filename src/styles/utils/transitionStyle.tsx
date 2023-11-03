import { css } from "styled-components";

import { ResponsiveValues, responsiveStyle } from "./responsiveStyle";

type PropertyName = "all";
type Duration = "0.1s" | "0.3s" | "0.4s" | "0.5s" | "0.8s";
type Easing =
  | "ease"
  | "ease-in-out"
  | "ease-out"
  | "cubic-bezier(0.34, 1.56, 0.64, 1)";

type Transition = `${PropertyName} ${Duration} ${Easing}`;
type TransitionProps = {
  $transition?: ResponsiveValues<Transition>;
};

export const transitionStyle = css<TransitionProps>`
  ${responsiveStyle("transition", (props) => props.$transition)}
`;
