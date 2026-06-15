import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/internal-components/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { OakIcon, OakIconName } from "@/components/images-and-icons/OakIcon";
import { OakUiRoleToken } from "@/styles";

export type OakSubjectIconButtonProps = {
  colorScheme: "primary" | "secondary" | "non-curriculum";
  subjectIconName: OakIconName;
  orientation: "vertical" | "horizontal";
  isSelected?: boolean;
} & Omit<
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
  | "pv"
  | "ph"
  | "font"
>;

/**
 *
 * OakSubjectIconButton is a component that allows users to select a subject.
 *
 * Changes colour according to the colorScheme prop. Can be used as a link or a button.
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */

export const OakSubjectIconButton = <C extends ElementType = "button">({
  colorScheme,
  element,
  subjectIconName,
  orientation,
  isSelected,
  ...props
}: OakSubjectIconButtonProps & PolymorphicPropsWithoutRef<C>) => {
  const backgroundColourLevel = getBackgroundColourLevel(colorScheme);
  const defaultBackground: OakUiRoleToken = `bg-decorative${backgroundColourLevel}-${
    isSelected ? "subdued" : "very-subdued"
  }`;
  const hoverBackground: OakUiRoleToken = `bg-decorative${backgroundColourLevel}-main`;
  const borderColor: OakUiRoleToken = `border-decorative${backgroundColourLevel}-stronger`;
  const horizontalVariantBorderWidth = isSelected
    ? "border-solid-xl"
    : "border-solid-s";

  const isVerticalVariant = orientation === "vertical";

  const iconOverride = (
    <OakIcon
      iconName={subjectIconName}
      data-testid={subjectIconName}
      $minWidth={isVerticalVariant ? "spacing-72" : "spacing-40"}
      $minHeight={isVerticalVariant ? "spacing-72" : "spacing-40"}
      aria-hidden="true"
    />
  );

  return (
    <InternalShadowRectButton
      element={element ?? "button"}
      iconOverride={iconOverride}
      iconLayout={isVerticalVariant ? "column" : "row"}
      iconGap={isVerticalVariant ? "spacing-4" : "spacing-8"}
      pv={null}
      ph={null}
      pt={isVerticalVariant ? "spacing-12" : "spacing-0"}
      pb={isVerticalVariant ? "spacing-24" : "spacing-0"}
      pl={isVerticalVariant ? "spacing-12" : "spacing-4"}
      pr={"spacing-12"}
      font={"heading-7"}
      defaultBorderColor={borderColor}
      defaultBackground={defaultBackground}
      defaultTextColor="text-primary"
      hoverBackground={hoverBackground}
      hoverBorderColor={borderColor}
      hoverTextColor="text-primary"
      disabledBackground="bg-btn-secondary-disabled"
      disabledBorderColor="border-neutral-lighter"
      disabledTextColor="text-subdued"
      textAlign={"center"}
      innerWidth={isVerticalVariant ? "spacing-120" : "auto"}
      hoverUnderline
      height={isVerticalVariant ? null : "spacing-48"}
      $ba={isVerticalVariant ? "border-solid-m" : horizontalVariantBorderWidth}
      $display="inline-flex"
      {...props}
    />
  );
};

const getBackgroundColourLevel = (
  phase: OakSubjectIconButtonProps["colorScheme"],
) => {
  switch (phase) {
    case "primary":
      return 4;
    case "secondary":
      return 3;
    case "non-curriculum":
      return 1;
  }
};
