import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakDownloadsJourneyChildSubjectTierSelector } from "./OakDownloadsJourneyChildSubjectTierSelector";

const tiers = [
  { tier: "Foundation", tierSlug: "foundation" },
  { tier: "Higher", tierSlug: "higher" },
];

const childSubjects = [
  { subject: "Combined Science", subjectSlug: "combined-science" },
  { subject: "Physics", subjectSlug: "physics" },
  { subject: "Chemistry", subjectSlug: "chemistry" },
  { subject: "Biology", subjectSlug: "biology" },
];

function getTierSubjectValues(tier: string, childSubject?: string): void {
  // This is for James to test!
  console.log({ tier, childSubject });
}

const meta: Meta<typeof OakDownloadsJourneyChildSubjectTierSelector> = {
  tags: ["autodocs"],
  title:
    "OWA (❌ to be moved out)/curriculum/OakDownloadsJourneyChildSubjectTierSelector",
  component: OakDownloadsJourneyChildSubjectTierSelector,
  argTypes: {
    tiers: {
      control: { type: "object" },
      description: "Foundation and higher as tier options",
    },
    childSubjects: {
      options: ["none", "childSubjects"],
      mapping: { none: undefined, childSubjects },
      control: { type: "select" },
      description: "None or Science",
    },
    getTierSubjectValues: {
      control: { type: "object" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakDownloadsJourneyChildSubjectTierSelector>;

export const Default: Story = {
  render: (args) => <OakDownloadsJourneyChildSubjectTierSelector {...args} />,
  args: {
    tiers,
    childSubjects,
    getTierSubjectValues,
  },
};
