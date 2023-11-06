import { css } from "styled-components";

import { OakAllTransitions } from "../theme/transitions";
import { parseTransitions } from "../helpers/parseTransitions";

import { ResponsiveValues, responsiveStyle } from "./responsiveStyle";

type Transition = OakAllTransitions;
type TransitionProps = {
  $transition?: ResponsiveValues<Transition>;
};

export const transitionStyle = css<TransitionProps>`
  ${responsiveStyle(
    "transition",
    (props) => props.$transition,
    parseTransitions,
  )}
`;
