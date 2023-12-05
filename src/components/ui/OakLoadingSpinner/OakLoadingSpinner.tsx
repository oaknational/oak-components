import React from "react";
import styled, { css, keyframes } from "styled-components";

import { OakScreenReader } from "@/components/base/OakScreenReader";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { ColorStyleProps, colorStyle } from "@/styles/utils/colorStyle";

const SpinnerKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export type OakLoadingSpinnerProps = Pick<SizeStyleProps, "$width"> &
  ColorStyleProps;

const StyledLoadingSpinner = styled.span<OakLoadingSpinnerProps>`
  ${(props) =>
    props.$width
      ? responsiveStyle("--width", (props) => props.$width, parseSpacing)
      : css`
          --width: 1.25rem;
        `}
  --inner-width: calc(var(--width) / 10 * 8);
  --thickness: calc(var(--width) / 12);

  position: absolute;
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
    border-color: currentcolor currentcolor currentcolor transparent;
    animation: ${SpinnerKeyframe} 1.2s linear infinite;
  }
  ${colorStyle}
`;

export const OakLoadingSpinner = (props: OakLoadingSpinnerProps) => (
  <StyledLoadingSpinner {...props}>
    <OakScreenReader>Loading</OakScreenReader>
  </StyledLoadingSpinner>
);
