import React from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "../atoms";

import { parseSpacing } from "@/styles/helpers/parseSpacing";

const StyledOakFlex = styled(OakFlex)`
  width: ${parseSpacing("all-spacing-6")};
`;
// For example you could restyle the OakFlex component by adding the styles to the css template literal below

export type CopyPasteThisComponentProps = {
  /**
   * Define the props for your component here
   * add styleprops from "@/styles/utils/*Style" to the component props type definition where necessary in order to use
   * the oak design kit which accept specific tokens to add style and also keep the components style consistent
   *  & TypographyStyleProps &
   *   SpacingStyleProps &
   *   ColorStyleProps &
   *   DisplayStyleProps &
   *   BorderStyleProps &
   *   ColorFilterStyleProps &
   *   DropShadowStyleProps &
   *   FlexStyleProps &
   *   ListStyleProps &
   *   OpacityStyleProps &
   *   PositionStyleProps &
   *   SizeStyleProps &
   *   TransformStyleProps &
   *   TransitionStyleProps &
   *   ZIndexStyleProps;
   */
};

// By adding the style css utils to this components css your component will be able to accept corresponding props and prop values.
// you can also add custom styles to the component by adding the styles to the css template literal below

const CopyPasteThisComponentCss = css<CopyPasteThisComponentProps>``;

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

const UnstyledComponent = (props: CopyPasteThisComponentProps) => {
  /**
   * Add your component logic here
   *
   */

  return (
    /**
     *  Return your component JSX here
     * for example you could
     *
     */

    <StyledOakFlex {...props}>
      {/** Add your component content here */}
    </StyledOakFlex>
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
export const CopyPasteThisComponent = styled(UnstyledComponent)`
  ${CopyPasteThisComponentCss}
`;
