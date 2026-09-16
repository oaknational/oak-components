import { Meta, StoryObj } from "@storybook/nextjs";
import React, { Fragment, useState } from "react";

import { OakModalFullScreen } from "@/components/messaging-and-feedback/OakModalFullScreen";
import { OakSecondaryButton } from "@/components/buttons/OakSecondaryButton";
import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakP } from "@/components/typography/OakP";

const meta: Meta<typeof OakModalFullScreen> = {
  component: OakModalFullScreen,
  tags: ["autodocs"],
  title: "components/Messaging and feedback/OakModalFullScreen",
  argTypes: {
    children: {
      control: "text",
    },
    disableEscapeKey: {
      control: "boolean",
    },
    headingTag: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
  parameters: {
    controls: {
      include: [
        "children",
        "isOpen",
        "title",
        "headingTag",
        "closeButtonLabel",
        "onClose",
        "disableEscapeKey",
        "footerSlot",
      ],
    },
  },
  args: {
    isOpen: false,
    title: "Add extra scaffolding",
    disableEscapeKey: false,
    domContainer: document.body,
    children: (
      <OakP>
        A task surface fills the viewport, so the content owns its own layout.
      </OakP>
    ),
  },
  render: function DefaultStory(args) {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    return (
      <>
        <OakHeading tag="h1" $font="heading-4" $mb="spacing-16">
          Host page
        </OakHeading>
        <OakSecondaryButton onClick={() => setIsOpen(true)}>
          Open modal
        </OakSecondaryButton>
        <OakModalFullScreen
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </>
    );
  },
};
export default meta;

type Story = StoryObj<typeof OakModalFullScreen>;

export const Default: Story = {};

export const WithFooter: Story = {
  args: {
    footerSlot: <OakPrimaryButton>Download worksheet</OakPrimaryButton>,
  },
};

export const WithScrolling: Story = {
  args: {
    children: (
      <>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Fragment key={i}>
            <OakHeading tag="h3" $font="heading-6" $mb="spacing-8">
              Question {i}
            </OakHeading>
            <OakP $mb="spacing-16">
              Explain how the quotient is affected when the divisor is equal to
              the dividend. Use a diagram to support your answer, and give one
              worked example of your own.
            </OakP>
          </Fragment>
        ))}
      </>
    ),
    footerSlot: <OakPrimaryButton>Download worksheet</OakPrimaryButton>,
  },
};
