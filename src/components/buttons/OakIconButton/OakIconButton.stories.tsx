import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import { OakIconButton } from "./OakIconButton";

import { oakIconNames } from "@/components/images-and-icons/OakIcon";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakIconButton> = {
  component: OakIconButton,
  tags: ["autodocs"],
  title: "components/Buttons/OakIconButton",
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
  },
  parameters: {
    controls: {
      include: ["iconName", "isTrailingIcon", "isLoading", "type"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakIconButton>;

export const Default: Story = {
  render: (args) => <OakIconButton {...args}>Primary Button</OakIconButton>,
  args: {
    iconName: "arrow-right",
    $colorScheme: "primary",
    $size: "md",
    $variant: "primary",
  },
};

export const AllTest: Story = {
  render: () => (
    <OakFlex $flexDirection="column" $gap="spacing-12" $alignItems="flex-start">
      <OakFlex $gap={"spacing-12"}>
        <OakIconButton
          iconName="arrow-right"
          $colorScheme="primary"
          $size="md"
          $variant="primary"
        />
        <OakIconButton
          $disabled
          iconName="arrow-right"
          $colorScheme="primary"
          $size="md"
          $variant="primary"
        />
        <OakIconButton
          isLoading={true}
          iconName="arrow-right"
          $colorScheme="primary"
          $size="md"
          $variant="primary"
        />
      </OakFlex>
      <OakFlex $gap={"spacing-12"}>
        <OakIconButton
          iconName="arrow-right"
          $colorScheme="primary"
          $size="sm"
          $variant="primary"
        />
        <OakIconButton
          $disabled
          iconName="arrow-right"
          $colorScheme="primary"
          $size="sm"
          $variant="primary"
        />
        <OakIconButton
          isLoading={true}
          iconName="arrow-right"
          $colorScheme="primary"
          $size="sm"
          $variant="primary"
        />
      </OakFlex>
      <OakFlex $gap={"spacing-12"}>
        <OakIconButton
          iconName="arrow-right"
          $colorScheme="inverted"
          $size="md"
          $variant="primary"
        />
        <OakIconButton
          $disabled
          iconName="arrow-right"
          $colorScheme="inverted"
          $size="md"
          $variant="primary"
        />
        <OakIconButton
          isLoading={true}
          iconName="arrow-right"
          $colorScheme="inverted"
          $size="md"
          $variant="primary"
        />
      </OakFlex>
      <OakFlex $gap={"spacing-12"}>
        <OakIconButton
          iconName="arrow-right"
          $colorScheme="inverted"
          $size="sm"
          $variant="primary"
        />
        <OakIconButton
          $disabled
          iconName="arrow-right"
          $colorScheme="inverted"
          $size="sm"
          $variant="primary"
        />
        <OakIconButton
          isLoading={true}
          iconName="arrow-right"
          $colorScheme="inverted"
          $size="sm"
          $variant="primary"
        />
      </OakFlex>
      <OakFlex $gap={"spacing-12"}>
        <OakIconButton
          iconName="arrow-right"
          $colorScheme="primary"
          $size="md"
          $variant="secondary"
        />
        <OakIconButton
          $disabled
          iconName="arrow-right"
          $colorScheme="primary"
          $size="md"
          $variant="secondary"
        />
        <OakIconButton
          isLoading={true}
          iconName="arrow-right"
          $colorScheme="primary"
          $size="md"
          $variant="secondary"
        />
      </OakFlex>
      <OakFlex $gap={"spacing-12"}>
        <OakIconButton
          iconName="arrow-right"
          $colorScheme="primary"
          $size="sm"
          $variant="secondary"
        />
        <OakIconButton
          $disabled
          iconName="arrow-right"
          $colorScheme="primary"
          $size="sm"
          $variant="secondary"
        />
        <OakIconButton
          isLoading={true}
          iconName="arrow-right"
          $colorScheme="primary"
          $size="sm"
          $variant="secondary"
        />
      </OakFlex>
    </OakFlex>
  ),
};
