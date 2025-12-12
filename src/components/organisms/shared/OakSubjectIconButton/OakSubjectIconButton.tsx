import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/molecules/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { OakIcon, OakIconName } from "@/components/atoms";
import { OakUiRoleToken } from "@/styles";

export type OakSubjectIconButtonProps = {
  phase: "primary" | "secondary" | "non-curriculum";
  subjectIconName: OakIconName;
  variant: "vertical" | "horizontal";
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
 * A specific implementation of InternalRectButton
 *
 * Changes colour according to the phase prop. Can be used as a link or a button.
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
  phase,
  element,
  subjectIconName,
  variant,
  ...rest
}: OakSubjectIconButtonProps & PolymorphicPropsWithoutRef<C>) => {
  let defaultBackground: OakUiRoleToken,
    hoverBackground: OakUiRoleToken,
    borderColor: OakUiRoleToken;
  switch (phase) {
    case "primary":
      defaultBackground = "bg-decorative4-very-subdued";
      hoverBackground = "bg-decorative4-main";
      borderColor = "border-decorative4-stronger";
      break;
    case "non-curriculum":
      defaultBackground = "bg-decorative1-very-subdued";
      hoverBackground = "bg-decorative1-main";
      borderColor = "border-decorative1-stronger";
      break;
    default:
      defaultBackground = "bg-decorative3-very-subdued";
      hoverBackground = "bg-decorative3-main";
      borderColor = "border-decorative3-stronger";
      break;
  }

  const isVerticalVariant = variant === "vertical";

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
      $ba={isVerticalVariant ? "border-solid-m" : "border-solid-s"}
      {...rest}
    />
  );
};
