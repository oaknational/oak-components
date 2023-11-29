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
import { OakBox } from "@/components/base/OakBox";

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
  ${colorFilterStyle}
  ${(props) =>
    /* onClick might be passed in the useClickableCard pattern */
    props.onClick &&
    css`
      :hover {
        cursor: pointer;
      }
    `}
  object-fit: contain;
`;

const StyledBox = styled(OakBox)<Omit<OakImageProps, "alt" | "src">>`
  ${positionStyle}
  ${sizeStyle}
  ${spacingStyle}
`;

export const OakImage = (props: OakImageProps) => {
  const {
    src,
    alt,
    $width = "100%",
    $height = "100%",
    $minWidth = "all-spacing-4",
    $minHeight = "all-spacing-4",
    $position = "relative",
    $colorFilter,

    ...rest
  } = props;

  return (
    <StyledBox
      $position={$position}
      $width={$width}
      $height={$height}
      $minWidth={$minWidth}
      $minHeight={$minHeight}
      {...rest}
    >
      <StyledImage src={src} alt={alt} fill $colorFilter={$colorFilter} />
    </StyledBox>
  );
};
