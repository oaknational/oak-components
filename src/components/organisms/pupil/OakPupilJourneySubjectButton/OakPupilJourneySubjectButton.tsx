import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/molecules/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { OakIcon, OakIconName } from "@/components/atoms";

export type OakPupilJourneySubjectButtonProps = {
  phase: "primary" | "secondary";
  subjectIconName: OakIconName;
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

export const OakPupilJourneySubjectButton = <C extends ElementType = "button">({
  phase,
  element,
  subjectIconName,
  ...rest
}: OakPupilJourneySubjectButtonProps & PolymorphicPropsWithoutRef<C>) => {
  const defaultBackground =
    phase === "primary"
      ? "bg-decorative4-very-subdued"
      : "bg-decorative3-very-subdued";
  const hoverBackground =
    phase === "primary" ? "bg-decorative4-main" : "bg-decorative3-main";
  const borderColor =
    phase === "primary"
      ? "border-decorative4-stronger"
      : "border-decorative3-stronger";

  const iconOverride = (
    <OakIcon
      iconName={subjectIconName}
      $minWidth={"all-spacing-11"}
      $minHeight={"all-spacing-11"}
    />
  );

  return (
    <InternalShadowRectButton
      element={element ?? "button"}
      iconOverride={iconOverride}
      iconLayout="column"
      iconGap={"space-between-sssx"}
      pv={"inner-padding-xl"}
      ph={"inner-padding-xl"}
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
      width={"all-spacing-16"}
      height={"all-spacing-16"}
      {...rest}
    />
  );
};
