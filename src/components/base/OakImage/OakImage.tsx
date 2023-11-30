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
import { colorStyle, ColorStyleProps } from "@/styles/utils/colorStyle";

type HTMLProps = {
  onClick?: MouseEventHandler;
};

export type OakImageProps = ImageProps &
  ColorFilterStyleProps &
  PositionStyleProps &
  SizeStyleProps &
  SpacingStyleProps &
  ColorStyleProps &
  HTMLProps;

/**
 * OakImage is a wrapper round next/image which adds convenience style
 * props to the api
 */
const StyledFillImage = styled(Image)<OakImageProps>`
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

const StyledResponsiveImage = styled(Image)<OakImageProps>`
  ${colorFilterStyle}
  ${(props) =>
    /* onClick might be passed in the useClickableCard pattern */
    props.onClick &&
    css`
      :hover {
        cursor: pointer;
      }
    `}
  width: 100%;
  height: auto;
`;

const StyledBox = styled(OakBox)<Omit<OakImageProps, "alt" | "src">>`
  ${positionStyle}
  ${sizeStyle}
  ${spacingStyle}
  ${colorStyle}
`;

export const OakImage = (props: OakImageProps) => {
  const {
    src,
    alt,
    width,
    height,
    sizes,
    $width = "100%",
    $position = "relative",
    $colorFilter,
    ...rest
  } = props;

  // We don't know the aspect ratio of the image, so we must use fill and letterbox it to avoid stretching
  // Use $width and $height to set the width and height of the image container

  if (!width || !height) {
    return (
      <StyledBox $position={$position} $width={$width} {...rest}>
        <StyledFillImage
          src={src}
          alt={alt}
          sizes={sizes}
          fill
          $colorFilter={$colorFilter}
        />
      </StyledBox>
    );
  }

  // When we know the aspect ratio, we can use Image's repsonsive layout
  // Use $minWidth to set the width with auto height

  return (
    <StyledBox $maxWidth={"all-spacing-0"} $position={$position} {...rest}>
      <StyledResponsiveImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        $colorFilter={$colorFilter}
      />
    </StyledBox>
  );
};
