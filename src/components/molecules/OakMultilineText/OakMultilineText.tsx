import React, { SetStateAction, useState } from "react";
import styled from "styled-components";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakTextArea, OakTextAreaProps } from "@/components/atoms/OakTextArea";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { OakSpan } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseBorderWidth } from "@/styles/helpers/parseBorderWidth";

// For example you could restyle the OakFlex component by adding the styles to the css template literal below

export type OakMultilineTextProps = {
  $height: SizeStyleProps["$height"];
  $charLimit: number;
};

type StyledOakTextAreaProps = {
  isError?: boolean;
} & OakTextAreaProps;

const StyledOakTextArea = styled(OakTextArea)<StyledOakTextAreaProps>`
  background: ${parseColor("bg-primary")};
  color: ${parseColor("text-subdued")};
  border-radius: ${parseBorderRadius("border-radius-m")};
  border-width: ${parseBorderWidth("border-solid-m")};
  padding: ${parseSpacing("inner-padding-s")};
  margin-left: ${parseSpacing("space-between-xs")};
  margin-right: ${parseSpacing("space-between-xs")};
  width: 100%;
  border-color: ${parseColor("border-neutral-lighter")};

  &:focus-visible {
    border-color: ${(props) =>
      props.isError ? parseColor("red") : parseColor("border-primary")};
    color: ${parseColor("text-primary")};
  }

  &:hover {
    background: ${parseColor("bg-neutral")};
    border-color: ${parseColor("border-neutral")};
  }
`;

const UnstyledComponent = ({
  $charLimit = 200,
  // ...props
}: OakMultilineTextProps) => {
  const [charCount, setCharCount] = useState(Number);
  const [showCharCount, setShowCharCount] = useState(Boolean);
  const [text, setText] = useState(String);

  const handleFocus = () => {
    setShowCharCount(true);
  };

  const handleBlur = () => {
    setShowCharCount(false);
  };

  const handleChange = (value: SetStateAction<string>) => {
    const charCount = value.length;
    setText(value);
    setCharCount(charCount);
  };

  return (
    <OakFlex $flexDirection={["row", "column"]}>
      <StyledOakTextArea
        value={text}
        onFocus={handleFocus}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        maxLength={200}
        $height={["all-spacing-19", "all-spacing-13", "all-spacing-10"]}
      ></StyledOakTextArea>
      {showCharCount && (
        <OakSpan $textAlign={"right"}>
          {charCount}/{$charLimit}
        </OakSpan>
      )}
    </OakFlex>
  );
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
export const OakMultilineText = styled(UnstyledComponent)``;
