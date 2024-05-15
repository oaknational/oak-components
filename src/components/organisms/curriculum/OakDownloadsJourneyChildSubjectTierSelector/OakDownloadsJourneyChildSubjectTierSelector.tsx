import React, { useState } from "react";
import styled, { css } from "styled-components";

import { OakBox, OakHeading } from "../../../atoms";

// import { parseSpacing } from "@/styles/helpers/parseSpacing";
import {
  OakPrimaryButton,
  OakRadioButton,
  OakRadioGroup,
} from "@/components/molecules";

// const StyledOakFlex = styled(OakFlex)`
//   width: ${parseSpacing("all-spacing-6")};
// `;
// For example you could restyle the OakFlex component by adding the styles to the css template literal below
export interface Tier {
  tier: string;
  tier_slug: string;
}
export interface Subject {
  subject: string;
  subject_slug: string;
}

export type OakDownloadsJourneyChildSubjectTierSelectorProps = {
  /* An array of Tier objects containing `tier` and `tier_slug` */
  tiers: Tier[];
  /* An array of Subject objects containing `subject` and `subject_slug` */
  childSubjects?: Subject[];
  /* Callback function which returns the selected tier and subject once the Next button is pressed. */
  getTierSubjectValues: (
    tierSlug: string,
    childSubjectSlug: string | null,
  ) => void;
};

// By adding the style css utils to this components css your component will be able to accept corresponding props and prop values.
// you can also add custom styles to the component by adding the styles to the css template literal below

const OakDownloadsJourneyChildSubjectTierSelectorCss = css<OakDownloadsJourneyChildSubjectTierSelectorProps>``;

/**
 *
 * add default and custom styles to the component by adding the styles to the css template literal below
 *
 * ${typographyStyle}
 * ${colorStyle}
 * ${spacingStyle}
 * ${displayStyle}
 * ${borderStyle}
 * ${dropShadowStyle}
 * ${colorFilterStyle}
 *
 */

const UnstyledComponent = (
  props: OakDownloadsJourneyChildSubjectTierSelectorProps,
) => {
  const { childSubjects, tiers, getTierSubjectValues } = props;

  const [childSubjectSelected, setChildSubjectSelected] = useState<
    string | null
  >(childSubjects && childSubjects[0] ? childSubjects[0]?.subject_slug : null);
  const [tierSelected, setTierSelected] = useState<string>("foundation");

  function handleChildSubjectSelection(
    e: React.ChangeEvent<HTMLInputElement>,
  ): void {
    const childSubjectSlug = e.currentTarget.value;
    setChildSubjectSelected(childSubjectSlug);
  }

  function handleTierSelection(e: React.ChangeEvent<HTMLInputElement>): void {
    const tierSlug = e.currentTarget.value;
    setTierSelected(tierSlug);
  }

  function handleNextClick() {
    getTierSubjectValues(tierSelected, childSubjectSelected);
  }

  return (
    <OakBox>
      <OakHeading $font={"heading-4"} tag="h4" $mb={"space-between-m"}>
        Download
      </OakHeading>
      {childSubjects && (
        <OakBox $mb={"space-between-m2"}>
          <OakRadioGroup
            label="Choose subject for KS4 units"
            name="childSubjectRadio"
            onChange={handleChildSubjectSelection}
            $flexDirection={"column"}
            $gap={"space-between-s"}
            defaultValue={childSubjectSelected || "combined-science"}
            data-testid="child-subject-selector"
          >
            {childSubjects.map(
              ({
                subject,
                subject_slug,
              }: {
                subject: string;
                subject_slug: string;
              }) => (
                <OakRadioButton
                  id={subject_slug}
                  label={subject}
                  value={subject_slug}
                  data-testid="child-subject-radio-button"
                  key={subject_slug}
                />
              ),
            )}
          </OakRadioGroup>
        </OakBox>
      )}

      {tiers && (
        <OakBox data-testid="tier-selector">
          <OakRadioGroup
            label="Choose learning tier for KS4 units"
            name="tierRadio"
            onChange={handleTierSelection}
            $flexDirection={"column"}
            $gap={"space-between-s"}
            defaultValue={"foundation"}
          >
            {tiers.map(
              ({ tier, tier_slug }: { tier: string; tier_slug: string }) => (
                <OakRadioButton
                  id={tier_slug}
                  label={tier}
                  value={tier_slug}
                  data-testid="tier-radio-button"
                  key={tier_slug}
                />
              ),
            )}
          </OakRadioGroup>
        </OakBox>
      )}

      <OakPrimaryButton
        iconName="arrow-right"
        isTrailingIcon={true}
        onClick={handleNextClick}
        $mt={"space-between-m2"}
      >
        Next
      </OakPrimaryButton>
    </OakBox>
  );
};

/**
 *
 * The component is used in the Curriculum Downloads journey for KS4 Maths and Science, where a tier
 * must be selected before download (Maths) as well as a child subject (Science).
 *
 * ### Callbacks
 * `getTierSubjectValues(tier, childSubject)`: a callback function to retrieve the selected values
 * once the Next button is pressed to continue on the Downloads journey.
 *
 * NB. We must export a styled component for it to be inheritable
 */
export const OakDownloadsJourneyChildSubjectTierSelector = styled(
  UnstyledComponent,
)`
  ${OakDownloadsJourneyChildSubjectTierSelectorCss}
`;
