import { StoryObj, Meta } from "@storybook/nextjs";

import OakBio from "./OakBio";

const meta = {
  component: OakBio,
  title: "components/Presentational/OakBio",
} satisfies Meta<typeof OakBio>;

export default meta;

export const Default: StoryObj<typeof OakBio> = {
  args: {},
};
