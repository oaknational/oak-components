import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
import styled from "styled-components";

import {
  InternalShadowRoundButton,
  InternalShadowRoundButtonProps,
} from "@/components/molecules/InternalShadowRoundButton";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

export type OakInfoButtonProps = {
  onClick: MouseEventHandler;
  isOpen: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  buttonProps?: Partial<
    InternalShadowRoundButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
  >;
};

const StyledInternalShadowRoundButton = styled(
  InternalShadowRoundButton<"button">,
)`
  &:hover .shadow {
    box-shadow: none !important;
  }
  &:active .shadow {
    box-shadow: ${parseDropShadow("drop-shadow-lemon")},
      ${parseDropShadow("drop-shadow-grey")} !important;
  }
`;

/**
 * Presents an  info icon button with an open and closed state
 *
 * onClick: MouseEventHandler
 *
 */
export const OakInfoButton = (props: OakInfoButtonProps) => {
  const { isLoading, disabled, onClick, isOpen, buttonProps } = props;

  return (
    <StyledInternalShadowRoundButton
      element={"button"}
      iconName={isOpen && !disabled ? "cross" : "info"}
      defaultIconBackground={isOpen ? "icon-primary" : "bg-decorative5-main"}
      defaultIconColor={isOpen ? "icon-main" : "icon-primary"}
      hoverIconBackground={isOpen ? "icon-primary" : "bg-decorative5-main"}
      defaultTextColor={"text-primary"}
      hoverTextColor={"text-primary"}
      disabledIconBackground={"bg-btn-primary-disabled"}
      disabledTextColor={"text-disabled"}
      disabledIconColor={"icon-main"}
      isLoading={isLoading}
      disabled={disabled}
      iconBackgroundSize={"spacing-40"}
      iconSize={"spacing-32"}
      onClick={onClick}
      data-rac
      {...buttonProps}
    />
  );
};
