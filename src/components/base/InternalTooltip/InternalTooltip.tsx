import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakFlex, OakFlexProps } from "../OakFlex";

import { OakCombinedColorToken } from "@/styles";
import { parseColor } from "@/styles/helpers/parseColor";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";

export type InternalTooltipProps = OakFlexProps & {
  isOpen: boolean;
  tooltip: ReactNode;
  children?: ReactNode;
};

const StyledFlex = styled(OakFlex)`
  width: max-content;
  pointer-events: none;
`;

type StyledSvgProps = {
  $fill: ColorStyleProps["$background"];
};

const StyledSvg = styled.svg<StyledSvgProps>`
  position: absolute;
  bottom: -16px;
  left: 0;
  ${responsiveStyle<StyledSvgProps, OakCombinedColorToken>(
    "fill",
    (props) => props.$fill,
    parseColor,
  )}
`;

export const InternalTooltip = ({
  isOpen,
  children,
  tooltip,
  $background = "black",
  $font = "heading-light-7",
  $color = "text-inverted",
  $borderRadius,
  ...props
}: InternalTooltipProps) => {
  return (
    <OakFlex $position="relative" $width="fit-content" $height="fit-content">
      {isOpen && (
        <OakFlex
          role="tooltip"
          $position="absolute"
          $top="all-spacing-0"
          $left="all-spacing-0"
          $transform="translateY(calc(-100% - 16px))"
          $zIndex="modal-dialog"
          $flexDirection="column"
        >
          <StyledFlex
            {...props}
            $position="relative"
            $background={$background}
            $color={$color}
            $font={$font}
            $btr={$borderRadius}
            $bbrr={$borderRadius}
            $maxWidth={["all-spacing-20", "all-spacing-22"]}
          >
            {tooltip}
            <StyledSvg width="16" height="16" $fill={$background}>
              <path d="M0 0H16L8 8L0 16V0Z" />
            </StyledSvg>
          </StyledFlex>
        </OakFlex>
      )}
      {children}
    </OakFlex>
  );
};
