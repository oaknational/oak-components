import { css } from "styled-components";

import { OakTransitionToken } from "@/styles/theme/transitions";
import { parseTransitions } from "@/styles/helpers/parseTransitions";
import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

type Transition = OakTransitionToken;

export type TransitionStyleProps = {
  $transition?: ResponsiveValues<Transition>;
};

export const transitionStyle = css<TransitionStyleProps>`
  ${responsiveStyle(
    "transition",
    (props) => props.$transition,
    parseTransitions,
  )}
`;
