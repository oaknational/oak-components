import type { Meta } from "@storybook/react";

import { OakQuote } from "@/components/organisms/shared/OakQuote/OakQuote";

export {
  Default,
  QuoteOnly,
  WithoutImage,
  MintPageBackground,
} from "@/components/organisms/shared/OakQuote/OakQuote.stories";

const meta: Meta<typeof OakQuote> = {
  title: "QUOTES/Quote",
  component: OakQuote,
  tags: ["autodocs"],
};

export default meta;
