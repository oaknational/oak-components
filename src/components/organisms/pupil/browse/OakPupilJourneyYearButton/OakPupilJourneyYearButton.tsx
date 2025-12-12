import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/molecules/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type OakPupilJourneyYearButtonProps = {
  phase: "primary" | "secondary";
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

export const OakPupilJourneyYearButton = <C extends ElementType = "button">({
  phase,
  element,
  ...rest
}: OakPupilJourneyYearButtonProps & PolymorphicPropsWithoutRef<C>) => {
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

  return (
    <InternalShadowRectButton
      element={element ?? "button"}
      pv={"spacing-24"}
      ph={"spacing-24"}
      font={"heading-6"}
      defaultBorderColor={borderColor}
      defaultBackground={defaultBackground}
      defaultTextColor="text-primary"
      hoverBackground={hoverBackground}
      hoverBorderColor={borderColor}
      hoverTextColor="text-primary"
      disabledBackground="bg-btn-secondary-disabled"
      disabledBorderColor="border-neutral-lighter"
      disabledTextColor="text-subdued"
      hoverUnderline
      {...rest}
    />
  );
};
