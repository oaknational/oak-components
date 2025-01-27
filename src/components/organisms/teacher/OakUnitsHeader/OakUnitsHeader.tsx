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
  const { subject, isLegacy, phase, curriculumHref: href, ...rest } = props;

  const sentenceCaseSubject =
    subject.slice(0, 1).toUpperCase() + subject.slice(1).toLowerCase();

  const subheading = isLegacy
    ? "Resources made during the pandemic to support remote teaching."
    : "Brand-new teaching resources, thoughtfully crafted by teachers for classroom needs.";

  return (
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
            {isLegacy
              ? "Units released in 2020-22"
              : `${sentenceCaseSubject} units`}
          </OakHeading>
          {!isLegacy && <OakPromoTag />}
        </OakFlex>
        <OakTypography $font="body-2" $color={"text-primary"}>
          {subheading}
        </OakTypography>
      </OakFlex>
      {href && (
        <CurriculumDownloadButton
          isLegacy={isLegacy}
          phase={phase}
          curriculumHref={href}
        />
      )}
    </OakFlex>
  );
};

export const OakUnitsHeader = styled(UnstyledComponent)`
  ${OakUnitsHeaderCss}
`;
