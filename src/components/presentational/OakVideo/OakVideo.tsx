import React, { useState, useId } from "react";

import type { OakHeadingProps } from "@/components/typography";
import { OakSmallSecondaryButton } from "@/components/buttons";
import { OakFlex, OakBox } from "@/components/layout-and-structure";
import { OakHeading, OakP } from "@/components/typography";

export type OakVideoProps = {
  /**
   * The heading tag to use for the heading text. Defaults to "h1".
   * This is used to ensure proper semantic structure of the page.
   * For example, if the heading is a subheading of an h2, it should be an h3.
   */
  headingTag?: OakHeadingProps["tag"];
  /**
   * The heading text to display above the video.
   */
  heading?: string;
  /**
   * The body text to display below the heading and above the video.
   */
  body?: string;
  /**
   * The video slot to display. This is a React node that can be any valid React element.
   */
  videoSlot: React.ReactNode;
  /**
   * The transcript to display below the video.
   */
  transcript?: string[];
  /**
   * Whether to show the transcript button.
   */
  showTranscript?: boolean;
  /**
   * Whether to show the copy link button.
   */
  showCopyLink?: boolean;
  /**
   * Whether to show the sign language button.
   */
  showSignLanguage?: boolean;
  /**
   * Callback function to be called when the copy link button is clicked.
   */
  onCopyLink?: () => void;
  /**
   * Callback function to be called when the sign language button is clicked.
   */
  onShowSignLanguage?: () => void;
};

/**
 * Video component with controls to standardise layout across use
 */
export function OakVideo({
  headingTag = "h1",
  heading,
  body,
  videoSlot,
  transcript,
  showTranscript = false,
  showCopyLink = false,
  showSignLanguage = false,
  onCopyLink,
  onShowSignLanguage,
}: Readonly<OakVideoProps>) {
  const transcriptId = useId();
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);
  const transcriptEnabled =
    showTranscript && transcript && transcript.length > 0;

  const hasButtonsEnabled =
    transcriptEnabled || showCopyLink || showSignLanguage;

  return (
    <OakFlex $flexDirection={"column"} $gap={"spacing-24"}>
      <OakFlex
        $flexDirection={"column"}
        $gap={"spacing-24"}
        $ba="border-solid-m"
        $borderColor="border-primary"
      >
        <OakBox $aspectRatio={"16/9"}>{videoSlot}</OakBox>
      </OakFlex>
      <OakFlex
        $flexDirection={"column"}
        $gap={"spacing-8"}
        $display={!heading && !body ? "none" : undefined}
      >
        {heading && (
          <OakHeading
            tag={headingTag}
            $color={"text-primary"}
            $font={["heading-5", "heading-4", "heading-4"]}
          >
            {heading}
          </OakHeading>
        )}
        {body && (
          <OakP $color={"text-primary"} $font={["body-2", "body-1", "body-1"]}>
            {body}
          </OakP>
        )}
      </OakFlex>
      {hasButtonsEnabled && (
        <OakFlex
          $flexDirection={"row"}
          $gap={["spacing-16"]}
          $flexWrap={["wrap", "nowrap", "nowrap"]}
        >
          {transcriptEnabled && (
            <OakFlex $order={["2", "1", "1"]}>
              <OakSmallSecondaryButton
                isTrailingIcon={true}
                iconName={isTranscriptOpen ? "chevron-up" : "chevron-down"}
                onClick={() => setIsTranscriptOpen(!isTranscriptOpen)}
                aria-controls={transcriptId}
                aria-expanded={isTranscriptOpen}
              >
                {isTranscriptOpen ? "Hide" : "Show"} transcript
              </OakSmallSecondaryButton>
            </OakFlex>
          )}
          {showCopyLink && (
            <OakFlex
              $order={["3", "2", "2"]}
              $flexGrow={1}
              $justifyContent={["flex-start", "flex-start", "flex-start"]}
            >
              <OakSmallSecondaryButton
                isTrailingIcon={true}
                onClick={onCopyLink}
                iconName={"copy"}
              >
                Copy link
              </OakSmallSecondaryButton>
            </OakFlex>
          )}
          {showSignLanguage && (
            <OakFlex $order={["1", "3", "3"]} $width={["100%", "auto", "auto"]}>
              <OakSmallSecondaryButton
                isTrailingIcon={true}
                onClick={onShowSignLanguage}
                iconName={"sign-language"}
              >
                Show sign language
              </OakSmallSecondaryButton>
            </OakFlex>
          )}
        </OakFlex>
      )}
      {transcriptEnabled && (
        <OakFlex
          data-testid={"oak-video-transcript-container"}
          id={transcriptId}
          $display={!isTranscriptOpen ? "none" : undefined}
          $height="spacing-360"
          $background={"bg-neutral-stronger"}
          $pa={"spacing-16"}
          $borderRadius={"border-radius-s"}
          $gap={"spacing-32"}
          $flexDirection={"column"}
        >
          <OakFlex
            $gap={"spacing-8"}
            $overflowY={"auto"}
            $flexDirection={"column"}
          >
            {transcript.map((transcriptLine, transcriptIndex) => {
              return (
                <OakP key={transcriptIndex} $font={"body-1"}>
                  {transcriptLine}
                </OakP>
              );
            })}
          </OakFlex>
        </OakFlex>
      )}
    </OakFlex>
  );
}
