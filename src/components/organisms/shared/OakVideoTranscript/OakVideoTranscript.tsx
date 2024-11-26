import React, { ReactNode, useState } from "react";

import { OakBox, OakFlex } from "@/components/atoms";
import {
  OakCollapsibleContent,
  OakSmallSecondaryButton,
} from "@/components/molecules";

type OakVideoTranscriptProps = {
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
  copyLinkControl?: ReactNode;
  transcriptToggled?: (props: { isOpen: boolean }) => void;
};

/**
 * Display a togglable video transcript with a slot to display a sign language control
 */
export const OakVideoTranscript = ({
  children,
  id,
  signLanguageControl = null,
  copyLinkControl = null,
  transcriptToggled,
}: OakVideoTranscriptProps) => {
  const [showTranscript, setShowTranscript] = useState(false);

  const handleClick = () => {
    setShowTranscript(!showTranscript);
    if (transcriptToggled) {
      transcriptToggled({ isOpen: !showTranscript });
    }
  };

  return (
    <>
      <OakFlex $flexDirection="row" $flexWrap={"wrap"}>
        {/* desktop */}
        <OakBox
          $mr={"space-between-s"}
          $mb="space-between-m2"
          $display={["none", "block"]}
        >
          {children && (
            <OakSmallSecondaryButton
              onClick={handleClick}
              iconName={showTranscript ? "chevron-up" : "chevron-down"}
              isTrailingIcon
              aria-controls={id}
              aria-expanded={showTranscript}
            >
              {showTranscript ? "Hide transcript" : "Show transcript"}
            </OakSmallSecondaryButton>
          )}
        </OakBox>

        {/* mobile */}
        <OakBox
          $mr={"space-between-sssx"}
          $mb="space-between-s"
          $display={["block", "none"]}
        >
          {children && (
            <OakSmallSecondaryButton
              onClick={handleClick}
              aria-controls={id}
              aria-expanded={showTranscript}
            >
              {showTranscript ? "Hide transcript" : "Show transcript"}
            </OakSmallSecondaryButton>
          )}
        </OakBox>
        {copyLinkControl}
        {signLanguageControl}
      </OakFlex>
      {children && (
        <OakCollapsibleContent
          id={id}
          $maxHeight="all-spacing-23"
          isOpen={showTranscript}
          $font="body-2"
          $color="text-primary"
          $pa={"space-between-xs"}
          aria-live="polite"
        >
          {children}
        </OakCollapsibleContent>
      )}
    </>
  );
};
