import { Meta, StoryObj } from "@storybook/react";

import { OakModalCenterBody } from "./OakModalCenterBody";

const meta: Meta<typeof OakModalCenterBody> = {
  component: OakModalCenterBody,
  tags: ["autodocs"],
  title: "components/others/OakModal (🔀 to be created)/OakModalCenterBody",
  argTypes: {
    children: {
      control: "text",
    },
  },
  parameters: {
    controls: {
      include: [
        "iconName",
        "title",
        "children",
        "headingOverride",
        "iconOverride",
      ],
    },
  },
  args: {
    iconName: "info",
    title: "Modal Title",
    children: `In today's digital landscape, privacy concerns have become increasingly
        paramount, prompting the need for transparency and user consent
        regarding data collection practices. A cookie banner serves as the
        initial point of contact between a website and its visitors, notifying
        them of the site's use of cookies and other tracking technologies. This
        notification is essential in fostering trust and ensuring compliance
        with privacy regulations such as the General Data Protection Regulation
        (GDPR) in the European Union and the California Consumer Privacy Act
        (CCPA) in the United States.`,
  },
};
export default meta;

type Story = StoryObj<typeof OakModalCenterBody>;

export const Default: Story = {};
