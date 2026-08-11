import React, { useState, useId } from "react";
import type { PortableTextBlock } from "@portabletext/react";

import type { OakHeadingProps } from "@/components/typography";
import { OakSmallSecondaryButton } from "@/components/buttons";
import { OakFlex, OakBox } from "@/components/layout-and-structure";
import { OakHeading, OakP } from "@/components/typography";
import { OakPortableText } from "@/components/layout-and-structure/OakPortableText/OakPortableText";

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
  body?: string | PortableTextBlock[];
  /**
   * The video slot to display. This is a React node that can be any valid React element.
   */
  videoSlot: React.ReactNode;
  /**
   * The transcript to display below the video.
   */
  transcript?: PortableTextBlock[];
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

  const transcriptButton = transcriptEnabled && (
    <OakFlex>
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
  );

  const showLinkButton = showCopyLink && (
    <OakFlex
      $flexGrow={[0, 1, 1]}
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
  );

  const showSignLanguageButton = showSignLanguage && (
    <OakFlex $width={["auto", "auto", "auto"]}>
      <OakSmallSecondaryButton
        isTrailingIcon={true}
        onClick={onShowSignLanguage}
        iconName={"sign-language"}
      >
        Show sign language
      </OakSmallSecondaryButton>
    </OakFlex>
  );

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
        {Array.isArray(body) && (
          <OakPortableText
            value={body}
            components={{
              paragraph: ({ children }) => (
                <OakP
                  $color={"text-primary"}
                  $font={["body-2", "body-1", "body-1"]}
                >
                  {children}
                </OakP>
              ),
            }}
          />
        )}
        {!Array.isArray(body) && (
          <OakP $color={"text-primary"} $font={["body-2", "body-1", "body-1"]}>
            {body}
          </OakP>
        )}
      </OakFlex>
      {hasButtonsEnabled && (
        // Note: We have two flex containers here to allow for a different layouts while keeping tabindex correct
        <>
          {/* Mobile layout */}
          <OakFlex
            $flexDirection={"row"}
            $gap={["spacing-16"]}
            $flexWrap={["wrap"]}
            $display={["flex", "none", "none"]}
          >
            {showSignLanguageButton}
            {showLinkButton}
            {transcriptButton}
          </OakFlex>
          {/* Desktop layout */}
          <OakFlex
            $flexDirection={"row"}
            $gap={["spacing-16"]}
            $display={["none", "flex", "flex"]}
          >
            {transcriptButton}
            {showLinkButton}
            {showSignLanguageButton}
          </OakFlex>
        </>
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
            <OakPortableText
              value={transcript}
              components={{
                paragraph: ({ children }) => (
                  <OakP $color={"text-primary"} $font={"body-1"}>
                    {children}
                  </OakP>
                ),
              }}
            />
          </OakFlex>
        </OakFlex>
      )}
    </OakFlex>
  );
}
