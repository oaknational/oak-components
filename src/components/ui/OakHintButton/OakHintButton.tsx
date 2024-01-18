import React from "react";
import styled from "styled-components";

import { InternalRoundButton } from "@/components/ui/InternalRoundButton";

export type OakHintButtonProps = {
  isOpen: boolean;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

const StyledInternalRoundButton = styled(InternalRoundButton)`
  .internal-button:hover .shadow {
    box-shadow: none;
  }

  .internal-button:active .shadow {
    box-shadow: none;
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
      noHoverShadow={true}
    >
      {!isOpen ? "Need a hint?" : "Close hint"}
    </StyledInternalRoundButton>
  );
};
