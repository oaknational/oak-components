import React, { SetStateAction, useState } from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakTextArea } from "@/components/atoms/OakTextArea";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { OakLabel } from "@/components/atoms";

// For example you could restyle the OakFlex component by adding the styles to the css template literal below

export type OakMultilineTextProps = {
  $height: SizeStyleProps["$height"];
  $width: SizeStyleProps["$width"];
  $charLimit: number;
};

// By adding the style css utils to this components css your component will be able to accept corresponding props and prop values.
// you can also add custom styles to the component by adding the styles to the css template literal below

const OakMultilineTextCss = css<OakMultilineTextProps>``;

/**
 *
 * add default and custom styles to the component by adding the styles to the css template literal below
 *
 * ${typographyStyle}
 * ${colorStyle}
 * ${spacingStyle}
 * ${displayStyle}
 * ${borderStyle}
 * ${dropShadowStyle}
 * ${colorFilterStyle}
 *
 */

const UnstyledComponent = ({
  $charLimit = 200,

  // ...props
}: OakMultilineTextProps) => {
  /**
   * Add your component logic here
   *
   */

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

  // const setHeight = (charCount: number) => {};

  return (
    /**
     *  Return your component JSX here
     * for example you could
     *
     */

    <OakFlex $flexDirection={["row", "column"]}>
      <OakTextArea
        value={text}
        onFocus={handleFocus}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        maxLength={200}
      ></OakTextArea>
      {showCharCount && (
        <OakLabel $textAlign={"right"}>
          {charCount}/{$charLimit}
        </OakLabel>
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
export const OakMultilineText = styled(UnstyledComponent)`
  ${OakMultilineTextCss}
`;
