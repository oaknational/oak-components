import React, { ElementType, ReactNode } from "react";
import styled, { css } from "styled-components";

import { InternalShadowRectButtonProps } from "@/components/internal-components/InternalShadowRectButton";
import { OakBox, OakBoxProps } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakSpan } from "@/components/typography/OakSpan";
import { OakSvg } from "@/components/images-and-icons/OakSvg";
import { InternalButton } from "@/components/internal-components/InternalButton";
import { OakIcon } from "@/components/images-and-icons/OakIcon";
import { OakLoadingSpinner } from "@/components/messaging-and-feedback/OakLoadingSpinner";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { positionStyle } from "@/styles/utils/positionStyle";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakCombinedColorToken } from "@/styles";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type OakLeftAlignedButtonProps = Omit<
  InternalShadowRectButtonProps,
  | "defaultBorderColor"
  | "defaultBackground"
  | "defaultTextColor"
  | "hoverBackground"
  | "hoverBorderColor"
  | "hoverTextColor"
  | "disabledBackground"
  | "disabledBorderColor"
  | "disabledTextColor"
> & {
  /**
   * Whether to align the icon to the right with space-between justification
   */
  rightAlignIcon?: boolean;
};

const StyledInternalButton = styled(InternalButton)<
  SizeStyleProps & {
    $defaultTextColor: OakCombinedColorToken;
    $defaultBackground: OakCombinedColorToken;
    $defaultBorderColor: OakCombinedColorToken;
    $hoverTextColor: OakCombinedColorToken;
    $hoverBackground: OakCombinedColorToken;
    $hoverBorderColor: OakCombinedColorToken;
    $disabledBackground: OakCombinedColorToken;
    $disabledBorderColor: OakCombinedColorToken;
    $disabledTextColor: OakCombinedColorToken;
  }
>`
  ${positionStyle}
  ${sizeStyle}
  display: inline-block;
  ${(props) => css`
    &:hover {
      color: ${parseColor(props.$hoverTextColor)};
      background: ${parseColor(props.$hoverBackground)};
      border-color: ${parseColor(props.$hoverBorderColor)};
      [data-state="selected"] {
        display: none;
      }
    }
    &:active {
      background: ${parseColor(props.$defaultBackground)};
      border-color: ${parseColor(props.$defaultBorderColor)};
      color: ${parseColor(props.$defaultTextColor)};
      [data-state="selected"] {
        display: none;
      }
    }
    &:disabled {
      background: ${parseColor(props.$disabledBackground)};
      border-color: ${parseColor(props.$disabledBorderColor)};
      color: ${parseColor(props.$disabledTextColor)};
      [data-state="selected"] {
        display: none;
      }
    }
  `}
`;

const StyledOakSvg = styled(OakSvg)`
  bottom: -3px;
  left: 0px;
  position: absolute;
  height: 5px;
  color: ${parseColor("border-decorative1")};
`;

const StyledButtonWrapper = styled(OakBox)<OakBoxProps>`
  .grey-shadow:has(+ * + .internal-button:focus-visible) {
    box-shadow: ${parseDropShadow("drop-shadow-centered-grey")};
  }
  .yellow-shadow:has(+ .internal-button:focus-visible) {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")};
  }
  .yellow-shadow:has(+ .internal-button:hover),
  .grey-shadow:has(+ * + .internal-button:hover) {
    box-shadow: none;
  }
  .grey-shadow:has(+ * + .internal-button:active) {
    box-shadow: ${parseDropShadow("drop-shadow-grey")};
  }
`;

/**
 * A left-aligned button styled similarly to OakSmallPrimaryInvertedButton
 * with configurable icon alignment.
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 * `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`
 * called after a mouseEnter and mouseLeave event has happened
 */
export const OakLeftAlignedButton = <C extends ElementType = "button">(
  props: OakLeftAlignedButtonProps & PolymorphicPropsWithoutRef<C>,
) => {
  const {
    element = "button",
    children,
    iconName,
    isTrailingIcon,
    isLoading,
    disabled,
    width = "max-content",
    height = "auto",
    maxWidth,
    innerWidth,
    className,
    selected,
    rightAlignIcon = false,
    ...rest
  } = props;

  const icon = iconName && (
    <OakIcon
      iconName={iconName}
      $width={"spacing-24"}
      $height={"spacing-24"}
      $colorFilter={disabled ? "text-disabled" : "text-primary"}
    />
  );

  const loader = (
    <OakBox $width={"spacing-20"} $height={"spacing-20"}>
      <OakLoadingSpinner $width={"spacing-20"} />
    </OakBox>
  );

  const iconLogic = isLoading && !disabled ? loader : icon;

  // If the icon should be rightAligned, it must be trailing
  const shouldTrailIcon = isTrailingIcon || rightAlignIcon;
  return (
    <StyledButtonWrapper
      className={className}
      $position={"relative"}
      $width={width}
      $height={height}
      $maxWidth={maxWidth}
    >
      <OakBox
        className="grey-shadow"
        $position={"absolute"}
        $borderRadius={"border-radius-s"}
        $width={"100%"}
        $height={"100%"}
        $top="spacing-0"
      />
      <OakBox
        className="yellow-shadow"
        $position={"absolute"}
        $borderRadius={"border-radius-s"}
        $width={"100%"}
        $height={"100%"}
        $top="spacing-0"
      />
      <StyledInternalButton
        element={element}
        className="internal-button"
        $ba={"border-solid-m"}
        $background={"bg-btn-secondary"}
        $borderColor={"bg-btn-secondary"}
        $color={"text-primary"}
        $pv={"spacing-4"}
        $ph={"spacing-8"}
        $borderRadius={"border-radius-s"}
        $position={"relative"}
        disabled={disabled || isLoading}
        $width={"100%"}
        $height={"100%"}
        $hoverTextColor={"text-primary"}
        $hoverBackground={"bg-btn-secondary-hover"}
        $hoverBorderColor={"bg-btn-secondary-hover"}
        $defaultTextColor={"text-primary"}
        $defaultBackground={"bg-btn-secondary"}
        $defaultBorderColor={"bg-btn-secondary"}
        $disabledTextColor={"text-disabled"}
        $disabledBackground={"bg-btn-secondary"}
        $disabledBorderColor={"bg-btn-secondary"}
        {...rest}
      >
        <OakFlex
          data-testid={"left-aligned-btn-flex-container"}
          $flexDirection={"row"}
          $alignItems={"center"}
          $gap={"spacing-8"}
          $justifyContent={rightAlignIcon ? "space-between" : "start"}
          $width={innerWidth}
        >
          {!shouldTrailIcon && iconLogic}
          {selected ? (
            <TextWithUnderline>{children}</TextWithUnderline>
          ) : (
            <OakSpan $font={"body-3-bold"} $textAlign={"left"}>
              {children}
            </OakSpan>
          )}
          {shouldTrailIcon && iconLogic}
        </OakFlex>
      </StyledInternalButton>
    </StyledButtonWrapper>
  );
};

const TextWithUnderline = ({ children }: { children: ReactNode }) => (
  <OakBox $position={"relative"} $textAlign={"left"}>
    <OakSpan $font={"body-3-bold"}>{children}</OakSpan>
    <StyledOakSvg
      name="underline"
      data-state="selected"
      data-testid="selected-underline"
    />
  </OakBox>
);
