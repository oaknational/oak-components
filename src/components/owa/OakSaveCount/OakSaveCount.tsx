import React from "react";
import styled from "styled-components";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakIcon } from "@/components/images-and-icons/OakIcon";
import { OakSpan } from "@/components/typography/OakSpan";
import { InternalButton } from "@/components/internal-components/InternalButton";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

export type OakSaveCountProps = {
  /**
   * The number of saved items.
   *
   * Setting this will show the count inline with the label.
   */
  count?: number;
  /**
   * The label to display inline with the count.
   */
  label?: string;
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

export const OakSaveCount = ({
  count,
  href,
  loading,
  label = "My library",
}: OakSaveCountProps) => {
  const hasCount = typeof count === "number";
  const iconName =
    hasCount && count > 0 ? "bookmark-filled" : "bookmark-outlined";
  const showTruncatedCount = hasCount && count > 99;
  const ariaLabel = hasCount
    ? `${label}: ${count} saved unit${count === 1 ? "" : "s"}`
    : label;

  return (
    <StyledInternalButton as="a" href={href} aria-label={ariaLabel}>
      <OakFlex
        $width="fit-content"
        $minWidth="spacing-32"
        $height="spacing-32"
        $background={
          loading ? "bg-btn-secondary-hover" : "bg-decorative1-subdued"
        }
        $font="heading-light-7"
        $alignItems="center"
        $justifyContent={["center", "initial"]}
        $pl={[null, "spacing-4"]}
        $pr={[null, "spacing-8"]}
        $borderRadius="border-radius-s"
        $borderColor={
          loading ? "border-neutral-lighter" : "bg-decorative1-main"
        }
        $ba="border-solid-s"
        className={loading ? undefined : "oak-save-count"}
        $gap="spacing-4"
      >
        <OakIcon
          iconName={iconName}
          data-testid={iconName}
          $width="spacing-24"
        />
        {/*
         * We hide the label and count on mobile,
         * but show them on desktop.
         */}
        <OakBox $display={["none", "contents"]}>
          {label}
          {hasCount && (
            <OakSpan>({showTruncatedCount ? "99+" : count})</OakSpan>
          )}
        </OakBox>
      </OakFlex>
    </StyledInternalButton>
  );
};
