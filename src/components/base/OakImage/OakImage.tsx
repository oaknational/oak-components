import React, {
  ComponentPropsWithoutRef,
  ElementType,
  MouseEventHandler,
} from "react";
import Image, { ImageProps } from "next/image";
import styled, { css } from "styled-components";

import {
  ColorFilterStyleProps,
  colorFilterStyle,
} from "@/styles/utils/colorFilterStyle";
import { OakBox, OakBoxProps } from "@/components/base/OakBox";

type HTMLProps = {
  onClick?: MouseEventHandler;
};

export type OakImageProps<C extends ElementType = typeof Image> = Omit<
  ImageProps,
  "placeholder"
> &
  OakBoxProps &
  ColorFilterStyleProps &
  HTMLProps & {
    as?: C;
    /**
     * The placeholder to use while the image is loading
     *
     * Defaults to `oak` which is a placeholder containing the Oak logo
     * also accepts the same options as next/image */
    placeholder?: ImageProps["placeholder"] | "oak";
    /**
     * Additional props forwarded to the underlying `Image` component `as`
     */
    imageProps?: Partial<ComponentPropsWithoutRef<C>>;
  };

const oakPlaceholder =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNjEiIGhlaWdodD0iMTUxIiBmaWxsPSJub25lIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxnIGNsaXAtcGF0aD0idXJsKCNiKSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2MpIj48cGF0aCBmaWxsPSIjRTdGNkY1IiBkPSJNLTIwLTloMzAydjE3MC4wMTFILTIweiIvPjxwYXRoIGZpbGw9IiMyMjIiIGQ9Ik0xMjcuNzc5IDYzLjE4MWEyNy4xNDYgMjcuMTQ2IDAgMCAwLTMuOCAxLjYgMTYuNjk1IDE2LjY5NSAwIDAgMC03LjEgOC40YzAgLjEtLjEuMi0uMS4zLS43IDIuNC0uNiAyIDEuMyAyLjMgMS45LjMgMSAuNSAxIDEuMy0uMSA4LjggNC4xIDE1LjEgMTEuNCAxOS42YTEuNDk4IDEuNDk4IDAgMCAwIDEuNy4yYzUuNy0yLjYgOS4zLTcgMTAuMy0xMy4yYTEuMDAxIDEuMDAxIDAgMCAxIDEtMWwzLS4yYy44IDAgMS4zLjIgMS4yIDEuMmExNy45MDggMTcuOTA4IDAgMCAxLTMuMiA5LjIgMjMuNyAyMy43IDAgMCAxLTEwLjkgOS4xIDUuNDA2IDUuNDA2IDAgMCAxLTQuNS0uMiAyNi4yOSAyNi4yOSAwIDAgMS04LjUtNi42IDI1Ljg4OSAyNS44ODkgMCAwIDEtNi40LTE0LjRjMC0uNi0uMi0uNy0uOC0uOC0yLjUtLjQtMi41LS4xLTIuMy0yLjlhMTkuMjkgMTkuMjkgMCAwIDEgMTAuOC0xNi42IDM4Ljk1MyAzOC45NTMgMCAwIDEgNS43LTIuMWMuNDU3LS4zLjc4LS43NjYuOS0xLjNhMTQuMDk1IDE0LjA5NSAwIDAgMSAzLjUtNi4zbC4zLS4zYzEuOS0yIDIuNi0yIDQuMy4ybC40LjVjMS4xIDEuMSAxIDEuNS0uMSAyLjZhMTEuODgzIDExLjg4MyAwIDAgMC0zLjIgNC40YzIuNjQ1LjE2OCA1LjIxNS45NTYgNy41IDIuMyA1LjcgMy41IDkuMiA4LjMgOS45IDE1IC4wMTYuOTAxLS4wMTcgMS44MDMtLjEgMi43IDAgLjgtLjYgMS0xLjIgMS4yYTE2LjEgMTYuMSAwIDAgMS0xMS0uNyAxNy45IDE3LjkgMCAwIDEtMTAuOS0xMy42IDkuNzQyIDkuNzQyIDAgMCAxLS4xLTEuOVptMTguMSAxMi4yYy40LTUuNS02LjktMTIuNi0xMy0xMi4xLjUgNi41IDcuNiAxMi44IDEzIDEyLjFaIiBvcGFjaXR5PSIuMSIvPjwvZz48L2c+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNjF2MTUxSDB6Ii8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0tMjAtOWgzMDJ2MTcwLjAxMUgtMjB6Ii8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImMiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0tMjAtOWgzMDJ2MTcwLjAxMUgtMjB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+";

const clickStyles = css<{ onClick?: MouseEventHandler }>`
  ${(props) =>
    /* onClick might be passed in the useClickableCard pattern */
    props.onClick &&
    css`
      :hover {
        cursor: pointer;
      }
    `}
`;

const StyledFillImage = styled(Image)<Omit<OakImageProps, "as">>`
  ${colorFilterStyle}
  ${clickStyles}
  object-fit: contain;
`;

const StyledResponsiveImage = styled(Image)<Omit<OakImageProps, "as">>`
  ${colorFilterStyle}
  ${clickStyles}
  width: 100%;
  height: auto;
`;

/**
 * OakImage is a wrapper round next/image which adds convenience style
 * props to the api
 */
export const OakImage = <C extends ElementType = typeof Image>({
  ...props
}: OakImageProps<C>) => {
  const {
    as,
    src,
    alt,
    width,
    height,
    sizes,
    $width = "100%",
    $position = "relative",
    $colorFilter,
    placeholder = "oak",
    unoptimized,
    imageProps,
    ...rest
  } = props;
  const finalPlaceholder = placeholder === "oak" ? oakPlaceholder : placeholder;
  // We don't know the aspect ratio of the image, so we must use fill and letterbox it to avoid stretching
  // Use $width and $height to set the width and height of the image container

  if (!width || !height) {
    return (
      <OakBox $position={$position} $width={$width} {...rest}>
        <StyledFillImage
          as={as ?? Image}
          src={src}
          alt={alt}
          sizes={sizes}
          fill
          $colorFilter={$colorFilter}
          placeholder={finalPlaceholder}
          unoptimized={unoptimized}
          {...imageProps}
        />
      </OakBox>
    );
  }

  // When we know the aspect ratio, we can use Image's repsonsive layout
  // Use $minWidth to set the width with auto height

  return (
    <OakBox $maxWidth={"all-spacing-0"} $position={$position} {...rest}>
      <StyledResponsiveImage
        as={as ?? Image}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        unoptimized={unoptimized}
        $colorFilter={$colorFilter}
        placeholder={finalPlaceholder}
        {...imageProps}
      />
    </OakBox>
  );
};
