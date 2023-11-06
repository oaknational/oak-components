import { css } from "styled-components";

import { OakAllTransitions } from "@/styles/theme/transitions";
import { parseTransitions } from "@/styles/helpers/parseTransitions";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

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
