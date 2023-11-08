import React, { FC } from "react";
import styled from "styled-components";

import {
  ColorProps,
  MarginProps,
  OpacityProps,
  colorStyle,
  marginStyle,
  opacityStyle,
} from "@/styles";
import {
  TypographyProps,
  typographyStyle,
} from "@/styles/utils/typographyStyle";

export const oakHeadingTags = [
  "div",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
] as const;
export type OakHeadingTag = (typeof oakHeadingTags)[number];
type OakHeadingTagProps = {
  children?: React.ReactNode;
  id?: string;
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

export type OakHeadingProps = TypographyProps &
  OakHeadingTagProps &
  ColorProps &
  OpacityProps &
  MarginProps;

const OakHeading = styled(HeadingTagComponent)<OakHeadingProps>`
  ${typographyStyle}
  ${marginStyle}
  ${colorStyle}
  ${opacityStyle}
`;

export default OakHeading;
