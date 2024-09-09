import React, { ElementType } from "react";
import styled from "styled-components";

import {
  InternalButton,
  InternalButtonProps,
} from "@/components/atoms/InternalButton";
import {
  OakBox,
  OakFlex,
  OakIcon,
  OakIconName,
  OakSpan,
} from "@/components/atoms";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { OakColorFilterToken } from "@/styles/theme/color";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakPromoTag } from "@/components/molecules";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { InternalStyledSvg } from "@/components/atoms/InternalStyledSvg";
import { Underline } from "@/svgs";

const StyledButton = styled(InternalButton)`
  :hover .buttonText {
    text-decoration: underline;
    color: ${parseColor("black")};
  }

  :focus .focusUnderlineSvg {
    display: block;
    filter: ${parseColorFilter("lemon")}
      drop-shadow(${parseDropShadow("drop-shadow-black")});
    transform: rotate(-2deg);
  }

  :focus .activeUnderline {
    display: none;
  }

  :focus .focusUnderline {
    display: block;
  }
  .activeUnderlineSvg,
  .focusUnderlineSvg {
    position: absolute;
    bottom: 0;
  }
`;

export type OakHomepageTabButtonProps = InternalButtonProps & {
  title: string;
  iconName: OakIconName;
  isActive?: boolean;
  showNewIcon?: boolean;
};

export const OakHomepageTabButton = <C extends ElementType = "button">(
  props: OakHomepageTabButtonProps & PolymorphicPropsWithoutRef<C>,
) => {
  const {
    element = "button",
    iconName,
    isActive,
    title,
    showNewIcon,
    ...rest
  } = props;

  const color: OakColorFilterToken = isActive ? "black" : "grey60";

  return (
    <StyledButton
      element={element}
      aria-current={isActive ? "page" : null}
      title={title}
      disabled={isActive}
      {...rest}
    >
      <OakFlex
        $height={"100%"}
        $flexDirection={"column"}
        $alignItems={"center"}
        $justifyContent={"space-between"}
        $gap={"space-between-s"}
      >
        <OakIcon
          $width={["all-spacing-9", "all-spacing-14", "all-spacing-14"]}
          $height={["all-spacing-9", "all-spacing-14", "all-spacing-14"]}
          iconName={iconName}
          $colorFilter={color}
          alt=""
        />

        <OakFlex
          $alignItems={"center"}
          $justifyContent={"center"}
          $gap="space-between-sssx"
          $position={"relative"}
          $pb={["inner-padding-s", "inner-padding-xl"]} // this is needed to position the hand drawn underline
        >
          <OakSpan
            className="buttonText"
            $font={["body-3-bold", "heading-7"]}
            $color={color}
            $textAlign={"center"}
          >
            {title}
          </OakSpan>

          {showNewIcon && (
            <OakPromoTag display={["none", "flex"]} width={"all-spacing-9"} />
          )}

          {isActive && (
            <OakBox
              className="activeUnderline"
              $position={"absolute"}
              $bottom={"all-spacing-0"}
              $width={"100%"}
            >
              <InternalStyledSvg
                className="activeUnderlineSvg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="6"
                width={"100%"}
              >
                <Underline />
              </InternalStyledSvg>
            </OakBox>
          )}
          <OakBox
            className="focusUnderline"
            $display={"none"}
            $position={"absolute"}
            $bottom={"all-spacing-0"}
            $width={"100%"}
          >
            <InternalStyledSvg
              className="focusUnderlineSvg"
              xmlns="http://www.w3.org/2000/svg"
              height="8"
              width={"100%"}
              preserveAspectRatio="none"
            >
              <Underline />
            </InternalStyledSvg>
          </OakBox>
        </OakFlex>
      </OakFlex>
    </StyledButton>
  );
};
