import React from "react";
import styled, { css, keyframes } from "styled-components";

import { OakScreenReader } from "@/components/atoms/OakScreenReader";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseColor } from "@/styles/helpers/parseColor";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { ColorStyleProps, colorStyle } from "@/styles/utils/colorStyle";
import { OakUiRoleToken } from "@/styles";

const SpinnerKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const DelayedShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export type OakLoadingSpinnerProps = Pick<SizeStyleProps, "$width"> &
  ColorStyleProps & {
    loaderColor?: OakUiRoleToken;
    /**
     * Delay the appearance of the spinner
     *
     * Accepts a number in milliseconds
     */
    $delay?: number;
  };

const StyledLoadingSpinner = styled.span<OakLoadingSpinnerProps>`
  ${(props) =>
    props.$width
      ? responsiveStyle("--width", (props) => props.$width, parseSpacing)
      : css`
          --width: 1.25rem;
        `}
  ${({ $delay }) => {
    if ($delay) {
      return css`
        opacity: 0;
        animation: ${DelayedShow} 0s;
        animation-delay: ${$delay / 1000}s;
        animation-fill-mode: forwards;
      `;
    }
  }}
  --inner-width: calc(var(--width) / 10 * 8);
  --thickness: calc(var(--width) / 12);

  display: inline-flex;
  width: var(--width);
  height: var(--width);

  ::after {
    content: " ";
    display: block;
    width: var(--inner-width);
    height: var(--inner-width);
    margin: var(--thickness);
    border-radius: 50%;
    border: var(--thickness) solid currentcolor;
    ${(props) =>
      props.loaderColor
        ? css`
            border-color: ${parseColor(props.loaderColor)}
              ${parseColor(props.loaderColor)} ${parseColor(props.loaderColor)}
              transparent;
          `
        : css`
            border-color: currentcolor currentcolor currentcolor transparent;
          `}
    animation: ${SpinnerKeyframe} 1.2s linear infinite;
  }
  ${colorStyle}
`;

/**
 *
 * A loading spinner of variable size.
 *
 */
export const OakLoadingSpinner = (props: OakLoadingSpinnerProps) => (
  <StyledLoadingSpinner {...props}>
    <OakScreenReader>Loading</OakScreenReader>
  </StyledLoadingSpinner>
);
