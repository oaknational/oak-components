import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import {
  InternalAccordionButton,
  InternalAccordionContent,
} from "./InternalAccordion";
import { InternalAccordionProvider } from "./InternalAccordionProvider";

import { OakFlex } from "@/components/atoms/OakFlex";

const meta: Meta<typeof InternalAccordionProvider> = {
  component: InternalAccordionProvider,
  tags: ["autodocs"],
  title: "internal components/InternalAccordion",
};

export default meta;

type Story = StoryObj<typeof InternalAccordionProvider>;

export const Default: Story = {
  render: () => (
    <InternalAccordionProvider isInitialOpen={false}>
      <OakFlex $flexDirection={"column"}>
        <InternalAccordionButton id={"generic-accordion"}>
          accordion button
        </InternalAccordionButton>
        <InternalAccordionContent aria-labelledby={"generic-accordion"}>
          accordion content
        </InternalAccordionContent>
      </OakFlex>
    </InternalAccordionProvider>
  ),
};
