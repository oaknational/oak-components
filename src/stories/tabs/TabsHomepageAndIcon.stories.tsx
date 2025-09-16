import type { Meta } from "@storybook/react";

import { OakHomepageTabButton } from "@/components/organisms/shared/OakHomepageTabButton/OakHomepageTabButton";
import canonicalMeta from "@/components/organisms/shared/OakHomepageTabButton/OakHomepageTabButton.stories";

export {
  Default,
  WordWrap,
  AsLink,
} from "@/components/organisms/shared/OakHomepageTabButton/OakHomepageTabButton.stories";

const meta: Meta<typeof OakHomepageTabButton> = {
  title: "TABS/Tabs Homepage & Icon",
  component: OakHomepageTabButton,
  tags: ["autodocs"],
  args: canonicalMeta.args,
  argTypes: canonicalMeta.argTypes,
  parameters: canonicalMeta.parameters,
  decorators: canonicalMeta.decorators,
};

export default meta;
