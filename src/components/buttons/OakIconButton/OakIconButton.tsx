import React, { ElementType } from "react";
import styled from "styled-components";

import {
  lookupBackground,
  lookupBorderColor,
  lookupBorderWidth,
  lookupHoverBackground,
  lookupLoadingColor,
  lookupPadding,
  lookupSize,
  lookupTextColor,
} from "./variant.config";

import { focusStyles, OakFocusStyleProps } from "@/utils/focusStyles";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { OakIcon } from "@/components/images-and-icons";
import {
  OakLoadingSpinner,
  parseBorderRadius,
  parseBorderWidth,
  parseColor,
  parseSpacing,
} from "@/index";
import { IconName } from "@/image-map";

type OakIconButtonColorScheme = "primary" | "inverted";
type OakIconButtonSize = "sm" | "md";
type OakIconButtonType = "primary" | "secondary";

export type OakIconButtonProps = {
  "aria-label": string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isLoading?: boolean;
  iconName: IconName;
  $colorScheme: OakIconButtonColorScheme;
  $size: OakIconButtonSize;
  $type: OakIconButtonType;
  disabled?: boolean;
};

const Button = styled.button<
  Pick<OakIconButtonProps, "$colorScheme" | "$size" | "$type" | "isLoading"> &
    OakFocusStyleProps
>`
  outline: none;
  border: none;
  display: flex;
  ${focusStyles}
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background: ${(props) => parseColor(lookupBackground(props))};
  padding: ${(props) => parseSpacing(lookupPadding(props))};
  border-radius: ${parseBorderRadius("border-radius-circle")};
  border-style: solid;
  border-color: ${(props) => parseColor(lookupBorderColor(props))};
  border-width: ${(props) => parseBorderWidth(lookupBorderWidth(props))};
`;

function defaultProps(props: OakIconButtonProps) {
  return {
    // loading assumes the button is disabled
    disabled: props.disabled || props.isLoading,
    ...props,
  };
}

/**
 *
 * Icon Buttons allow users to take actions, navigate, and make choices, with a single tap.
 */
export const OakIconButton = <C extends ElementType = "button">(
  rawProps: OakIconButtonProps & PolymorphicPropsWithoutRef<C>,
) => {
  const props = defaultProps(rawProps);
  const { iconName, isLoading, ...rest } = props;
  return (
    <Button $hoverBackground={lookupHoverBackground(props)} {...rest}>
      {isLoading && (
        <OakLoadingSpinner
          $width={lookupSize(props)}
          loaderColor={lookupLoadingColor(props)}
        />
      )}
      {!isLoading && (
        <OakIcon
          $width={lookupSize(props)}
          $height={lookupSize(props)}
          $colorFilter={lookupTextColor(props)}
          iconName={iconName}
        />
      )}
    </Button>
  );
};
