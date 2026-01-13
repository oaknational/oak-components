import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakSideMenuNavLink } from "./OakSideMenuNavLink";

const meta: Meta<typeof OakSideMenuNavLink> = {
  component: OakSideMenuNavLink,
  tags: ["autodocs"],
  title: "OWA (❌ to be moved out)/shared/OakSideMenuNavLink",
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
