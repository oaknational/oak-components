import type { Meta } from "@storybook/react";

import { OakJauntyAngleLabel } from "@/components/molecules/OakJauntyAngleLabel/OakJauntyAngleLabel";
import canonicalMeta from "@/components/molecules/OakJauntyAngleLabel/OakJauntyAngleLabel.stories";

export { Default } from "@/components/molecules/OakJauntyAngleLabel/OakJauntyAngleLabel.stories";

const meta: Meta<typeof OakJauntyAngleLabel> = {
  title: "TAGS/Tag Mythbusting",
  component: OakJauntyAngleLabel,
  tags: ["autodocs"],
  args: canonicalMeta.args,
  argTypes: canonicalMeta.argTypes,
  parameters: canonicalMeta.parameters,
  decorators: canonicalMeta.decorators,
};

export default meta;
