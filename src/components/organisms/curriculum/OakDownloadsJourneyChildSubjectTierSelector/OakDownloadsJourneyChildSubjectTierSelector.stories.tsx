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

const childSubjects2 = [
  { subject: "Cooking & nutrition", subjectSlug: "cooking-and-nutrition" },
  { subject: "Design & technology ", subjectSlug: "design-and-technology" },
];

function getTierSubjectValues(tier: string, childSubject?: string): void {
  // This is for James to test!
  console.log({ tier, childSubject });
}

const meta: Meta<typeof OakDownloadsJourneyChildSubjectTierSelector> = {
  tags: ["autodocs"],
  title:
    "Components/organisms/curriculum/OakDownloadsJourneyChildSubjectTierSelector",
  component: OakDownloadsJourneyChildSubjectTierSelector,
  argTypes: {
    keyStage: {
      options: ["none", "primary"],
      mapping: { none: undefined, primary: "KS1-KS2" },
      control: { type: "select" },
      description: "",
    },
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

export const Story1: Story = {
  render: (args) => <OakDownloadsJourneyChildSubjectTierSelector {...args} />,
  args: {
    keyStage: "KS4",
    tiers,
    childSubjects,
    getTierSubjectValues,
  },
};

type Story2 = StoryObj<typeof OakDownloadsJourneyChildSubjectTierSelector>;

export const Story2: Story2 = {
  render: (args) => <OakDownloadsJourneyChildSubjectTierSelector {...args} />,
  args: {
    childSubjects: childSubjects2,
    getTierSubjectValues,
  },
};
