import React, {
  ComponentPropsWithoutRef,
  ElementType,
  MouseEventHandler,
} from "react";
import Image, { ImageProps } from "next/image";
import styled, { css } from "styled-components";

import { useShowPlaceholder } from "./useShowPlaceholder";

import {
  ColorFilterStyleProps,
  colorFilterStyle,
} from "@/styles/utils/colorFilterStyle";
import { OakBox, OakBoxProps } from "@/components/atoms/OakBox";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

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

export type StyledImageProps = Omit<OakImageProps, "as"> & {
  $showOakPlaceholder: boolean;
  as: ElementType;
};

export const oakPlaceholder =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZmlsbD0iIzIyMiIgZD0iTTI4Ljc3OSAxOS4xNzZhMjcuMTkxIDI3LjE5MSAwIDAgMC0zLjggMS42IDE2LjcgMTYuNyAwIDAgMC03LjEgOC40YzAgLjEtLjEuMi0uMS4zLS43IDIuNC0uNiAyIDEuMyAyLjMgMS45LjMgMSAuNSAxIDEuMy0uMSA4LjggNC4xIDE1LjEgMTEuNCAxOS42YTEuNSAxLjUgMCAwIDAgMS43LjJjNS43LTIuNiA5LjMtNyAxMC4zLTEzLjJhMSAxIDAgMCAxIDEtMWwzLS4yYy44IDAgMS4zLjIgMS4yIDEuMmExNy45IDE3LjkgMCAwIDEtMy4yIDkuMiAyMy43IDIzLjcgMCAwIDEtMTAuOSA5LjEgNS40MDEgNS40MDEgMCAwIDEtNC41LS4yIDI2LjI5OCAyNi4yOTggMCAwIDEtOC41LTYuNiAyNS45IDI1LjkgMCAwIDEtNi40LTE0LjRjMC0uNi0uMi0uNy0uOC0uOC0yLjUtLjQtMi41LS4xLTIuMy0yLjlhMTkuMyAxOS4zIDAgMCAxIDEwLjgtMTYuNiAzOC45OTkgMzguOTk5IDAgMCAxIDUuNy0yLjEgMi4xIDIuMSAwIDAgMCAuOS0xLjMgMTQuMSAxNC4xIDAgMCAxIDMuNS02LjNsLjMtLjNjMS45LTIgMi42LTIgNC4zLjJsLjQuNWMxLjEgMS4xIDEgMS41LS4xIDIuNmExMS45IDExLjkgMCAwIDAtMy4yIDQuNCAxNi45IDE2LjkgMCAwIDEgNy41IDIuM2M1LjcgMy41IDkuMiA4LjMgOS45IDE1IC4wMTYuOTAxLS4wMTcgMS44MDItLjEgMi43IDAgLjgtLjYgMS0xLjIgMS4yYTE2LjEgMTYuMSAwIDAgMS0xMS0uNyAxNy45MDEgMTcuOTAxIDAgMCAxLTEwLjktMTMuNiA5Ljc5NiA5Ljc5NiAwIDAgMS0uMS0xLjlabTE4LjEgMTIuMmMuNC01LjUtNi45LTEyLjYtMTMtMTIuMS41IDYuNSA3LjYgMTIuOCAxMyAxMi4xWiIgb3BhY2l0eT0iLjEiLz48L3N2Zz4=";

const clickStyles = css<{ onClick?: MouseEventHandler }>`
  ${(props) =>
    /* onClick might be passed in the useClickableCard pattern */
    props.onClick &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
`;

export const placeholderStyles = css<StyledImageProps>`
  ${(props) =>
    props.$showOakPlaceholder &&
    css`
      background-image: url(${oakPlaceholder});
      background-color: ${parseColor("bg-decorative2-very-subdued")};
      background-size: ${parseSpacing("all-spacing-11")};
      background-position: center;
      background-repeat: no-repeat;
    `}
`;

const StyledFillImage = styled(Image)<StyledImageProps>`
  ${colorFilterStyle}
  ${clickStyles}
  ${placeholderStyles}
  ${(props) => css`
    object-fit: ${props.$objectFit ? props.$objectFit : "contain"};
  `}
`;

const StyledResponsiveImage = styled(Image)<StyledImageProps>`
  ${colorFilterStyle}
  ${clickStyles}
  ${placeholderStyles}
  width: 100%;
  height: auto;
`;

/**
 * A wrapper for NextJs's Image component.
 *
 * Use this for all image types as well as icons.
 * Can accept remote urls provided they are whitelisted in next.config.js and relative urls for local images provided they begin with a "/".
 * Set the width and height of the image through the `$width` and `$height` props when the aspect ratio is not known. This will letterbox the image to avoid stretching.
 * Alternatively pass `width` and `height` props when the aspect ratio is known and use $minWidth to set the rendered width, avoiding letter-boxing.
 * NB. for letterboxed images, $background controls the color of the letterbox not the image.
 * `positionStyle` and `spacingStyle` props are also exposed for container.
 * sizes is exposed for further optimisation read Next docs for more info.
 *
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
    $objectFit,
    onLoad,
    onError,
    ...rest
  } = props;

  const finalPlaceholder = placeholder === "oak" ? undefined : placeholder;
  const { showPlaceholder, handleComplete, setImg } = useShowPlaceholder();

  // We don't know the aspect ratio of the image, so we must use fill and letterbox it to avoid stretching
  // Use $width and $height to set the width and height of the image container
  if (!width || !height) {
    return (
      <OakBox $position={$position} $width={$width} {...rest}>
        <StyledFillImage
          ref={setImg}
          as={as ?? Image}
          src={src}
          alt={alt}
          sizes={sizes}
          fill
          $colorFilter={$colorFilter}
          placeholder={finalPlaceholder}
          $showOakPlaceholder={placeholder === "oak" && showPlaceholder}
          unoptimized={unoptimized}
          onLoad={handleComplete(onLoad)}
          onError={handleComplete(onError)}
          $objectFit={$objectFit}
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
        ref={setImg}
        as={as ?? Image}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        unoptimized={unoptimized}
        $colorFilter={$colorFilter}
        placeholder={finalPlaceholder}
        $showOakPlaceholder={placeholder === "oak" && showPlaceholder}
        onLoad={handleComplete(onLoad)}
        onError={handleComplete(onError)}
        {...imageProps}
      />
    </OakBox>
  );
};
