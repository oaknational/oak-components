import React, { ElementType } from "react";
import styled from "styled-components";

import {
  lookupButtonBackground,
  lookupButtonBorderColor,
  lookupButtonBorderWidth,
  lookupButtonHoverBackground,
  lookupIconLoadingColor,
  lookupButtonPadding,
  lookupIconSize,
  lookupIconColor,
} from "./variant.config";

import { focusStyles, OakFocusStyleProps } from "@/utils/focusStyles";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { OakIcon } from "@/components/images-and-icons";
import { OakLoadingSpinner } from "@/components/messaging-and-feedback/OakLoadingSpinner";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseBorderWidth } from "@/styles/helpers/parseBorderWidth";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
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
  background: ${(props) => parseColor(lookupButtonBackground(props))};
  padding: ${(props) => parseSpacing(lookupButtonPadding(props))};
  border-radius: ${parseBorderRadius("border-radius-circle")};
  border-style: solid;
  border-color: ${(props) => parseColor(lookupButtonBorderColor(props))};
  border-width: ${(props) => parseBorderWidth(lookupButtonBorderWidth(props))};
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
    <Button $hoverBackground={lookupButtonHoverBackground(props)} {...rest}>
      {isLoading && (
        <OakLoadingSpinner
          $width={lookupIconSize(props)}
          loaderColor={lookupIconLoadingColor(props)}
        />
      )}
      {!isLoading && (
        <OakIcon
          $width={lookupIconSize(props)}
          $height={lookupIconSize(props)}
          $colorFilter={lookupIconColor(props)}
          iconName={iconName}
        />
      )}
    </Button>
  );
};
