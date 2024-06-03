import React, { MouseEventHandler, ReactNode, useState } from "react";

import { OakInfoButton } from "../OakinfoButton";

import { OakTooltip, OakTooltipProps } from "@/components/molecules";

export type OakInfoProps = {
  /**
   * Some content to give as a hint to answer a question
   */
  hint: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
} & Omit<OakTooltipProps, "children" | "tooltip" | "id">;

/**
 * Presents a button which will show a hint when clicked
 */
export const OakInfo = (props: OakInfoProps) => {
  const { hint, isLoading, disabled, ...tooltipProps } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick: MouseEventHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OakTooltip
      tooltip={props.hint}
      isOpen={isOpen}
      id={"info-tooltip"}
      {...tooltipProps}
    >
      <OakInfoButton onClick={handleClick} isOpen={isOpen} />
    </OakTooltip>
  );
};
