import type { Meta } from "@storybook/react";

import { OakPromoTag } from "@/components/molecules/OakPromoTag/OakPromoTag";

export { Default } from "@/components/molecules/OakPromoTag/OakPromoTag.stories";

const meta: Meta<typeof OakPromoTag> = {
  title: "TAGS/Tag Promo",
  component: OakPromoTag,
  tags: ["autodocs"],
};

export default meta;
