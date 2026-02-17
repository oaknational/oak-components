import React, { ReactNode, useState } from "react";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakCollapsibleContent } from "@/components/layout-and-structure/OakCollapsibleContent";
import { OakButton } from "@/components/buttons/OakButton";

type OakLessonVideoTranscriptProps = {
  /**
   * The transcript content
   */
  children: ReactNode;
  /**
   * The id of the collapsible content element. This is used to link the button to the content
   */
  id: string;
  /**
   * A control to toggle the video to display sign language
   */
  signLanguageControl?: ReactNode;
  transcriptToggled?: (props: { isOpen: boolean }) => void;
};

/**
 * Display a togglable video transcript with a slot to display a sign language control
 */
export const OakLessonVideoTranscript = ({
  children,
  id,
  signLanguageControl = null,
  transcriptToggled,
}: OakLessonVideoTranscriptProps) => {
  const [showTranscript, setShowTranscript] = useState(false);

  const handleClick = () => {
    setShowTranscript(!showTranscript);
    if (transcriptToggled) {
      transcriptToggled({ isOpen: !showTranscript });
    }
  };

  return (
    <>
      <OakFlex
        $flexDirection={["column-reverse", "row"]}
        $justifyContent="space-between"
      >
        <OakBox>
          {children && (
            <OakButton
              variant="tertiary"
              onClick={handleClick}
              iconName={showTranscript ? "chevron-up" : "chevron-down"}
              isTrailingIcon
              aria-controls={id}
              aria-expanded={showTranscript}
              $mb="spacing-24"
            >
              {showTranscript ? "Hide transcript" : "Show transcript"}
            </OakButton>
          )}
        </OakBox>
        {signLanguageControl && (
          <OakBox $mb="spacing-24">{signLanguageControl}</OakBox>
        )}
      </OakFlex>
      {children && (
        <OakCollapsibleContent
          id={id}
          $maxHeight="spacing-960"
          isOpen={showTranscript}
          $font="body-1"
          $color="text-primary"
          aria-live="polite"
        >
          {children}
        </OakCollapsibleContent>
      )}
    </>
  );
};
