import { StoryObj, Meta } from "@storybook/nextjs";

import OakBio from "./OakBio";

const meta = {
  component: OakBio,
  title: "components/Presentational/OakBio",
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { type: "string" },
    name: { type: "string" },
    title: { type: "string" },
  },
} satisfies Meta<typeof OakBio>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    name: "Mr teacher",
    title: "Teacher at Oak National Academy",
    imageSrc:
      "https://www.thenational.academy/images/oak-national-academy-logo-512.png",
  },
};

export const WithoutRole: StoryObj<typeof meta> = {
  args: {
    name: "sarah jane",
    imageSrc:
      "https://www.thenational.academy/images/oak-national-academy-logo-512.png",
    title: " Oak National Academy",
  },
};

export const WithoutImage: StoryObj<typeof meta> = {
  args: {
    name: "Luke Triton",
    title: "Teacher",
  },
};
