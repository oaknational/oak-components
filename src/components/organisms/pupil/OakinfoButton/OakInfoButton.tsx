import React, { MouseEventHandler } from "react";
import styled from "styled-components";

import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

export type OakInfoButtonProps = {
  onClick: MouseEventHandler;
  isOpen: boolean;
  isLoading?: boolean;
  disabled?: boolean;
};

const StyledInternalShadowRoundButton = styled(InternalShadowRoundButton)`
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
  const { isLoading, disabled, onClick, isOpen } = props;

  return (
    <StyledInternalShadowRoundButton
      iconName={isOpen && !disabled ? "cross" : "info"}
      defaultIconBackground={isOpen ? "black" : "bg-decorative5-main"}
      defaultIconColor={isOpen ? "white" : "black"}
      hoverIconBackground={isOpen ? "black" : "bg-decorative5-main"}
      defaultTextColor={"text-primary"}
      hoverTextColor={"text-primary"}
      disabledIconBackground={"bg-btn-primary-disabled"}
      disabledTextColor={"text-disabled"}
      disabledIconColor={"white"}
      isLoading={isLoading}
      disabled={props.disabled}
      iconBackgroundSize={"all-spacing-8"}
      iconSize={"all-spacing-7"}
      onClick={onClick}
    />
  );
};
