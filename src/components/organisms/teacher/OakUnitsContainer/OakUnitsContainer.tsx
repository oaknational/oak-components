import React from "react";
import styled, { css } from "styled-components";

import { OakUnitsHeader } from "../OakUnitsHeader";

import { OakFlex, OakUL } from "@/components/atoms";

export type OakUnitsContainerProps = {
  isLegacy: boolean;
  showHeader: boolean;
  unitCards: Array<React.ReactNode>;
  subject: string;
  phase: string;
  curriculumHref: string;
};

const OakUnitsContainerCss = css<OakUnitsContainerProps>``;

const UnstyledComponent = (props: OakUnitsContainerProps) => {
  const {
    isLegacy,
    showHeader,
    unitCards,
    curriculumHref,
    phase,
    subject,
    ...rest
  } = props;
  return (
    <OakFlex
      $gap="space-between-s"
      $alignItems="center"
      {...rest}
      $background={isLegacy ? "bg-neutral" : "bg-decorative3-very-subdued"}
      $flexDirection="column"
      $pa="inner-padding-m"
      $borderRadius="border-radius-m"
    >
      {showHeader && (
        <OakUnitsHeader
          isLegacy={isLegacy}
          href={curriculumHref}
          phase={phase}
          subject={subject}
          $width="100%"
        />
      )}
      <OakUL aria-label="A list of units" $reset $width="100%">
        {...unitCards}
      </OakUL>
    </OakFlex>
  );
};

export const OakUnitsContainer = styled(UnstyledComponent)`
  ${OakUnitsContainerCss}
`;
