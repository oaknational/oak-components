import React, { MouseEventHandler, ReactNode, useState } from "react";
import styled from "styled-components";

import { OakTooltip, OakTooltipProps } from "@/components/molecules";
import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

export type OakInfoButtonProps = {
  /**
   * Some content to give as a hint to answer a question
   */
  hint: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
} & Omit<OakTooltipProps, "children" | "tooltip">;

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
 * Presents a button which will show a hint when clicked
 */
export const OakInfoButton = (props: OakInfoButtonProps) => {
  const { hint, isLoading, disabled, ...tooltipProps } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick: MouseEventHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OakTooltip tooltip={props.hint} isOpen={isOpen} {...tooltipProps}>
      <StyledInternalShadowRoundButton
        iconName={isOpen && !props.disabled ? "cross" : "info"}
        defaultIconBackground={isOpen ? "black" : "bg-decorative5-main"}
        defaultIconColor={isOpen ? "white" : "black"}
        hoverIconBackground={isOpen ? "black" : "bg-decorative5-main"}
        defaultTextColor={"text-primary"}
        hoverTextColor={"text-primary"}
        disabledIconBackground={"bg-btn-primary-disabled"}
        disabledTextColor={"text-disabled"}
        disabledIconColor={"white"}
        isLoading={props.isLoading}
        disabled={props.disabled}
        iconBackgroundSize={"all-spacing-8"}
        iconSize={"all-spacing-6"}
        onClick={handleClick}
      />
    </OakTooltip>
  );
};
