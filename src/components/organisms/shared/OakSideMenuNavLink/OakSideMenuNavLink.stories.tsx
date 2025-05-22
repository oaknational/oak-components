import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakSideMenuNavLink } from "./OakSideMenuNavLink";

const meta: Meta<typeof OakSideMenuNavLink> = {
  //  "title" is the title of the story and where to look for component in the storybook
  title: "Components/OakSideMenuNavLink",
  component: OakSideMenuNavLink,
  tags: ["autodocs"],
  argTypes: {
    item: {
      control: {
        type: "object",
      },
    },
    isSelected: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
  parameters: {
    controls: {
      include: ["item", "isSelected", "onClick", "type"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakSideMenuNavLink>;

export const Default: Story = {
  render: (args) => <OakSideMenuNavLink {...args} />,
  args: {
    item: {
      heading: "Test Item",
      subheading: "Test Subheading",
      href: "#test",
    },
    isSelected: false,
    onClick: () => {
      // Do nothing
    },
  },
};
