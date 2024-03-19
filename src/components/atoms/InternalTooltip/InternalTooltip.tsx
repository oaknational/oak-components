import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakFlex, OakFlexProps } from "../OakFlex";

import { OakCombinedColorToken } from "@/styles";
import { parseColor } from "@/styles/helpers/parseColor";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

export type InternalTooltipProps = OakFlexProps & {
  isOpen: boolean;
  tooltip: ReactNode;
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

const StyledSvg = styled.svg<StyledSvgProps>`
  position: absolute;
  ${({ $tooltipPosition }) => {
    switch ($tooltipPosition) {
      case "bottom-right":
        return css`
          top: -${parseSpacing("space-between-s")};
          right: ${parseSpacing("space-between-none")};
          transform: scale(-1, -1);
        `;
      case "top-right":
        return css`
          bottom: -${parseSpacing("space-between-s")};
          right: ${parseSpacing("space-between-none")};
          transform: scaleX(-1);
        `;
      case "top-left":
        return css`
          bottom: -${parseSpacing("space-between-s")};
          left: ${parseSpacing("space-between-none")};
        `;
      default:
        return css`
          top: -${parseSpacing("space-between-s")};
          left: ${parseSpacing("space-between-none")};
          transform: scaleY(-1);
        `;
    }
  }}
  ${responsiveStyle<StyledSvgProps, OakCombinedColorToken>(
    "fill",
    (props) => props.$fill,
    parseColor,
  )}
`;

/**
 * A primitive tooltip to be used as a basis for more opinionated UI components.
 */
export const InternalTooltip = ({
  isOpen,
  children,
  tooltip,
  $background = "black",
  $color = "text-inverted",
  tooltipPosition = "bottom-left",
  ...props
}: InternalTooltipProps) => {
  const positionProps = (() => {
    const props: Partial<OakFlexProps> = {};

    switch (tooltipPosition) {
      case "top-left":
      case "top-right":
        props.$top = "space-between-none";
        props.$transform = `translateY(calc(-100% - ${parseSpacing(
          "space-between-s",
        )}))`;
        break;
      default:
        props.$bottom = "space-between-none";
        props.$transform = `translateY(calc(100% + ${parseSpacing(
          "space-between-s",
        )}))`;
        break;
    }

    switch (tooltipPosition) {
      case "top-left":
      case "bottom-left":
        props.$left = "space-between-none";
        break;
      default:
        props.$right = "space-between-none";
        break;
    }

    return props;
  })();

  return (
    <OakFlex $position="relative" $width="fit-content" $height="fit-content">
      {isOpen && (
        <OakFlex
          role="tooltip"
          $position="absolute"
          {...positionProps}
          $zIndex="modal-dialog"
          $flexDirection="column"
        >
          <StyledFlex
            {...props}
            $position="relative"
            $background={$background}
            $color={$color}
            $maxWidth={["all-spacing-20", "all-spacing-22"]}
          >
            {tooltip}
            <StyledSvg
              width="16"
              height="16"
              $fill={$background}
              $tooltipPosition={tooltipPosition}
            >
              <path d="M0 0H16L8 8L0 16V0Z" />
            </StyledSvg>
          </StyledFlex>
        </OakFlex>
      )}
      {children}
    </OakFlex>
  );
};
