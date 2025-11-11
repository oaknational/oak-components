import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import OakSelect, {
  OakOptGroup,
  OakOptGroupLegend,
  OakOption,
} from "./OakSelect";

import { OakJauntyAngleLabel } from "@/components/molecules/OakJauntyAngleLabel";
import { OakBox } from "@/components/atoms";

const meta: Meta<typeof OakSelect> = {
  component: OakSelect,
  tags: ["autodocs"],
  title: "components/molecules/OakSelect",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof OakSelect>;

export const Default: Story = {
  render: (args) => (
    <OakSelect {...args} $display={"block"}>
      <OakOption>one</OakOption>
      <OakOption>two</OakOption>
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
        $color={"white"}
        htmlFor={"test"}
        as="label"
        $font={"heading-7"}
        $background={"black"}
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
      <OakOptGroup>
        <OakOptGroupLegend>Theropods</OakOptGroupLegend>
        <OakOption>Tyrannosaurus</OakOption>
        <OakOption>Velociraptor</OakOption>
        <OakOption>Deinonychus</OakOption>
      </OakOptGroup>
      <OakOptGroup>
        <OakOptGroupLegend>Theropods</OakOptGroupLegend>
        <OakOption>Diplodocus</OakOption>
        <OakOption>Saltasaurus</OakOption>
        <OakOption>Apatosaurus</OakOption>
      </OakOptGroup>
    </OakSelect>
  ),
  args: {},
};
