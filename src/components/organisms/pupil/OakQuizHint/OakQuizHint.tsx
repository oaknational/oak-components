import React, { MouseEventHandler, ReactNode, useState } from "react";

import { OakTooltip } from "@/components/molecules";
import { OakHintButton } from "@/components/organisms/pupil/OakHintButton";

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
    <OakTooltip tooltip={hint} isOpen={isOpen} id="hint-tooltip">
      <OakHintButton
        isOpen={isOpen}
        onClick={handleClick}
        buttonProps={{ "aria-describedby": "hint-tooltip" }}
      />
    </OakTooltip>
  );
};
