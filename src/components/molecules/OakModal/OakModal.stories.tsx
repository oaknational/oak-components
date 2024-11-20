import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import React, { Fragment } from "react";

import { OakModal } from "./OakModal";
import { OakModalFooter } from "./OakModalFooter";
import { OakModalBody } from "./OakModalBody";

import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { OakPrimaryButton } from "@/components/molecules/OakPrimaryButton";
import { OakTextInput } from "@/components/molecules/OakTextInput";
import { OakBox, OakP } from "@/components/atoms";

const meta: Meta<typeof OakModal> = {
  component: OakModal,
  tags: ["autodocs"],
  title: "components/molecules/OakModal",
  argTypes: {
    children: {
      control: "text",
    },
    footerSlot: {
      control: "text",
    },
    isLeftHandSide: {
      control: "boolean",
      description:
        "Whether the modal is anchored to the left side of the screen.",
    },
  },
  parameters: {
    controls: {
      include: [
        "children",
        "footerSlot",
        "isOpen",
        "onClose",
        "isLeftHandSide",
      ],
    },
  },
  args: {
    "aria-label": "Example modal",
    "aria-description": "This is an example modal",
    isOpen: false, // Modal starts closed
    isLeftHandSide: true, // Default value for the prop
    children: (
      <OakModalBody>
        <OakBox $mb="space-between-m">Modal content</OakBox>
        <OakTextInput />
      </OakModalBody>
    ),
    footerSlot: (
      <OakModalFooter>
        <OakSecondaryButton width="100%">Secondary action</OakSecondaryButton>
        <OakPrimaryButton width="100%">Primary action</OakPrimaryButton>
      </OakModalFooter>
    ),
  },
  render: (args) => {
    const [, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const onOpen = () => updateArgs({ isOpen: true });

    return (
      <>
        <OakSecondaryButton onClick={onOpen}>Open modal</OakSecondaryButton>
        <OakModal {...args} onClose={onClose} />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof OakModal>;

export const Default: Story = {};

export const WithScrolling: Story = {
  args: {
    "aria-label": "Scrolling modal",
    "aria-description": "A modal with scrolling content",
    children: (
      <OakModalBody>
        {[1, 2, 3].map((i) => (
          <Fragment key={i}>
            <OakP>
              Privacy concerns have become increasingly paramount, prompting the
              need for transparency and user consent regarding data collection
              practices. A cookie banner serves as the initial point of contact
              between a website and its visitors.
            </OakP>
          </Fragment>
        ))}
      </OakModalBody>
    ),
  },
};
