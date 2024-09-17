import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakRadioTile } from "./OakRadioTile";

const meta: Meta<typeof OakRadioTile> = {
  //  "title" is the title of the story and where to look for component in the storybook
  title: "Components/CopyPasteThisComponent",
  component: OakRadioTile,
  tags: ["autodocs"],
  argTypes: {
    // Define your component's props and their types here
    // For example:
    // text: { control: "text" },
    // size: { control: 'select', options: ['small', 'medium', 'large'] },
    //
    // can also use the storybook-helpers to add the argTypes
    // ...colorArgTypes,
    // ...spacingArgTypes,
    // ...borderArgTypes,
  },
  parameters: {
    controls: {
      include: [
        // include the argTypes from the storybook-helpers
        // ...Object.keys(colorArgTypes),
        // ...Object.keys(spacingArgTypes),
        // ...Object.keys(borderArgTypes),
        "type",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakRadioTile>;

export const Default: Story = {
  render: (args) => <OakRadioTile {...args} />,
  args: {
    // Define your component's default props here
    //   $background: "bg-btn-primary",
    //   $color: "white",
    //   $ba: "border-solid-s",
    //   $pa: "inner-padding-s",
    //   $borderRadius: "border-radius-m",
  },
};
