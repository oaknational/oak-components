import React from "react";
import styled from "styled-components";

import { OakIcon, OakIconName } from "../OakIcon";

import {
  InternalButton,
  InternalButtonProps,
  OakFlex,
  OakSpan,
} from "@/components/base";

export type OakMainButtonProps = Omit<
  InternalButtonProps,
  "$pa" | "$borderRadius" | "$ba"
> & {
  iconName?: OakIconName;
  isTrailingIcon?: boolean;
};

const StyledInternalButton = styled(InternalButton)<OakMainButtonProps>`
  &:hover {
    text-decoration: underline;
  }
`;

export const OakMainButton = (props: OakMainButtonProps) => {
  const { children, iconName, isTrailingIcon, ...rest } = props;
  return (
    <StyledInternalButton
      {...rest}
      $pv={"inner-padding-xs"}
      $ph={"inner-padding-s"}
      $ba={"border-solid-m"}
      $borderRadius={"border-radius-s"}
    >
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
