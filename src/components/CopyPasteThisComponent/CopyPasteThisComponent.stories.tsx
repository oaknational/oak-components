import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { CopyPasteThisComponent } from "./CopyPasteThisComponent";

const meta: Meta<typeof CopyPasteThisComponent> = {
  tags: ["autodocs"],
  //  "title" is the title of the story and where to look for component in the storybook
  // it usually follows the pattern of "folder/Subfolder name capitalised and with spacing/ComponentName"
  // e.g. "components/Form elements/OakLabel"
  // if you are deprecating component add " (deprecated)" to the title
  // e.g. "components/Form elements/OakLabel (deprecated)"
  title: "docs/CopyPasteThisComponent",
  component: CopyPasteThisComponent,
  argTypes: {
    // Define your component's props and their types here
    // Make sure that all props are exposed and they align with the props defined in CopyPasteThisComponent.tsx
    // Make sure the controls use the same types as the actual props (ie. OakUiColorToken for color props)
    // Props starting with $ inherited from OakBox/OakFlex don't need to be exposed unless you want to override the default controls
    //
    // For example:
    // text: { control: "background" },
    // size: { control: 'select', options: [...Object.keys(oakUiRoleTokens)] },
    //
    // can also use the storybook-helpers to add the argTypes
    // ...colorArgTypes,
    // ...spacingArgTypes,
    // ...borderArgTypes,
  },
  parameters: {
    controls: {
      include: [
        // "background",
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

type Story = StoryObj<typeof CopyPasteThisComponent>;

export const Default: Story = {
  render: (args) => <CopyPasteThisComponent {...args} />,
  args: {
    // Define your component's default props here
    //   $background: "bg-btn-primary",
    //   $color: "text-inverted",
    //   $ba: "border-solid-s",
    //   $pa: "spacing-12",
    //   $borderRadius: "border-radius-m",
  },
};
