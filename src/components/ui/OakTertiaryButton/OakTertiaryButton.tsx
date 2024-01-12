import React, { ReactNode } from "react";
import { ImageProps } from "next/image";
import styled from "styled-components";

import { OakRoundIcon, OakRoundIconProps } from "../OakRoundIcon";

import { OakFlex, OakIconName, OakSpan } from "@/components/base";
import {
  InternalButton,
  InternalButtonProps,
} from "@/components/base/InternalButton";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

type BaseTertiaryButtonProps = InternalButtonProps & {
  iconBackground?: OakRoundIconProps["$background"];
  iconColorFilter?: OakRoundIconProps["$colorFilter"];
  isTrailingIcon?: boolean;
};

type TertiaryButtonProps = BaseTertiaryButtonProps & {
  iconName?: undefined;
  iconSrc?: undefined;
};

type TertiaryButtonWithIconNameProps = BaseTertiaryButtonProps & {
  iconName: OakIconName;
  iconSrc?: undefined;
};

type TertiaryButtonWithIconSrcProps = BaseTertiaryButtonProps & {
  iconSrc: ImageProps["src"];
  iconName?: undefined;
};

export type OakTertiaryButtonProps =
  | TertiaryButtonProps
  | TertiaryButtonWithIconNameProps
  | TertiaryButtonWithIconSrcProps;

const StyledInternalButton = styled(InternalButton)`
  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-yellow")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
`;

/**
 * A subtle button with no border and an optional rounded icon.
 * Supports either an icon name or an image src
 */
export const OakTertiaryButton = ({
  iconBackground,
  iconColorFilter,
  isTrailingIcon,
  iconName,
  iconSrc,
  children,
  disabled,
  ...props
}: OakTertiaryButtonProps) => {
  const iconProps = {
    alt: "",
    $background: iconBackground,
    $colorFilter: iconColorFilter,
  };

  let icon: ReactNode = null;
  if (iconName) {
    icon = <OakRoundIcon iconName={iconName} {...iconProps} />;
  }
  if (iconSrc) {
    icon = (
      <OakRoundIcon
        src={iconSrc}
        {...iconProps}
        $width={["all-spacing-8", "all-spacing-9"]}
        $height={["all-spacing-8", "all-spacing-9"]}
      />
    );
  }

  return (
    <StyledInternalButton
      {...props}
      disabled={disabled}
      $borderRadius="border-radius-s"
    >
      <OakFlex
        $flexDirection="row"
        $alignItems="center"
        $gap="space-between-ssx"
        $height="all-spacing-9"
      >
        {!isTrailingIcon && icon}
        <OakSpan
          $font="heading-7"
          $color={disabled ? "text-disabled" : "text-primary"}
        >
          {children}
        </OakSpan>
        {isTrailingIcon && icon}
      </OakFlex>
    </StyledInternalButton>
  );
};
