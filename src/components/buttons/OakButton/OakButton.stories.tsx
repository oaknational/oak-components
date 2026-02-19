import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import {
  OakButton,
  oakButtonColorSchemes,
  oakButtonSizes,
  oakButtonVariants,
} from "./OakButton";

import { oakIconNames } from "@/components/images-and-icons/OakIcon";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const controlIconNames = [
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakButton> = {
  component: OakButton,
  tags: ["autodocs"],
  title: "components/Buttons/OakButton",
  argTypes: {
    iconName: {
      options: controlIconNames,
    },
    isTrailingIcon: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: oakButtonVariants,
    },
    size: {
      control: "select",
      options: oakButtonSizes,
    },
    colorScheme: {
      control: "select",
      options: oakButtonColorSchemes,
    },
    children: {
      control: "text",
    },
  },
  parameters: {
    actions: { onClick: fn() },
    controls: {
      include: [
        "iconName",
        "isTrailingIcon",
        "isLoading",
        "type",
        "variant",
        "size",
        "disabled",
        "colorScheme",
        "onClick",
        "onHovered",
        "children",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakButton>;

export const PrimaryButton: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"} $mb={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  args: {
    variant: "primary",
    iconName: "arrow-right",
    onClick: fn(),
    children: "Button",
  },
};

export const SmallPrimaryButton: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} size="sm" isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  args: {
    variant: "primary",
    size: "sm",
    iconName: "arrow-right",
    children: "Button",
  },
};

export const InvertedPrimaryButton: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  args: {
    variant: "primary",
    colorScheme: "inverted",
    iconName: "arrow-right",
    children: "Button",
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const InvertedSmallPrimaryButton: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} size="sm" isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  args: {
    variant: "primary",
    colorScheme: "inverted",
    size: "sm",
    iconName: "arrow-right",
    children: "Button",
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const SecondaryButton: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"} $mb={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  args: {
    variant: "secondary",
    iconName: "arrow-right",
    children: "Button",
  },
};

export const SmallSecondaryButton: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} size="sm" isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  args: {
    variant: "secondary",
    size: "sm",
    iconName: "arrow-right",
    children: "Button",
  },
};

export const TertiaryButton: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"} $mb={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  args: {
    variant: "tertiary",
    iconName: "chevron-right",
    children: "Button",
  },
};

export const SmallTertiaryButton: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} size="sm" isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  args: {
    variant: "tertiary",
    size: "sm",
    iconName: "chevron-right",
    children: "Button",
  },
};

export const InvertedTertiaryButton: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  args: {
    variant: "tertiary",
    colorScheme: "inverted",
    iconName: "chevron-right",
    children: "Button",
  },
};

export const InvertedSmallTertiaryButton: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} size="sm" isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  args: {
    variant: "tertiary",
    colorScheme: "inverted",
    size: "sm",
    iconName: "chevron-right",
    children: "Button",
  },
};

export const TransparentTertiaryButton: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} size="sm" isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  args: {
    variant: "tertiary",
    colorScheme: "transparent",
    iconName: "chevron-right",
    children: "Button",
  },
};

export const TransparentSmallTertiaryButton: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} size="sm" isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  args: {
    variant: "tertiary",
    colorScheme: "transparent",
    size: "sm",
    iconName: "chevron-right",
    children: "Button",
  },
};

export const LinkStyledAsButton: Story = {
  render: (args) => (
    <OakFlex $gap="spacing-24">
      <OakButton {...args} />
    </OakFlex>
  ),
  argTypes: {
    href: {
      control: "text",
    },
    target: {
      control: "select",
      options: ["_self", "_blank", "_parent", "_top"],
    },
  },
  parameters: {
    controls: {
      include: [
        "iconName",
        "isTrailingIcon",
        "variant",
        "href",
        "target",
        "colorScheme",
      ],
    },
  },
  args: {
    element: "a",
    href: "/",
    variant: "primary",
    children: "Link element styled as button",
  },
};

export const ButtonWithTrailingIcon: Story = {
  render: (args) => (
    <OakFlex $gap={"spacing-24"} $mb={"spacing-24"}>
      <OakButton {...args} />
      <OakButton {...args} disabled>
        Disabled Button
      </OakButton>
      <OakButton {...args} size="sm" isLoading>
        Loading Button
      </OakButton>
    </OakFlex>
  ),
  args: {
    variant: "primary",
    iconName: "arrow-right",
    isTrailingIcon: true,
    children: "Button",
  },
};
