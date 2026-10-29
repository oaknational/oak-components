import React, { ElementType } from "react";
import styled from "styled-components";

import { focusStyles, OakFocusStyleProps } from "./focusStyles";
import { buildLookup } from "./lookup";

import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { OakIcon } from "@/components/images-and-icons";
import {
  OakBorderWidthToken,
  OakCombinedSpacingToken,
  OakLoadingSpinner,
  OakUiRoleToken,
  parseBorderRadius,
  parseBorderWidth,
  parseColor,
  parseSpacing,
} from "@/index";
import { IconName } from "@/image-map";

type OakIconButtonColorScheme = "primary" | "inverted";
type OakIconButtonSize = "sm" | "md";
type OakIconButtonVariant = "primary" | "secondary";

export type OakIconButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isLoading?: boolean;
  iconName: IconName;
  $colorScheme: OakIconButtonColorScheme;
  $size: OakIconButtonSize;
  $variant: OakIconButtonVariant;
  $disabled?: boolean;
};

const lookupPadding = buildLookup<OakIconButtonProps, OakCombinedSpacingToken>([
  [{ $size: "sm" }, "spacing-8"],
  [{ $size: "md" }, "spacing-12"],
]);

// size
const lookupSize = buildLookup<OakIconButtonProps, OakCombinedSpacingToken>([
  [{ $size: "sm" }, "spacing-20"],
  [{ $size: "md" }, "spacing-24"],
]);

const lookupBackground = buildLookup<OakIconButtonProps, OakUiRoleToken>([
  [{ $variant: "primary", $colorScheme: "primary" }, "bg-btn-primary"],
  [{ $variant: "primary", $colorScheme: "inverted" }, "bg-btn-secondary"],
  [{ $variant: "secondary", $colorScheme: "primary" }, "bg-btn-secondary"],
  [
    { $variant: "primary", $colorScheme: "primary", $disabled: true },
    "bg-btn-primary-disabled",
  ],
  [
    { $variant: "primary", $colorScheme: "inverted", $disabled: true },
    "bg-btn-secondary-disabled",
  ],
  [
    { $variant: "secondary", $colorScheme: "primary", $disabled: true },
    "bg-btn-secondary-disabled",
  ],
]);

const lookupLoadingColor = buildLookup<OakIconButtonProps, OakUiRoleToken>([
  [{ $variant: "primary", $colorScheme: "primary" }, "icon-inverted"],
  [{ $variant: "primary", $colorScheme: "inverted" }, "icon-primary"],
  [{ $variant: "secondary", $colorScheme: "primary" }, "icon-primary"],
  [
    { $variant: "primary", $colorScheme: "primary", $disabled: true },
    "icon-inverted",
  ],
  [
    { $variant: "primary", $colorScheme: "inverted", $disabled: true },
    "icon-disabled",
  ],
  [
    { $variant: "secondary", $colorScheme: "primary", $disabled: true },
    "icon-disabled",
  ],
]);

const lookupTextColor = buildLookup<OakIconButtonProps, OakUiRoleToken>([
  [{ $variant: "primary", $colorScheme: "primary" }, "icon-inverted"],
  [{ $variant: "primary", $colorScheme: "inverted" }, "icon-primary"],
  [{ $variant: "secondary", $colorScheme: "primary" }, "icon-primary"],
  [
    { $variant: "primary", $colorScheme: "primary", $disabled: true },
    "icon-inverted",
  ],
  [
    { $variant: "primary", $colorScheme: "inverted", $disabled: true },
    "icon-disabled",
  ],
  [
    { $variant: "secondary", $colorScheme: "primary", $disabled: true },
    "icon-disabled",
  ],
]);

const lookupHoverBackground = buildLookup<OakIconButtonProps, OakUiRoleToken>([
  [{ $variant: "primary", $colorScheme: "primary" }, "bg-btn-primary-hover"],
  [{ $variant: "primary", $colorScheme: "inverted" }, "bg-btn-secondary-hover"],
  [
    { $variant: "secondary", $colorScheme: "primary" },
    "bg-btn-secondary-hover",
  ],
  [{ $variant: "secondary", $colorScheme: "inverted" }, "bg-btn-primary-hover"],
]);

const lookupBorderWidth = buildLookup<OakIconButtonProps, OakBorderWidthToken>([
  [{ $variant: "primary" }, "border-solid-none"],
  [{ $variant: "secondary" }, "border-solid-m"],
]);

const lookupBorderColor = buildLookup<OakIconButtonProps, OakUiRoleToken>([
  [{ $variant: "secondary" }, "border-primary"],
  [{ $variant: "secondary", $disabled: true }, "border-neutral"],
]);

const Button = styled.button<
  Pick<
    OakIconButtonProps,
    "$colorScheme" | "$size" | "$variant" | "isLoading"
  > &
    OakFocusStyleProps
>`
  outline: none;
  border: none;
  display: flex;
  ${focusStyles}
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
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
    $disabled: props.$disabled || props.isLoading,
    ...props,
  };
}

/**
 *
 * OakIconButton is a button component that displays an icon and can show a loading spinner.
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 */
export const OakIconButton = <C extends ElementType = "button">(
  rawProps: OakIconButtonProps & PolymorphicPropsWithoutRef<C>,
) => {
  const props = defaultProps(rawProps);
  const { iconName, isLoading } = props;
  return (
    <Button $hoverBackground={lookupHoverBackground(props)} {...props}>
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
