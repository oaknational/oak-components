import React, { HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakFlex, OakFlexProps } from "@/components/atoms/OakFlex";
import { OakUiRoleToken } from "@/styles";
import { parseColor } from "@/styles/helpers/parseColor";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

export type InternalTooltipProps = OakFlexProps &
  HTMLAttributes<Element> & {
    children?: ReactNode;
    tooltipPosition?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  };

const StyledFlex = styled(OakFlex)`
  width: max-content;
  pointer-events: none;
`;

type StyledSvgProps = {
  $fill: ColorStyleProps["$background"];
  $tooltipPosition?: InternalTooltipProps["tooltipPosition"];
};

const ARROW_SIZE = parseSpacing("spacing-16");

const StyledSvg = styled.svg<StyledSvgProps>`
  position: absolute;
  ${({ $tooltipPosition }) => {
    switch ($tooltipPosition) {
      case "bottom-right":
        return css`
          top: -${ARROW_SIZE};
          right: ${parseSpacing("spacing-0")};
          transform: scale(-1, -1);
        `;
      case "top-right":
        return css`
          bottom: -${ARROW_SIZE};
          right: ${parseSpacing("spacing-0")};
          transform: scaleX(-1);
        `;
      case "top-left":
        return css`
          bottom: -${ARROW_SIZE};
          left: ${parseSpacing("spacing-0")};
        `;
      default:
        return css`
          top: -${ARROW_SIZE};
          left: ${parseSpacing("spacing-0")};
          transform: scaleY(-1);
        `;
    }
  }}
  ${responsiveStyle<StyledSvgProps, OakUiRoleToken>(
    "fill",
    (props) => props.$fill,
    parseColor,
  )}
`;

/**
 * A primitive tooltip to be used as a basis for more opinionated UI components.
 */
export const InternalTooltip = ({
  children,
  $background = "bg-inverted",
  $color = "text-inverted",
  tooltipPosition = "bottom-left",
  ...props
}: InternalTooltipProps) => {
  return (
    <StyledFlex
      role="tooltip"
      data-rac
      $position="relative"
      $background={$background}
      $color={$color}
      $maxWidth={["spacing-360", "spacing-640"]}
      {...props}
    >
      {children}
      <StyledSvg
        width={ARROW_SIZE}
        height={ARROW_SIZE}
        $fill={$background}
        $tooltipPosition={tooltipPosition}
        data-testid="tooltip-arrow"
      >
        <path d="M0 0H16L8 8L0 16V0Z" />
      </StyledSvg>
    </StyledFlex>
  );
};
