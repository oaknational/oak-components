import React from "react";

import { InternalRoundButton } from "@/components/ui/InternalRoundButton";

export type OakHintButtonProps = {
  isOpen: boolean;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

export const OakHintButton = (props: OakHintButtonProps) => {
  const { isOpen, disabled } = props;
  return (
    <InternalRoundButton
      iconName={isOpen && !disabled ? "lightbulb-yellow" : "lightbulb"}
      defaultIconBackground={isOpen ? "black" : "lemon"}
      hoverIconBackground={isOpen ? "black" : "lemon"}
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
    </InternalRoundButton>
  );
};
