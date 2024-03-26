import { Meta, StoryObj } from "@storybook/react";

import { OakModalBody } from "./OakModalBody";

const meta: Meta<typeof OakModalBody> = {
  component: OakModalBody,
  tags: ["autodocs"],
  title: "components/molecules/OakModal/OakModalBody",
  parameters: {
    controls: {
      include: [],
    },
  },
  args: {
    children: `In today's digital landscape, privacy concerns have become
      increasingly paramount, prompting the need for transparency and
      user consent regarding data collection practices. A cookie banner
      serves as the initial point of contact between a website and its
      visitors, notifying them of the site's use of cookies and other
      tracking technologies. This notification is essential in fostering
      trust and ensuring compliance with privacy regulations such as the
      General Data Protection Regulation (GDPR) in the European Union
      and the California Consumer Privacy Act (CCPA) in the United
      States.`,
  },
};
export default meta;

type Story = StoryObj<typeof OakModalBody>;

export const Default: Story = {};
