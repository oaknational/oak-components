import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakDownloadsJourneyChildSubjectTierSelector } from "./OakDownloadsJourneyChildSubjectTierSelector";

const meta: Meta<typeof OakDownloadsJourneyChildSubjectTierSelector> = {
  tags: ["autodocs"],
  title:
    "Components/organisms/curriculum/OakDownloadsJourneyChildSubjectTierSelector",
  component: OakDownloadsJourneyChildSubjectTierSelector,
};

export default meta;

type Story = StoryObj<typeof OakDownloadsJourneyChildSubjectTierSelector>;

const tiers = [
  { tier: "Foundation", tier_slug: "foundation" },
  { tier: "Higher", tier_slug: "higher" },
];

const childSubjects = [
  { subject: "Combined Science", subject_slug: "combined-science" },
  { subject: "Physics", subject_slug: "physics" },
  { subject: "Chemistry", subject_slug: "chemistry" },
  { subject: "Biology", subject_slug: "biology" },
];

function getTierSubjectValues(tier: string, childSubject?: string): void {
  // This is for James to test!
  console.log({ tier, childSubject });
}

export const Default: Story = {
  render: (args) => <OakDownloadsJourneyChildSubjectTierSelector {...args} />,
  args: {
    tiers,
    childSubjects,
    getTierSubjectValues,
  },
};

export const KS4MathsOnlyTier: Story = {
  render: (args) => <OakDownloadsJourneyChildSubjectTierSelector {...args} />,
  args: {
    tiers,
    getTierSubjectValues,
  },
};
