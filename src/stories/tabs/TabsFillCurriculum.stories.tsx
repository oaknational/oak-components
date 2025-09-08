import type { Meta } from "@storybook/react";

import { OakDownloadsJourneyChildSubjectTierSelector } from "@/components/organisms/curriculum/OakDownloadsJourneyChildSubjectTierSelector/OakDownloadsJourneyChildSubjectTierSelector";
import canonicalMeta from "@/components/organisms/curriculum/OakDownloadsJourneyChildSubjectTierSelector/OakDownloadsJourneyChildSubjectTierSelector.stories";

export { Default } from "@/components/organisms/curriculum/OakDownloadsJourneyChildSubjectTierSelector/OakDownloadsJourneyChildSubjectTierSelector.stories";

const meta: Meta<typeof OakDownloadsJourneyChildSubjectTierSelector> = {
  title: "TABS/Tabs Fill Curriculum",
  component: OakDownloadsJourneyChildSubjectTierSelector,
  tags: ["autodocs"],
  args: canonicalMeta.args,
  argTypes: canonicalMeta.argTypes,
  parameters: canonicalMeta.parameters,
  decorators: canonicalMeta.decorators,
};

export default meta;


