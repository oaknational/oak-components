import React, { ElementType } from "react";
import styled from "styled-components";

import {
  InternalButton,
  InternalButtonProps,
} from "@/components/atoms/InternalButton";
import {
  OakFlex,
  OakIcon,
  OakIconName,
  OakImage,
  OakSpan,
} from "@/components/atoms";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { OakColorFilterToken } from "@/styles/theme/color";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakPromoTag } from "@/components/molecules";
import { assets } from "@/image-map";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

const StyledButton = styled(InternalButton)`
  :hover .buttonText {
    text-decoration: underline;
    color: ${parseColor("black")};
  }

  :focus .focusUnderline {
    display: block;
  }

  :focus .activeUnderline {
    display: none;
  }
`;

const FocusUnderline = styled(OakImage)`
  display: none;
  min-width: 100%;
  filter: ${parseColorFilter("lemon")}
    drop-shadow(${parseDropShadow("drop-shadow-black")});
  position: absolute;
  bottom: 0;
  transform: rotate(-2deg);
`;

export type OakHomepageTabButtonProps = InternalButtonProps & {
  iconName: OakIconName;
  isActive?: boolean;
  showNewIcon?: boolean;
};

export const OakHomepageTabButton = <C extends ElementType = "button">(
  props: OakHomepageTabButtonProps & PolymorphicPropsWithoutRef<C>,
) => {
  const { element = "button", iconName, isActive } = props;

  const color: OakColorFilterToken = isActive ? "black" : "grey60";

  return (
    <StyledButton element={element}>
      <OakFlex $flexDirection={"column"} $alignItems={"center"}>
        <OakIcon
          $width={["all-spacing-9", "all-spacing-14", "all-spacing-14"]}
          $height={["all-spacing-9", "all-spacing-14", "all-spacing-14"]}
          iconName={iconName}
          $colorFilter={color}
        />
        <OakFlex
          $alignItems={"center"}
          $minHeight="all-spacing-9"
          $gap="space-between-sssx"
          $position={"relative"}
          $pb={"inner-padding-ssx"}
        >
          <OakSpan
            className="buttonText"
            $font={["body-3-bold", "heading-7"]}
            $color={color}
          >
            Inner text
          </OakSpan>
          <OakPromoTag display={["none", "flex"]} width={"all-spacing-9"} />
          {isActive && (
            <OakImage
              className="activeUnderline"
              src={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/${assets.underline}`}
              alt="underline"
              $minWidth={"100%"}
              width={242}
              height={7}
              $colorFilter={"black"}
              $display={"block"}
              $position={"absolute"}
              $bottom={"all-spacing-0"}
            />
          )}
          <FocusUnderline
            className="focusUnderline"
            src={`https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/${assets.underline}`}
            alt="underline"
            width={242}
            height={7}
          />
        </OakFlex>
      </OakFlex>
    </StyledButton>
  );
};
