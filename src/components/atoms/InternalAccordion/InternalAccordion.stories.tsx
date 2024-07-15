import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import {
  InternalAccordionButton,
  InternalAccordionContent,
  InternalAccordion,
} from "./InternalAccordion";
import { InternalAccordionProvider } from "./InternalAccordionProvider";

const meta: Meta<typeof InternalAccordion> = {
  title: "Components/atoms/InternalAccordion",
  component: InternalAccordion,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: {
      include: ["type"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof InternalAccordion>;

export const Default: Story = {
  render: (args) => (
    <InternalAccordionProvider isInitialOpen={true}>
      <InternalAccordion {...args}>
        <InternalAccordionButton {...args}>
          accordion button
        </InternalAccordionButton>
        <InternalAccordionContent {...args}>
          accordion content
        </InternalAccordionContent>
      </InternalAccordion>
    </InternalAccordionProvider>
  ),
  args: {
    id: "generic-accordion",
  },
};
