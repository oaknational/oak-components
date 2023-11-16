import React from "react";
import styled from "styled-components";

import { OakIcon, OakIconName } from "@/components/ui/OakIcon";
import {
  InternalButton,
  InternalButtonProps,
  OakBox,
  OakFlex,
  OakSpan,
} from "@/components/base";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  PositionStyleProps,
  positionStyle,
} from "@/styles/utils/positionStyle";
import { parseColor } from "@/styles/helpers/parseColor";

export type OakSecondaryButtonProps = Omit<
  InternalButtonProps,
  "$pa" | "$ph" | "$pv" | "$borderRadius" | "$ba"
> & {
  iconName?: OakIconName;
  isTrailingIcon?: boolean;
} & PositionStyleProps;

const StyledInternalButton = styled(InternalButton)<OakSecondaryButtonProps>`
  &:hover {
    text-decoration: underline;
    box-shadow: ${parseDropShadow("drop-shadow-yellow")};
    background: ${parseColor("bg-btn-secondary-hover")};
  }
  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-yellow")};
  }
  &:active {
    box-shadow: ${parseDropShadow("drop-shadow-yellow")};
  }
  &:disabled {
    background: ${parseColor("bg-btn-secondary-disabled")};
    border-color: ${parseColor("border-neutral")};
    color: ${parseColor("text-disabled")};
  }
  ${positionStyle}
`;

const StyledOuterShadow = styled(OakBox)`
  .oak-secondary-button:focus-visible & {
    box-shadow: ${parseDropShadow("drop-shadow-centered-grey")};
  }
  .oak-secondary-button:active & {
    box-shadow: ${parseDropShadow("drop-shadow-grey")};
  }
`;

export const OakSecondaryButton = (props: OakSecondaryButtonProps) => {
  const { children, iconName, isTrailingIcon, ...rest } = props;

  return (
    <StyledInternalButton
      className="oak-secondary-button"
      {...rest}
      $background={"bg-btn-secondary"}
      $pv={"inner-padding-xs"}
      $ph={"inner-padding-s"}
      $ba={"border-solid-m"}
      $borderRadius={"border-radius-s"}
      $position={"relative"}
      disabled={props.disabled}
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
        {iconName && !isTrailingIcon && (
          <OakIcon
            iconName={iconName}
            $width={"all-spacing-7"}
            $height={"all-spacing-7"}
          />
        )}
        <OakSpan $font={"body-1-bold"}>{children}</OakSpan>
        {iconName && isTrailingIcon && (
          <OakIcon
            iconName={iconName}
            $width={"all-spacing-7"}
            $height={"all-spacing-7"}
          />
        )}
      </OakFlex>
    </StyledInternalButton>
  );
};
