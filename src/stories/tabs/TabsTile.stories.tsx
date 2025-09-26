import type { Meta } from "@storybook/react";

import { OakRadioTile } from "@/components/molecules/OakRadioTile/OakRadioTile";
import canonicalMeta from "@/components/molecules/OakRadioTile/OakRadioTile.stories";

export { Default } from "@/components/molecules/OakRadioTile/OakRadioTile.stories";

const meta: Meta<typeof OakRadioTile> = {
  title: "TABS/Tabs Tile",
  component: OakRadioTile,
  tags: ["autodocs"],
  args: canonicalMeta.args,
  argTypes: canonicalMeta.argTypes,
  parameters: canonicalMeta.parameters,
  decorators: canonicalMeta.decorators,
};

export default meta;
