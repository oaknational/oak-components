import React from "react";
import styled, { css } from "styled-components";

import { OakBox, OakFlex, OakSpan } from "@/components/base";
import {
  InternalButton,
  InternalButtonProps,
} from "@/components/base/InternalButton";
import { OakIcon, OakIconName } from "@/components/ui/OakIcon";
import { OakLoadingSpinner } from "@/components/ui/OakLoadingSpinner";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  PositionStyleProps,
  positionStyle,
} from "@/styles/utils/positionStyle";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakCombinedColorToken } from "@/styles";

export type InternalRectButtonProps = Omit<
  InternalButtonProps,
  "$pa" | "$ph" | "$pv" | "$borderRadius"
> & {
  iconName?: OakIconName;
  isTrailingIcon?: boolean;
  defaultTextColor?: OakCombinedColorToken;
  defaultBackground: OakCombinedColorToken;
  hoverBackground: OakCombinedColorToken;
  disabledBackground: OakCombinedColorToken;
  disabledBorderColor: OakCombinedColorToken;
  disabledTextColor: OakCombinedColorToken;
} & PositionStyleProps;

const StyledInternalButton = styled(InternalButton)<InternalRectButtonProps>`
  ${positionStyle}
  ${(props) => css`
    &:hover {
      text-decoration: underline;
      box-shadow: ${parseDropShadow("drop-shadow-yellow")};
      background: ${parseColor(props.hoverBackground)};
    }

    &:focus-visible {
      box-shadow: ${parseDropShadow("drop-shadow-centered-yellow")};
    }
    &:active {
      box-shadow: ${parseDropShadow("drop-shadow-yellow")};
    }
    &:disabled {
      background: ${parseColor(props.disabledBackground)};
      border-color: ${parseColor(props.disabledBorderColor)};
      color: ${parseColor(props.disabledTextColor)};
    }
  `}
`;

const StyledOuterShadow = styled(OakBox)`
  .oak-secondary-button:focus-visible & {
    box-shadow: ${parseDropShadow("drop-shadow-centered-grey")};
  }
  .oak-secondary-button:active & {
    box-shadow: ${parseDropShadow("drop-shadow-grey")};
  }
`;

export const InternalRectButton = (props: InternalRectButtonProps) => {
  const { children, iconName, isTrailingIcon, isLoading, disabled, ...rest } =
    props;

  const icon = (
    <>
      {iconName && (
        <OakIcon
          iconName={iconName}
          $width={"all-spacing-7"}
          $height={"all-spacing-7"}
          $colorFilter={props.disabled ? props.disabledTextColor : undefined}
        />
      )}
    </>
  );

  const loader = (
    <OakBox $width={"all-spacing-7"} $height={"all-spacing-7"}>
      <OakLoadingSpinner $width={"all-spacing-7"} />
    </OakBox>
  );

  const iconLogic = <>{isLoading && !disabled ? loader : icon}</>;

  return (
    <StyledInternalButton
      className="oak-secondary-button"
      {...rest}
      $background={props.defaultBackground}
      $pv={"inner-padding-xs"}
      $ph={"inner-padding-s"}
      $borderRadius={"border-radius-s"}
      $position={"relative"}
      disabled={disabled || isLoading}
    >
      <StyledOuterShadow
        $position={"absolute"}
        $top={"space-between-none"}
        $left={"space-between-none"}
        $width={"100%"}
        $height={"100%"}
        $borderRadius={"border-radius-s"}
        $zIndex={"behind"}
      ></StyledOuterShadow>
      <OakFlex
        $flexDirection={"row"}
        $alignItems={"center"}
        $gap="space-between-ssx"
      >
        {!isTrailingIcon && iconLogic}
        <OakSpan $font={"body-1-bold"}>{children}</OakSpan>
        {isTrailingIcon && iconLogic}
      </OakFlex>
    </StyledInternalButton>
  );
};
