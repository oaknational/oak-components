import React, { MouseEventHandler, ReactNode, useState } from "react";

import { OakTooltip } from "@/components/ui";
import { OakHintButton } from "@/components/integrated/OakHintButton";

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
      <OakHintButton isOpen={isOpen} onClick={handleClick} />
    </OakTooltip>
  );
};
