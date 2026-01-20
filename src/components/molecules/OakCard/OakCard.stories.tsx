import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakCard } from "./OakCard";

const meta: Meta<typeof OakCard> = {
  //  "title" is the title of the story and where to look for component in the storybook
  title: "Components/molecules/OakCard",
  component: OakCard,
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
  }
};

export default meta;

type Story = StoryObj<typeof OakCard>;

export const Default: Story = {
  render: (args) => <OakCard {...args} />,
  args: {
    heading: "A Heading",
    cardOrientation: "row",
    cardWidth: "fit-content",
    imageSrc: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`,
    imageAlt: "Example Image Alt",
    aspectRatio: "1/1",
    subCopy: "Some Sub Copy",
    tagName: "A Tag",
    linkText: "Link Text",
    linkIconName: "arrow-right",
    href: "https://example.com",
  },
};
