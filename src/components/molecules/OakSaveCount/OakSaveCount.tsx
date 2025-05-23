import React from "react";
import styled from "styled-components";

import {
  OakBox,
  OakFlex,
  OakIcon,
  OakScreenReader,
  OakSpan,
} from "@/components/atoms";
import { InternalButton } from "@/components/atoms/InternalButton";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

export type OakSaveCountProps = {
  count: number;
  href: string;
  loading: boolean;
};

const StyledInternalButton = styled(InternalButton)`
  :hover {
    .oak-save-count {
      background-color: ${parseColor("bg-decorative1-main")};
    }
  }
  :focus-visible {
    .oak-save-count {
      box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
        ${parseDropShadow("drop-shadow-centered-grey")};
    }
  }
`;

export const OakSaveCount = ({ count, href, loading }: OakSaveCountProps) => {
  const iconName = count === 0 ? "bookmark-outlined" : "bookmark-filled";
  const showTruncatedCount = count > 99;
  const containerWidth = showTruncatedCount
    ? "all-spacing-11"
    : "all-spacing-10";

  return (
    <StyledInternalButton as="a" href={href}>
      <OakScreenReader>View my library</OakScreenReader>
      <OakFlex
        $width={["all-spacing-7", containerWidth]}
        $height="all-spacing-7"
        $background={
          loading ? "bg-btn-secondary-hover" : "bg-decorative1-subdued"
        }
        $alignItems="center"
        $justifyContent={["center", "initial"]}
        $pa={["inner-padding-none", "inner-padding-ssx"]}
        $borderRadius="border-radius-s"
        $borderColor={
          loading ? "border-neutral-lighter" : "bg-decorative1-main"
        }
        $ba="border-solid-s"
        className={loading ? undefined : "oak-save-count"}
      >
        <OakIcon
          iconName={iconName}
          data-testid={iconName}
          $width="all-spacing-6"
        />
        <OakBox
          $width="all-spacing-6"
          $textAlign="center"
          $display={["none", "block"]}
        >
          <OakSpan
            $font="heading-light-7"
            aria-label={`${count} saved unit${count === 1 ? "" : "s"}`}
          >
            {showTruncatedCount ? "99+" : count}
          </OakSpan>
        </OakBox>
      </OakFlex>
    </StyledInternalButton>
  );
};
