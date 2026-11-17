import { StoryObj, Meta } from "@storybook/nextjs";

import OakBio from "./OakBio";

const meta = {
  component: OakBio,
  title: "components/Presentational/OakBio",
} satisfies Meta<typeof OakBio>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    name: "Mr teacher",
    role: "Teacher",
    organisationName: "Oak National Academy",
    imageSrc:
      "https://www.thenational.academy/images/oak-national-academy-logo-512.png",
  },
};

export const WithoutRole: StoryObj<typeof meta> = {
  args: {
    name: "sarah jane sarah janesarah janesarah janesarah janesarah janesarah janesarah janesarah jane",
    imageSrc:
      "https://www.thenational.academy/images/oak-national-academy-logo-512.png",
    organisationName: "Oak National Academy",
  },
};

export const WithoutImage: StoryObj<typeof meta> = {
  args: {
    name: "Luke Triton",
    role: "Teacher",
  },
};
