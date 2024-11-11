import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/molecules/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type OakScaleImageButtonProps = Omit<
  InternalShadowRectButtonProps,
  | "defaultTextColor"
  | "hoverTextColor"
  | "disabledTextColor"
  | "defaultBackground"
  | "defaultBorderColor"
  | "hoverBackground"
  | "hoverBorderColor"
  | "disabledBackground"
  | "disabledBorderColor"
  | "iconGap"
  | "pv"
  | "ph"
  | "$bblr"
  | "$btlr"
  | "width"
> & {
  onImageScaleCallback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isExpanded: boolean;
};

/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callback is available for tracking focus events:
 *
 * ### onImageScaleCallback
 * `onImageScaleCallback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 */

export const OakScaleImageButton = <C extends ElementType = "button">({
  onImageScaleCallback,
  isExpanded,
}: OakScaleImageButtonProps & PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalShadowRectButton
      type="button"
      onClick={onImageScaleCallback}
      iconName={!isExpanded ? "expand" : "minimise"}
      defaultTextColor={"text-primary"}
      hoverTextColor={"text-primary"}
      disabledTextColor={"text-primary"}
      defaultBackground={"bg-neutral"}
      defaultBorderColor={"bg-neutral"}
      hoverBackground={"bg-neutral-stronger"}
      hoverBorderColor={"bg-neutral-stronger"}
      disabledBackground={"bg-btn-primary-disabled"}
      disabledBorderColor={"bg-btn-primary-disabled"}
      iconGap={"all-spacing-0"}
      pv={"inner-padding-none"}
      ph={"inner-padding-none"}
      $bblr={"border-radius-square"}
      $btlr={"border-radius-square"}
      width={"100%"}
      aria-label={!isExpanded ? "Expand Image" : "Minimise imagew"}
      data-testid="expand-image-button"
    />
  );
};
