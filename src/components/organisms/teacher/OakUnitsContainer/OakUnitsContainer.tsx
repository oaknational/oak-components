import React from "react";
import styled, { css } from "styled-components";

import {
  OakUnitsHeader,
  OakUnitsHeaderProps,
} from "@/components/organisms/teacher/OakUnitsHeader";
import { OakFlex, OakUL } from "@/components/atoms";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { OakUiRoleToken } from "@/styles";

const OakULFlex = styled(OakUL)`
  display: flex;
  flex-direction: column;
  gap: ${parseSpacing("spacing-12")};
`;

export type OakUnitsContainerProps = OakUnitsHeaderProps & {
  showHeader: boolean;
  unitCards: Array<React.ReactNode>;
  backgroundColour?: OakUiRoleToken;
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
    isCustomUnit,
    customHeadingText,
    banner,
    backgroundColour = "bg-decorative3-very-subdued",
    ...rest
  } = props;
  return (
    <OakFlex
      $gap="spacing-16"
      $alignItems="center"
      {...rest}
      $background={isLegacy ? "bg-neutral" : backgroundColour}
      $flexDirection="column"
      $pa="spacing-16"
      $borderRadius="border-radius-m"
    >
      {showHeader && (
        <OakUnitsHeader
          isLegacy={isLegacy}
          curriculumHref={curriculumHref}
          phase={phase}
          subject={subject}
          $width="100%"
          isCustomUnit={isCustomUnit}
          customHeadingText={customHeadingText}
          banner={banner}
        />
      )}
      <OakULFlex aria-label="A list of units" $reset $width="100%">
        {unitCards.map((unitCard, index) => (
          <React.Fragment key={index}>{unitCard}</React.Fragment>
        ))}
      </OakULFlex>
    </OakFlex>
  );
};

export const OakUnitsContainer = styled(UnstyledComponent)`
  ${OakUnitsContainerCss}
`;
