import React from "react";
import styled, { css } from "styled-components";

import { OakFlex, OakHeading, OakTypography } from "@/components/atoms";
import { OakPromoTag, OakTertiaryButton } from "@/components/molecules";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";

export type OakUnitsHeaderProps = {
  isLegacy: boolean;
  subject: string;
  phase: string;
  href: string;
} & SizeStyleProps;

const OakUnitsHeaderCss = css<OakUnitsHeaderProps>`
  ${sizeStyle}
`;

const CurriculumDownloadButton = (props: {
  isLegacy: boolean;
  phase: string;
  href: string;
}) => {
  return (
    <OakTertiaryButton
      element="a"
      iconName="chevron-right"
      href={props.href}
      isTrailingIcon={true}
    >
      {props.isLegacy
        ? "Curriculum download"
        : `Full ${props.phase} curriculum`}
    </OakTertiaryButton>
  );
};

const UnstyledComponent = (props: OakUnitsHeaderProps) => {
  const { subject, isLegacy, phase, href, ...rest } = props;
  const sentenceCaseSubject =
    subject.slice(0, 1).toUpperCase() + subject.slice(1).toLowerCase();
  return (
    <OakFlex
      $gap="space-between-sssx"
      $alignItems="center"
      $justifyContent="space-between"
      {...rest}
    >
      <OakFlex $gap="space-between-ssx" $flexDirection="column">
        <OakFlex $gap="space-between-ssx">
          <OakHeading $font="heading-4" tag="h4">
            {isLegacy
              ? "Units released in 2020-22"
              : `${sentenceCaseSubject} units`}
          </OakHeading>
          {!isLegacy && <OakPromoTag />}
        </OakFlex>
        <OakTypography $font="body-2">
          Brand-new teaching resources, thoughtfully crafted by teachers for
          classroom needs.
        </OakTypography>
      </OakFlex>
      <CurriculumDownloadButton isLegacy={isLegacy} phase={phase} href={href} />
    </OakFlex>
  );
};

export const OakUnitsHeader = styled(UnstyledComponent)`
  ${OakUnitsHeaderCss}
`;
