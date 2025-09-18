import React from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/atoms/OakFlex";
// import { OakCombinedColorToken } from "@/styles";

export type OakMultilineTextProps = {
  /**
   * Limits input to a single line only
   */
  singleLine: boolean;
  /**
   * Limits number of characters permitted
   */
  charLimit: number;
  /**
   * Controls if user can use 'enter' key to get a newline
   */
  allowCarriageReturn: boolean;
  disabled: boolean;
  placeholder: string;
  // color: OakCombinedColorToken;
  // borderColor: OakCombinedColorToken;
  // focusBorderColor: OakCombinedColorToken;
  // disabledBorderColor: OakCombinedColorToken;
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

const UnstyledOakMultilineText = (props: OakMultilineTextProps) => {
  const onEnterPressed = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !props.allowCarriageReturn) {
      e.preventDefault();
    }
  };

  const setRows = (singleLine: boolean) => {
    if (singleLine) {
      return 1;
    }
  };

  return (
    <OakFlex $flexDirection="column" $width="100%" {...props}>
      <textarea
        id="OakMultilineText"
        maxLength={props.charLimit}
        disabled={props.disabled}
        onKeyDown={(e) => onEnterPressed(e)}
        placeholder={props.placeholder}
        rows={setRows(props.singleLine)}
        // style={{ resize: "none", overflowY: "visible" }}
      ></textarea>
    </OakFlex>
  );
};

/**
 *
 * A textarea that can be used for longer quiz answers
 *
 *
 * ### Callbacks
 * make sure to add descriptions and types for any callbacks for the component
 *
 * NB. We must export a styled component for it to be inheritable
 */
export const OakMultilineText = styled(UnstyledOakMultilineText)`
  ${OakMultilineTextCss}
`;
