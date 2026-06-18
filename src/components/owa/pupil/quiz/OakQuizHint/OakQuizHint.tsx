import React, { MouseEventHandler, ReactNode, useState } from "react";

import { OakTooltip } from "@/components/messaging-and-feedback/OakTooltip";
import { OakHintButton } from "@/components/owa/pupil/quiz/OakHintButton";

export type OakQuizHintProps = {
  /**
   * Some content to give as a hint to answer a question
   */
  hint: ReactNode;
  id: string;
  hintToggled?: (props: { isOpen: boolean }) => void;
};

/**
 * Presents a button which will show a hint when clicked
 */
export const OakQuizHint = ({ hint, id, hintToggled }: OakQuizHintProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick: MouseEventHandler = () => {
    setIsOpen(!isOpen);
    if (hintToggled) {
      hintToggled({ isOpen: !isOpen });
    }
  };

  return (
    <>
      <OakTooltip tooltip={hint} isOpen={isOpen} tooltipPosition="top-left">
        <OakHintButton
          isOpen={isOpen}
          onClick={handleClick}
          buttonProps={{
            "aria-expanded": isOpen,
            "aria-describedby": isOpen ? id : undefined,
          }}
        />
      </OakTooltip>
      {isOpen && (
        <div
          id={id}
          aria-live="polite"
          aria-relevant="all"
          style={{ position: "absolute", left: "-9999px" }}
          data-testid={`${id}-announcement`}
        >
          {hint}
        </div>
      )}
    </>
  );
};
