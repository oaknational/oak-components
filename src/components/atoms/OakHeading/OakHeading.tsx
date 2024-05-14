import React, { FC } from "react";
import styled from "styled-components";

import { ColorStyleProps, colorStyle } from "@/styles/utils/colorStyle";
import { MarginStyleProps, marginStyle } from "@/styles/utils/spacingStyle";
import { OpacityStyleProps, opacityStyle } from "@/styles/utils/opacityStyle";
import {
  TypographyStyleProps,
  typographyStyle,
} from "@/styles/utils/typographyStyle";

export const oakHeadingTags = ["div", "h1", "h2", "h3", "h4", "h5", "h6"];

export type OakHeadingTag = (typeof oakHeadingTags)[number];

type OakHeadingTagProps = {
  children?: React.ReactNode;
  id?: string;
  /**
   * HTML tag to be used for the heading
   *
   * Accepts a heading tag token
   */
  tag: OakHeadingTag;
  ariaLabel?: string;
  ariaHidden?: boolean;
};

export const HeadingTagComponent: FC<OakHeadingTagProps> = (props) => {
  const { tag, ariaLabel, ariaHidden, ...otherProps } = props;
  const Tag = tag;
  return (
    <Tag {...otherProps} aria-label={ariaLabel} aria-hidden={ariaHidden} />
  );
};

export type OakHeadingProps = TypographyStyleProps &
  OakHeadingTagProps &
  ColorStyleProps &
  OpacityStyleProps &
  MarginStyleProps;

/**
 *
 * OakHeading can be one of the following style tags dependant on its role: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6".
 * Use the controls to view different font styles.
 *
 */
export const OakHeading = styled(HeadingTagComponent)<OakHeadingProps>`
  ${typographyStyle}
  ${marginStyle}
  ${colorStyle}
  ${opacityStyle}
`;
