import React from "react";
import styled, { css } from "styled-components";

import { OakFlex, OakHeading, OakTypography } from "@/components/atoms";
import { OakPromoTag, OakTertiaryButton } from "@/components/molecules";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";

export type OakUnitsHeaderProps = {
  isLegacy: boolean;
  subject: string;
  phase: string;
  curriculumHref: string | null;
  isCustomUnit?: boolean;
  customHeadingText?: string;
  banner?: React.ReactNode;
} & SizeStyleProps;

const OakUnitsHeaderCss = css<OakUnitsHeaderProps>`
  ${sizeStyle}
`;

const CurriculumDownloadButton = (
  props: Omit<OakUnitsHeaderProps, "subject">,
) => {
  return props.curriculumHref ? (
    <OakTertiaryButton
      element="a"
      iconName="chevron-right"
      href={props.curriculumHref}
      isTrailingIcon={true}
      $pt={["inner-padding-xs", "inner-padding-none"]}
    >
      {props.isLegacy
        ? "Curriculum download"
        : `Full ${props.phase.toLowerCase()} curriculum`}
    </OakTertiaryButton>
  ) : null;
};

const UnstyledComponent = (props: OakUnitsHeaderProps) => {
  const {
    subject,
    isLegacy,
    phase,
    curriculumHref: href,
    banner,
    isCustomUnit,
    customHeadingText,
    ...rest
  } = props;

  const subheading = isLegacy
    ? "Resources made during the pandemic to support remote teaching."
    : "Brand-new teaching resources, thoughtfully crafted by teachers for classroom needs.";

  const standardHeadingText = isLegacy
    ? "Units released in 2020-22"
    : `${subject} units`;

  return (
    <>
      <OakFlex
        $gap="space-between-sssx"
        $alignItems={["flex-start", "center"]}
        $justifyContent="space-between"
        $flexDirection={["column", "row"]}
        {...rest}
      >
        <OakFlex $gap="space-between-ssx" $flexDirection="column">
          <OakFlex $gap="space-between-ssx">
            <OakHeading $font="heading-5" tag="h2" $color={"text-primary"}>
              {isCustomUnit && customHeadingText
                ? customHeadingText
                : standardHeadingText}
            </OakHeading>
            {!isLegacy && !isCustomUnit && <OakPromoTag />}
          </OakFlex>
          {!isCustomUnit && (
            <OakTypography $font="body-2" $color={"text-primary"}>
              {subheading}
            </OakTypography>
          )}
        </OakFlex>
        {href && !isCustomUnit && (
          <CurriculumDownloadButton
            isLegacy={isLegacy}
            phase={phase}
            curriculumHref={href}
          />
        )}
      </OakFlex>
      {banner && <OakFlex $width={"100%"}>{banner}</OakFlex>}
    </>
  );
};

export const OakUnitsHeader = styled(UnstyledComponent)`
  ${OakUnitsHeaderCss}
`;
