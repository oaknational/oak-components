import React from "react";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakIcon } from "@/components/images-and-icons/OakIcon";
import { OakImage } from "@/components/images-and-icons/OakImage";
import { OakSpan } from "@/components/typography/OakSpan";
import { OakAllSpacingToken } from "@/styles";
import { OakCodeRenderer } from "@/components/owa/OakCodeRenderer/OakCodeRenderer";

export type InternalQuizResultItemProps = {
  feedbackState?: "correct" | "incorrect" | null;
  standardText?: string;
  boldPrefixText?: string;
  imageURL?: string;
  imageAlt?: string;
};

const DisplayText = ({
  boldPrefixText,
  standardText,
  height = "spacing-20",
}: Pick<InternalQuizResultItemProps, "boldPrefixText" | "standardText"> & {
  height: OakAllSpacingToken;
}) => {
  if (boldPrefixText && standardText) {
    return (
      <OakFlex
        $color={"text-primary"}
        $minHeight={height}
        $alignItems={"center"}
      >
        <OakBox>
          <OakSpan $font={"body-2-bold"}>
            <OakCodeRenderer string={boldPrefixText} />
          </OakSpan>
          <OakSpan $font={"body-2"}>
            {"\u00A0"}-{"\u00A0"}
            <OakCodeRenderer string={standardText} />
          </OakSpan>
        </OakBox>
      </OakFlex>
    );
  } else if (standardText) {
    return (
      <OakFlex $minHeight={height} $alignItems={"center"}>
        <OakSpan $color={"text-primary"} $font={"body-2"}>
          <OakCodeRenderer string={standardText} />
        </OakSpan>
      </OakFlex>
    );
  } else {
    return null;
  }
};

/**
 *
 * Add the description of the component here and it will appear on the story for the component
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * make sure to add descriptions and types for any callbacks for the component
 *
 * NB. We must export a styled component for it to be inheritable
 */
export const OakQuizResultItem = ({
  standardText,
  boldPrefixText,
  feedbackState,
  imageURL,
  imageAlt,
}: InternalQuizResultItemProps) => {
  if (boldPrefixText && !standardText) {
    throw new Error(
      "standardText must be provided if boldPrefixText is provided",
    );
  }

  if (!standardText && !imageURL) {
    throw new Error("Either standardText or imageURL must be provided");
  }

  if (imageURL && !imageAlt) {
    throw new Error("Image URL provided without alt text");
  }

  const background = (() => {
    if (feedbackState === "correct") {
      return "bg-decorative5-subdued";
    } else if (feedbackState === "incorrect") {
      return "bg-neutral";
    } else {
      return null;
    }
  })();

  return (
    <OakFlex $flexDirection={"column"} $alignItems={"start"} $gap={"spacing-8"}>
      <OakFlex
        $background={background}
        $pa={"spacing-8"}
        $borderRadius={"border-radius-m"}
        $width={"fit-content"}
        $gap={"spacing-12"}
        $alignItems={"center"}
      >
        {feedbackState && (
          <OakIcon
            iconName={feedbackState === "correct" ? "tick" : "cross"}
            data-testid={feedbackState === "correct" ? "tick" : "cross"}
            $width={"spacing-32"}
            $height={"spacing-32"}
            $colorFilter={
              feedbackState === "correct" ? "text-primary" : "icon-error"
            }
          />
        )}
        <DisplayText
          height="spacing-32"
          standardText={standardText}
          boldPrefixText={boldPrefixText}
        />
      </OakFlex>
      {imageURL && imageAlt && (
        <OakImage
          src={imageURL}
          alt={imageAlt}
          $width={"spacing-160"}
          $height={"spacing-160"}
          $background={"bg-neutral"}
        />
      )}
    </OakFlex>
  );
};
