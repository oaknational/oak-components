import React, { useState } from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakInlineBanner } from "@/components/messaging-and-feedback/OakInlineBanner";
import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import { OakRadioButton } from "@/components/form-elements/OakRadioButton";
import { OakRadioGroup } from "@/components/form-elements/OakRadioGroup";

export interface Tier {
  tier: string;
  tierSlug: string;
}
export interface Subject {
  subject: string;
  subjectSlug: string;
}

export type OakDownloadsJourneyChildSubjectTierSelectorProps = {
  /* An array of Tier objects containing `tier` and `tierSlug` */
  tiers?: Tier[];
  /* An array of Subject objects containing `subject` and `subjectSlug` */
  childSubjects?: Subject[];
  /* Callback function which returns the selected tier and subject once the Next button is pressed. */
  getTierSubjectValues: (
    tierSlug: string,
    childSubjectSlug: string | null,
  ) => void;
};

const OakDownloadsJourneyChildSubjectTierSelectorCss = css<OakDownloadsJourneyChildSubjectTierSelectorProps>``;

const UnstyledComponent = (
  props: OakDownloadsJourneyChildSubjectTierSelectorProps,
) => {
  const { childSubjects, tiers, getTierSubjectValues } = props;

  const [childSubjectSelected, setChildSubjectSelected] = useState<
    string | null
  >(childSubjects?.[0] ? childSubjects[0]?.subjectSlug : null);
  const [tierSelected, setTierSelected] = useState<string>("foundation");

  const tiersAvailable = tiers && tierSelected.length > 0;
  const childSubjectsAvailable = childSubjects && childSubjects.length > 0;
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
    <OakFlex $flexDirection={"column"} $gap={"spacing-24"}>
      <OakInlineBanner
        isOpen={true}
        message={`Before downloading, choose ${
          childSubjectsAvailable && tiersAvailable ? "options" : "an option"
        } for KS4. The document will still display both KS3 and KS4.`}
        $maxWidth={"spacing-640"}
      />
      {childSubjectsAvailable && (
        <OakRadioGroup
          label="Choose subject for KS4 units"
          name="childSubjectRadio"
          onChange={handleChildSubjectSelection}
          $flexDirection={"column"}
          $gap={"spacing-16"}
          defaultValue={childSubjectSelected || "combined-science"}
          data-testid="child-subject-selector"
        >
          {childSubjects.map(
            ({
              subject,
              subjectSlug,
            }: {
              subject: string;
              subjectSlug: string;
            }) => (
              <OakRadioButton
                id={subjectSlug}
                label={subject}
                value={subjectSlug}
                data-testid="child-subject-radio-button"
                key={subjectSlug}
              />
            ),
          )}
        </OakRadioGroup>
      )}
      {tiersAvailable && (
        <OakRadioGroup
          data-testid="tier-selector"
          label="Choose learning tier for KS4 units"
          name="tierRadio"
          onChange={handleTierSelection}
          $flexDirection={"column"}
          $gap={"spacing-16"}
          defaultValue={tierSelected}
        >
          {tiers.map(
            ({ tier, tierSlug }: { tier: string; tierSlug: string }) => (
              <OakRadioButton
                id={tierSlug}
                label={tier}
                value={tierSlug}
                data-testid="tier-radio-button"
                key={tierSlug}
              />
            ),
          )}
        </OakRadioGroup>
      )}
      <OakPrimaryButton
        iconName="arrow-right"
        isTrailingIcon={true}
        onClick={handleNextClick}
      >
        Next
      </OakPrimaryButton>
    </OakFlex>
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
 */
export const OakDownloadsJourneyChildSubjectTierSelector = styled(
  UnstyledComponent,
)`
  ${OakDownloadsJourneyChildSubjectTierSelectorCss}
`;
