import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { OakSelect, OakOptGroup, OakOption } from ".";

import { OakJauntyAngleLabel } from "@/components/form-elements/OakJauntyAngleLabel";
import { OakBox } from "@/components/layout-and-structure/OakBox";

const meta: Meta<typeof OakSelect> = {
  component: OakSelect,
  tags: ["autodocs"],
  title: "components/Form elements/OakSelect",
  argTypes: {
    onChange: { action: "change" },
  },
};
export default meta;

type Story = StoryObj<typeof OakSelect>;

export const Default: Story = {
  render: (args) => (
    <OakSelect {...args} $display={"block"}>
      <OakOption asDefault={true} selected={true} value="">
        Please choose an option
      </OakOption>
      <OakOption value="1">one</OakOption>
      <OakOption value="2">two</OakOption>
      <OakOption value="3">three</OakOption>
    </OakSelect>
  ),
  args: {},
};

export const Controlled: Story = {
  render: (args) => {
    const [, updateArgs] = useArgs();

    return (
      <OakSelect
        {...args}
        value={args.value}
        onChange={(e) => updateArgs({ value: e.target.value })}
        $display={"block"}
      >
        <OakOption asDefault={true} selected={true} value="">
          Please choose an option
        </OakOption>
        <OakOption value="1">one</OakOption>
        <OakOption value="2">two</OakOption>
        <OakOption value="3">three</OakOption>
      </OakSelect>
    );
  },
  args: {
    value: "2",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <OakSelect {...args} $display={"block"} disabled={true}>
      <OakOption>one</OakOption>
      <OakOption>two</OakOption>
      <OakOption>three</OakOption>
    </OakSelect>
  ),
  args: {},
};

export const DisabledOption: Story = {
  render: (args) => (
    <OakSelect {...args} $display={"block"}>
      <OakOption>one</OakOption>
      <OakOption disabled={true}>two</OakOption>
      <OakOption>three</OakOption>
    </OakSelect>
  ),
  args: {},
};

export const WithLabel: Story = {
  render: (args) => (
    <OakBox $position={"relative"}>
      <OakJauntyAngleLabel
        label={"Test"}
        $color={"text-primary"}
        htmlFor={"test"}
        as="label"
        $font={"heading-7"}
        $background={"bg-decorative5-main"}
        $zIndex="in-front"
        $position="absolute"
        $top={"-20px"}
        $left={"5px"}
        $borderRadius="border-radius-square"
        data-testid="jaunty-label"
      />
      <OakSelect {...args} $display={"block"} id="test">
        <OakOption>one</OakOption>
        <OakOption>two</OakOption>
        <OakOption>three</OakOption>
      </OakSelect>
    </OakBox>
  ),
  args: {},
};

export const Invalid: Story = {
  render: (args) => (
    <OakSelect
      {...args}
      $display={"block"}
      aria-invalid="false"
      validity="invalid"
    >
      <OakOption>one</OakOption>
      <OakOption>two</OakOption>
      <OakOption>three</OakOption>
    </OakSelect>
  ),
  args: {},
};

export const Highlighted: Story = {
  render: (args) => (
    <OakSelect {...args} $display={"block"} isHighlighted={true}>
      <OakOption>one</OakOption>
      <OakOption>two</OakOption>
      <OakOption>three</OakOption>
    </OakSelect>
  ),
  args: {},
};

export const WithOptGroup: Story = {
  render: (args) => (
    <OakSelect {...args} $display={"block"}>
      <OakOptGroup label="Theropods">
        <OakOption>Tyrannosaurus</OakOption>
        <OakOption>Velociraptor</OakOption>
        <OakOption>Deinonychus</OakOption>
      </OakOptGroup>
      <OakOptGroup label="Theropods">
        <OakOption>Diplodocus</OakOption>
        <OakOption>Saltasaurus</OakOption>
        <OakOption>Apatosaurus</OakOption>
      </OakOptGroup>
    </OakSelect>
  ),
  args: {},
};
