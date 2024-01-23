import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakHintButton } from "./OakHintButton";

import { OakFlex, OakThemeProvider } from "@/components/base";
import { oakDefaultTheme } from "@/styles";

/**
 *
 * A specific implementation of InternalRoundButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */

const meta: Meta<typeof OakHintButton> = {
  component: OakHintButton,
  tags: ["autodocs"],
  title: "components/integrated/OakHintButton",
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    controls: {
      include: ["isOpen"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakHintButton>;

export const Default: Story = {
  render: (args) => (
    <OakThemeProvider theme={oakDefaultTheme}>
      <OakFlex $gap="space-between-m">
        <OakHintButton {...args} />
        <OakHintButton {...args} disabled />
        <OakHintButton {...args} isLoading />
      </OakFlex>
    </OakThemeProvider>
  ),
  args: {
    isOpen: false,
  },
};