import React from "react";
import { StoryObj, Meta } from "@storybook/nextjs";

import { OakSideMenuNavLink } from "./OakSideMenuNavLink";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";

const meta: Meta<typeof OakSideMenuNavLink> = {
  component: OakSideMenuNavLink,
  tags: ["autodocs"],
  title: "OWA/OakSideMenuNavLink",
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
    hoverBorderColor: colorArgTypes.$color,
    selectedBackground: colorArgTypes.$background,
    selectedHeadingFont: typographyArgTypes.$font,
    onClick: {
      action: "clicked",
    },
  },
  parameters: {
    controls: {
      include: [
        "item",
        "isSelected",
        "hoverBorderColor",
        "selectedBackground",
        "selectedHeadingFont",
        "onClick",
        "type",
      ],
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
    hoverBorderColor: "bg-decorative1-main",
    onClick: () => {
      // Do nothing
    },
  },
};

export const SelectedCustomState: Story = {
  render: (args) => <OakSideMenuNavLink {...args} />,
  args: {
    item: {
      heading: "Selected Item",
      subheading: "Custom selected styling",
      href: "#selected",
    },
    isSelected: true,
    hoverBorderColor: "bg-decorative1-main",
    selectedBackground: "bg-decorative2-main",
    selectedHeadingFont: "heading-7",
    onClick: () => {
      // Do nothing
    },
  },
};
