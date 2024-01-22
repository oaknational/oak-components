import React, { MouseEventHandler } from "react";
import styled from "styled-components";

import { InternalRoundButton } from "@/components/ui/InternalRoundButton";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

export type OakHintButtonProps = {
  isOpen: boolean;
  onClick?: MouseEventHandler;
  isLoading?: boolean;
  disabled?: boolean;
};

const StyledInternalRoundButton = styled(InternalRoundButton)`
  &:hover .shadow {
    box-shadow: none !important;
  }
  &:active .shadow {
    box-shadow: ${parseDropShadow("drop-shadow-lemon")},
      ${parseDropShadow("drop-shadow-grey")} !important;
  }
`;

export const OakHintButton = (props: OakHintButtonProps) => {
  const { isOpen, disabled } = props;
  return (
    <StyledInternalRoundButton
      iconName={isOpen && !disabled ? "lightbulb-yellow" : "lightbulb"}
      defaultIconBackground={isOpen ? "black" : "bg-decorative5-main"}
      hoverIconBackground={isOpen ? "black" : "bg-decorative5-main"}
      defaultTextColor={"text-primary"}
      hoverTextColor={"text-primary"}
      disabledIconBackground={"bg-btn-primary-disabled"}
      disabledTextColor={"text-disabled"}
      disabledIconColor={"white"}
      onClick={props.onClick}
      isLoading={props.isLoading}
      disabled={props.disabled}
      iconBackgroundSize={"all-spacing-8"}
      iconSize={"all-spacing-6"}
    >
      {!isOpen ? "Need a hint?" : "Close hint"}
    </StyledInternalRoundButton>
  );
};
