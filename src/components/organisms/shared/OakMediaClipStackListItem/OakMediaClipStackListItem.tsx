import React from "react";
import styled from "styled-components";

import { OakBox } from "@/components/atoms/OakBox";
import {
  OakFlex,
  OakImage,
  OakTypography,
  OakHeading,
  OakIcon,
  placeholderStyles,
  oakPlaceholder,
} from "@/components/atoms";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseTransitions } from "@/styles/helpers/parseTransitions";
import { getMediaQuery } from "@/styles/utils/responsiveStyle";

export type OakMediaClipStackListItemProps = {
  title: string;
  href: string;
  imageUrl: string;
  imageAltText: string;
  numberOfClips: number;
};

const OakMediaClipStackListItemLink = styled(OakFlex)`
  transition: ${parseTransitions("standard-ease")};

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

  &:hover,
  &:focus-visible {
    img {
      -webkit-filter: brightness(80%);
      transition: ${parseTransitions("standard-ease")};
    }
  }
`;

const ImageStackShadow = styled(OakBox)`
  box-shadow: ${parseColor("grey50")} 8px -6px;

  margin-top: 10px;
  margin-right: 15px;

  img {
    object-fit: fill;
    -webkit-filter: brightness(100%);
    ${placeholderStyles}
  }

  &::after {
    content: "";
    position: absolute;
    top: -6px;
    left: 8px;
    width: 100%;
    height: 100%;
    box-shadow: ${parseColor("grey40")} 7px -4px;
    border-radius: ${parseBorderRadius("border-radius-s")};
  }

  @media ${getMediaQuery("mobile")} {
    box-shadow: ${parseColor("grey50")} 4px -3px;

    &::after {
      top: -3px;
      left: 4px;
      box-shadow: ${parseColor("grey40")} 4px -3px;
    }
  }

  #play-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -16px;
    margin-top: -16px;
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
      $flexDirection={["row", "row", "column"]}
      $gap={["all-spacing-2", "all-spacing-2", "space-between-none"]}
      $width={"fit-content"}
      {...rest}
    >
      <OakBox>
        <ImageStackShadow
          $borderRadius={"border-radius-s"}
          $width={["all-spacing-15", "all-spacing-15", "all-spacing-18"]}
          $height={["all-spacing-11", "all-spacing-11", "all-spacing-15"]}
          $position={"relative"}
          $mb={["space-between-none", "space-between-none", "space-between-xs"]}
          $showOakPlaceholder={!imageUrl ? true : false}
          src={imageUrl ?? oakPlaceholder}
          alt={!imageUrl ? "oak" : ""}
        >
          <OakImage
            src={imageUrl}
            alt={imageAltText}
            $borderRadius={"border-radius-s"}
            $overflow={"hidden"}
            $width={"100%"}
            $height={"100%"}
          />
          <OakIcon
            id="play-icon"
            iconName="play"
            $width={"all-spacing-7"}
            $height={"all-spacing-7"}
          />
        </ImageStackShadow>
      </OakBox>
      <OakBox
        $mb={["space-between-none", "space-between-none", "space-between-s"]}
      >
        <OakHeading tag="h3" $font="heading-7" $color={"text-primary"}>
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
