import React from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/atoms/OakFlex";
import { StyledButtonWrapper } from "@/components/molecules/InternalShadowRectButton";
import {
  OakBox,
  OakHeading,
  OakIcon,
  OakImage,
  OakP,
} from "@/components/atoms";
import { OakCombinedColorToken } from "@/styles";
import { InternalButton } from "@/components/atoms/InternalButton";
import { sizeStyle, SizeStyleProps } from "@/styles/utils/sizeStyle";
import { positionStyle } from "@/styles/utils/positionStyle";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakTagFunctional, OakTimer } from "@/components/molecules";

type MuxPlayingState = "standard" | "playing" | "played";

export type OakMediaClipProps = {
  thumbnailImage?: string;
  timeCode: string;
  clipName: string;
  learningCycle?: string;
  muxPlayingState: MuxPlayingState;
  onClick: () => void;
  disabled?: boolean;
  imageAltText: string;
  isAudioClip?: boolean;
};

type MediaClipStyles = {
  [K in
    | "defaultBackground"
    | "defaultTextColor"
    | "hoverBackground"
    | "hoverTextColor"
    | "clipNameTitle"]: OakCombinedColorToken;
};

const getButtonStyles = (muxPlayingState: MuxPlayingState): MediaClipStyles => {
  switch (muxPlayingState) {
    case "standard":
      return {
        defaultBackground: "bg-primary",
        defaultTextColor: "text-inverted",
        hoverBackground: "bg-btn-secondary-hover",
        hoverTextColor: "text-primary",
        clipNameTitle: "text-primary",
      };
    case "playing":
      return {
        defaultBackground: "bg-decorative1-subdued",
        defaultTextColor: "text-primary",
        hoverBackground: "bg-decorative1-main",
        hoverTextColor: "text-primary",
        clipNameTitle: "text-primary",
      };
    case "played":
      return {
        defaultBackground: "bg-primary",
        defaultTextColor: "text-subdued",
        hoverBackground: "bg-btn-secondary-hover",
        hoverTextColor: "text-primary",
        clipNameTitle: "text-subdued",
      };
  }
};
const MediaButtonWrapper = styled(StyledButtonWrapper)`
  min-height: 72px;
  width: 100%;
`;

const ImageBox = styled(OakFlex)<{ disabled?: boolean }>`
  img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) =>
    props.disabled &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: lightgray;
        opacity: 0.5;
        border-radius: 2px;
      }
    `}
`;

const StyledInternalButton = styled(InternalButton)<
  SizeStyleProps & {
    $defaultTextColor: OakCombinedColorToken;
    $defaultBackground: OakCombinedColorToken;
    $defaultBorderColor: OakCombinedColorToken;
    $hoverTextColor: OakCombinedColorToken;
    $hoverBackground: OakCombinedColorToken;
    $hoverBorderColor: OakCombinedColorToken;
    $disabledBackground: OakCombinedColorToken;
    $disabledBorderColor: OakCombinedColorToken;
    $disabledTextColor: OakCombinedColorToken;
  }
>`
  ${positionStyle}
  ${sizeStyle}
  display: inline-block;
  transition: opacity 300ms ease-out;
  ${(props) => css`
    &:hover {
      h4 {
        text-decoration: ${props.muxPlayingState === "standard"
          ? "underline"
          : "none"};
      }
      color: ${parseColor(props.$hoverTextColor)};
      background: ${parseColor(props.$hoverBackground)};
      border-color: ${parseColor(props.$hoverBorderColor)};
    }
    &:active {
      background: ${parseColor(props.$defaultBackground)};
      border-color: ${parseColor(props.$defaultBorderColor)};
      color: ${parseColor(props.$defaultTextColor)};
    }
    &:disabled {
      background: ${parseColor(props.$disabledBackground)};
      border-color: ${parseColor(props.$disabledBorderColor)};
      color: ${parseColor(props.$disabledTextColor)};
    }
  `}
`;

export const OakMediaClip = ({
  thumbnailImage,
  timeCode,
  clipName,
  learningCycle,
  muxPlayingState,
  onClick,
  disabled,
  imageAltText,
  isAudioClip,
}: OakMediaClipProps) => {
  const buttonStyles = getButtonStyles(muxPlayingState);

  return (
    <MediaButtonWrapper
      $position={"relative"}
      $borderRadius={"border-radius-s"}
    >
      <OakBox
        className="grey-shadow"
        $position={"absolute"}
        $borderRadius={"border-radius-s"}
        $width={"100%"}
        $height={"100%"}
        $top="all-spacing-0"
      />

      <OakBox
        className="yellow-shadow"
        $position={"absolute"}
        $borderRadius={"border-radius-s"}
        $width={"100%"}
        $height={"100%"}
        $top="all-spacing-0"
      />
      <StyledInternalButton
        element={"button"}
        className="internal-button"
        $width={"100%"}
        $height={"100%"}
        $background={buttonStyles.defaultBackground}
        $borderColor="transparent"
        $borderRadius={"border-radius-s"}
        $position={"relative"}
        disabled={disabled}
        defaultBorderColor="transparent"
        $color={buttonStyles.defaultTextColor}
        $hoverBackground={buttonStyles.hoverBackground}
        $hoverBorderColor="transparent"
        $hoverTextColor="text-primary"
        $disabledBackground="bg-btn-secondary-disabled"
        $disabledBorderColor="text-disabled"
        $disabledTextColor="text-disabled"
        justifyContent={"flex-start"}
        onClick={onClick}
        $pa={"inner-padding-xs"}
        muxPlayingState={muxPlayingState}
      >
        <OakFlex $flexDirection={"row"} $alignItems={"center"} $width={"100%"}>
          <>
            <ImageBox
              $height={"all-spacing-10"}
              $width={"all-spacing-15"}
              $borderRadius={"border-radius-xs"}
              $mr={"space-between-s"}
              $position={"relative"}
              disabled={disabled}
              $flexShrink={0}
            >
              {!isAudioClip && thumbnailImage ? (
                <OakImage
                  fill
                  $height={"100%"}
                  $width={"100%"}
                  src={thumbnailImage}
                  alt={imageAltText}
                  $borderRadius={"border-radius-xs"}
                />
              ) : (
                <OakIcon
                  fill
                  $height={"100%"}
                  $width={"100%"}
                  iconName={"audio-clip-small"}
                  alt={imageAltText}
                  $borderRadius={"border-radius-xs"}
                />
              )}
              <OakTimer
                timeCode={timeCode}
                $position={"absolute"}
                $bottom={"space-between-sssx"}
                $right={"space-between-sssx"}
              />
            </ImageBox>

            <OakFlex
              $width={"100%"}
              $flexDirection={"column"}
              $gap={"space-between-sssx"}
              $overflow={"hidden"}
            >
              <OakHeading
                $textOverflow={"ellipsis"}
                tag="h4"
                $font={"heading-7"}
                $color={
                  !disabled ? buttonStyles.clipNameTitle : "text-disabled"
                }
              >
                {clipName}
              </OakHeading>
              {learningCycle && (
                <OakP
                  $color={!disabled ? "text-subdued" : "text-disabled"}
                  $font={"body-3"}
                >
                  {learningCycle}
                </OakP>
              )}
            </OakFlex>
          </>
          {muxPlayingState === "played" && !disabled && (
            <OakFlex $flexGrow={1}>
              <OakTagFunctional label="Played" $background={"bg-neutral"} />
            </OakFlex>
          )}
        </OakFlex>
      </StyledInternalButton>
    </MediaButtonWrapper>
  );
};

/**
 *
 * OakMediaClip component adapted from the Internal button component, has 4 different states, standard, playing, played and disabled
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * - `onClick`
 *
 */
