import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/molecules/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { OakIcon, OakIconName } from "@/components/atoms";
import { OakCombinedColorToken } from "@/styles";

export type OakPupilJourneySubjectButtonProps = {
  phase: "primary" | "secondary" | "non-curriculum";
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
  let defaultBackground: OakCombinedColorToken,
    hoverBackground: OakCombinedColorToken,
    borderColor: OakCombinedColorToken;
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

  const iconOverride = (
    <OakIcon
      iconName={subjectIconName}
      $minWidth={"all-spacing-12"}
      $minHeight={"all-spacing-12"}
      aria-hidden="true"
    />
  );

  return (
    <InternalShadowRectButton
      element={element ?? "button"}
      iconOverride={iconOverride}
      iconLayout="column"
      iconGap={"space-between-sssx"}
      pv={null}
      pt={"inner-padding-s"}
      pb={"inner-padding-xl"}
      ph={"inner-padding-s"}
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
      innerWidth={"all-spacing-16"}
      {...rest}
    />
  );
};
