import { OakFlex, OakHeading, OakTypography } from "@/components/atoms";
import { OakPromoTag } from "@/components/molecules";
import React from "react";
import styled, { css } from "styled-components";

export type OakUnitsHeaderProps = {
  isLegacy: boolean;
  subject: string;
};

// By adding the style css utils to this components css your component will be able to accept corresponding props and prop values.
// you can also add custom styles to the component by adding the styles to the css template literal below

const OakUnitsHeaderCss = css<OakUnitsHeaderProps>``;

const UnstyledComponent = (props: OakUnitsHeaderProps) => {
  const { subject, isLegacy } = props;
  const sentenceCaseSubject =
    subject.slice(0, 1).toUpperCase() + subject.slice(1).toLowerCase();
  return (
    <OakFlex $gap="space-between-ssx" $flexDirection="column">
      <OakFlex $gap="space-between-ssx">
        <OakHeading $font="heading-4" tag="h4">
          {sentenceCaseSubject} units
        </OakHeading>
        {!isLegacy && <OakPromoTag />}
      </OakFlex>
      <OakTypography $font="body-2">
        Brand-new teaching resources, thoughtfully crafted by teachers for
        classroom needs.
      </OakTypography>
    </OakFlex>
  );
};

export const OakUnitsHeader = styled(UnstyledComponent)`
  ${OakUnitsHeaderCss}
`;
