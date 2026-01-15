import React from "react";
import styled from "styled-components";

import {
  OakBox,
  OakGrid,
  OakGridArea,
  OakImage,
  OakLI,
  OakUL,
} from "@/components/atoms";
import { subjectHeroImages, SubjectName, icons } from "@/image-map";
import { OakCombinedColorToken } from "@/styles";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";

export type OakProgrammeHeaderProps = {
  /**
   * The main content of the programme header.
   */
  children: React.ReactNode;
  /**
   * A slot for content that appears above the main content
   *
   * This content will span the full width of the grid. Ideal for breadcrumbs.
   */
  headerSlot?: React.ReactNode;
  /**
   * A slot for content that appears below the main content
   *
   * This content will span the full width of the grid up to the tablet breakpoing and 7 columns from desktop.
   *
   * Ideal for action buttons and links.
   */
  footerSlot?: React.ReactNode;
  /**
   * The subject of the programme.
   */
  subject: SubjectName;
  /**
   * The background color of the programme header. Defaults to transparent.
   */
  background?: Extract<OakCombinedColorToken, `bg-decorative${number}-main`>;
};

const StyledContentArea = styled(OakGridArea)`
  ${OakUL} {
    list-style: none;
    padding: 0;

    ${OakLI} {
      position: relative;
      padding-left: ${parseSpacing("spacing-24")};
      margin-left: ${parseSpacing("spacing-4")};
      text-wrap: balance;

      &:not(:last-child) {
        margin-bottom: ${parseSpacing("spacing-12")};
      }

      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        left: -${parseSpacing("spacing-4")};
        top: 0;
        width: 1lh;
        height: 1lh;
        background-image: url(${getImageUrl(icons.tick)});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        filter: ${parseColorFilter("icon-brand")};
      }
    }
  }
`;

/**
 * Header component for programme pages
 *
 * The header slot and footer slot are optional
 *
 * ```
 * Grid layout
 *
 * MOBILE: 12       TABLET: 7, 5                   DESKTOP: 7, 5
 * |-------------|  |-------------|-------------|  |-------------|-------------|
 * | headerSlot  |  | headerSlot  | headerSlot  |  | headerSlot  | headerSlot  |
 * | subjectHero |  | contentArea | subjectHero |  | contentArea | subjectHero |
 * | contentArea |  | footerSlot  | footerSlot  |  | footerSlot  | subjectHero |
 * | footerSlot  |  |-------------|-------------|  |-------------|-------------|
 * |-------------|
 * ```
 */
export const OakProgrammeHeader = ({
  children,
  headerSlot,
  footerSlot,
  subject,
  background,
}: OakProgrammeHeaderProps) => {
  const subjectHeroImage = subjectHeroImages[subject];

  return (
    <OakBox
      $background={background}
      $ph={["spacing-20", "spacing-40"]}
      $pv={["spacing-40", "spacing-64"]}
    >
      <OakGrid
        $cg="spacing-16"
        $maxWidth="spacing-1280"
        $mh="auto"
        $rg={["spacing-32", "spacing-48"]}
      >
        {headerSlot && (
          <OakGridArea $colSpan={12} $order={1}>
            {headerSlot}
          </OakGridArea>
        )}
        {/* Content area: 7 columns on desktop, full width on mobile */}
        <StyledContentArea
          $colSpan={[12, 7]}
          $order={[3, 2]}
          $flexDirection="column"
          $justifyContent="center"
          $gap="spacing-24"
        >
          {children}
        </StyledContentArea>

        {footerSlot && (
          <OakGridArea
            $colSpan={[12, 12, 7]}
            $order={4}
            $flexDirection="column"
          >
            {footerSlot}
          </OakGridArea>
        )}
        {/* Image area: 5 columns on desktop, full width on mobile */}
        <OakGridArea
          $colSpan={[12, 5]}
          $rowSpan={[1, 1, footerSlot ? 2 : 1]}
          $order={[2, 3]}
          $flexDirection="column"
          $alignItems={["center", "flex-start"]}
          $justifyContent="center"
        >
          {subjectHeroImage && (
            <OakImage
              src={getImageUrl(subjectHeroImage)}
              // alt is empty because the image is decorative and does not need to be described to screen readers
              alt=""
              $width="100%"
              $height="100%"
              $minHeight={["spacing-240", "spacing-360"]}
              $objectFit="contain"
              placeholder="empty"
              unoptimized
            />
          )}
        </OakGridArea>
      </OakGrid>
    </OakBox>
  );
};

function getImageUrl(imageId: string) {
  return `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/${imageId}`;
}
