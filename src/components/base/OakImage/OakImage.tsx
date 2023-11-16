import React, { MouseEventHandler } from "react";
import Image, { ImageProps } from "next/image";
import styled, { css } from "styled-components";

import {
  positionStyle,
  PositionStyleProps,
} from "@/styles/utils/positionStyle";
import { sizeStyle, SizeStyleProps } from "@/styles/utils/sizeStyle";
import { spacingStyle, SpacingStyleProps } from "@/styles/utils/spacingStyle";
import {
  colorFilterStyle,
  ColorFilterStyleProps,
} from "@/styles/utils/colorFilterStyle";

type HTMLProps = {
  onClick?: MouseEventHandler;
};

export type OakImageProps = Omit<ImageProps, "width" | "height"> &
  ColorFilterStyleProps &
  PositionStyleProps &
  SizeStyleProps &
  SpacingStyleProps &
  HTMLProps;

/**
 * OakImage is a wrapper round next/image which adds convenience style
 * props to the api
 */
const StyledImage = styled(Image)<OakImageProps>`
  ${positionStyle}
  ${sizeStyle}
  ${spacingStyle}
  ${colorFilterStyle}
  ${(props) =>
    /* onClick might be passed in the useClickableCard pattern */
    props.onClick &&
    css`
      :hover {
        cursor: pointer;
      }
    `}
`;

export const OakImage = (props: OakImageProps) => {
  const { src, alt, $width = "auto", $height = "auto", ...rest } = props;

  return (
    <StyledImage
      src={src}
      alt={alt}
      width={0}
      height={0}
      $width={$width}
      $height={$height}
      {...rest}
    />
  );
};
