import type { Meta } from "@storybook/react";

import { OakTagFunctional } from "@/components/molecules/OakTagFunctional/OakTagFunctional";

export {
  Default,
  Span,
} from "@/components/molecules/OakTagFunctional/OakTagFunctional.stories";

const meta: Meta<typeof OakTagFunctional> = {
  title: "TAGS/Tag Functional",
  component: OakTagFunctional,
  tags: ["autodocs"],
};

export default meta;
