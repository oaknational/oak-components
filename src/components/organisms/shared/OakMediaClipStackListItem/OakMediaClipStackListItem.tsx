import React from "react";
import styled from "styled-components";

import { OakBox } from "@/components/atoms/OakBox";
import {
  OakFlex,
  OakImage,
  OakTypography,
  OakHeading,
} from "@/components/atoms";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

export type OakMediaClipStackListItemProps = {
  title: string;
  href: string;
  imageUrl: string;
  imageAltText: string;
  numberOfClips: number;
};

const OakMediaClipStackListItemLink = styled(OakFlex)`
  animation-timing-function: ease-out;
  transition-duration: 300ms;

  &:hover {
    h5 {
      text-decoration: underline;
    }
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
`;

const ImageStackShadow = styled(OakBox)`
  box-shadow: ${parseColor("grey50")} 8px -6px;

  margin-top: 10px;
  margin-right: 15px;

  img {
    object-fit: fill;
  }

  &:after {
    content: "";
    position: absolute;
    top: -6px;
    left: 8px;
    width: 100%;
    height: 100%;
    box-shadow: ${parseColor("grey40")} 7px -4px;
    border-radius: ${parseBorderRadius("border-radius-s")};
  }
`;

export const OakMediaClipStackListItem = (
  props: OakMediaClipStackListItemProps,
) => {
  const { title, numberOfClips, imageUrl, imageAltText, href, ...rest } = props;

  return (
    <OakMediaClipStackListItemLink
      as="a"
      href={href}
      $display={"flex"}
      $flexDirection={["row", "column"]}
      $gap={["all-spacing-2", "space-between-none"]}
      {...rest}
    >
      <OakBox>
        <ImageStackShadow
          $borderRadius={"border-radius-s"}
          $width={["all-spacing-16", "all-spacing-18"]}
          $height={["all-spacing-12", "all-spacing-15"]}
          $position={"relative"}
          $mb={"space-between-xs"}
        >
          <OakImage
            src={imageUrl}
            alt={imageAltText}
            $borderRadius={"border-radius-s"}
            $overflow={"hidden"}
            $width={"100%"}
            $height={"100%"}
          />
        </ImageStackShadow>
      </OakBox>
      <OakBox>
        <OakHeading tag="h5" $font="heading-7" $color={"text-primary"}>
          {title}
        </OakHeading>
        <OakTypography $font="body-3" $color={"text-subdued"}>
          {numberOfClips} {numberOfClips === 1 ? "clip" : "clips"}
        </OakTypography>
      </OakBox>
    </OakMediaClipStackListItemLink>
  );
};

/**
 *
 * OakMediaClipStackListItemLink component is a link that displays a stack of videos with a title and number of clips
 *
 */
