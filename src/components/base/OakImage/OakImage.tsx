import React, { MouseEventHandler } from "react";
import Image, { ImageProps } from "next/image";
import styled, { css } from "styled-components";

import {
  positionStyle,
  PositionProps,
  sizeStyle,
  SizeProps,
  spacingStyle,
  SpacingProps,
} from "@/styles";

type HTMLProps = {
  onClick?: MouseEventHandler;
};

export type OakImageProps = Omit<ImageProps, "width" | "height"> &
  PositionProps &
  SizeProps &
  SpacingProps &
  HTMLProps;

/**
 * OakImage is a wrapper round next/image which adds convenience style
 * props to the api
 */
const StyledImage = styled(Image)<OakImageProps>`
  ${positionStyle}
  ${sizeStyle}
  ${spacingStyle}
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
