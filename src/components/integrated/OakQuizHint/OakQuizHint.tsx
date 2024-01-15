import React, { MouseEventHandler, ReactNode, useState } from "react";

import { OakTertiaryButton, OakTooltip } from "@/components/ui";

export type OakQuizHintProps = {
  /**
   * Some content to give as a hint to answer a question
   */
  hint: ReactNode;
};

/**
 * Presents a button which will show a hint when clicked
 */
export const OakQuizHint = ({ hint }: OakQuizHintProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick: MouseEventHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OakTooltip tooltip={hint} isOpen={isOpen}>
      <OakTertiaryButton
        iconName={isOpen ? "lightbulb-yellow" : "lightbulb"}
        onClick={handleClick}
        iconBackground={isOpen ? "bg-icon" : "bg-decorative5-main"}
      >
        {isOpen ? "Close hint" : "Need a hint?"}
      </OakTertiaryButton>
    </OakTooltip>
  );
};
