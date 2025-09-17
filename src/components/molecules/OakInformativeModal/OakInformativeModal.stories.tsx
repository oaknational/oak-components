import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import React, { Fragment } from "react";

import { OakInformativeModal } from "./OakInformativeModal";
import { OakInformativeModalFooter } from "./OakInformativeModalFooter";
import { OakInformativeModalBody } from "./OakInformativeModalBody";

import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { OakPrimaryButton } from "@/components/molecules/OakPrimaryButton";
import { OakBox, OakP } from "@/components/atoms";

const meta: Meta<typeof OakInformativeModal> = {
  component: OakInformativeModal,
  tags: ["autodocs"],
  title: "components/molecules/OakInformativeModal",
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
    isLeftHandSide: false, // Default value for the prop
    children: (
      <OakInformativeModalBody>
        <OakBox $borderStyle={"solid"} $height={"100%"}>
          Modal content
        </OakBox>
      </OakInformativeModalBody>
    ),
  },
  render: (args) => {
    const [, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const onOpen = () => updateArgs({ isOpen: true });

    return (
      <>
        <OakSecondaryButton onClick={onOpen}>Open modal</OakSecondaryButton>
        <OakInformativeModal {...args} onClose={onClose} />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof OakInformativeModal>;

export const Default: Story = {};

export const WithScrolling: Story = {
  args: {
    "aria-label": "Scrolling modal",
    "aria-description": "A modal with scrolling content",
    children: (
      <OakInformativeModalBody>
        {[1, 2, 3].map((i) => (
          <Fragment key={i}>
            <OakP>
              Privacy concerns have become increasingly paramount, prompting the
              need for transparency and user consent regarding data collection
              practices. A cookie banner serves as the initial point of contact
              between a website and its visitors.
            </OakP>
            <OakP>
              Privacy concerns have become increasingly paramount, prompting the
              need for transparency and user consent regarding data collection
              practices. A cookie banner serves as the initial point of contact
              between a website and its visitors.
            </OakP>
            <OakP>
              Privacy concerns have become increasingly paramount, prompting the
              need for transparency and user consent regarding data collection
              practices. A cookie banner serves as the initial point of contact
              between a website and its visitors.
            </OakP>
            <OakP>
              Privacy concerns have become increasingly paramount, prompting the
              need for transparency and user consent regarding data collection
              practices. A cookie banner serves as the initial point of contact
              between a website and its visitors.
            </OakP>
          </Fragment>
        ))}
      </OakInformativeModalBody>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    "aria-label": "With footer",
    "aria-description": "A modal with footer",
    footerSlot: (
      <OakInformativeModalFooter>
        <OakSecondaryButton width="100%">Secondary action</OakSecondaryButton>
        <OakPrimaryButton width="100%">Primary action</OakPrimaryButton>
      </OakInformativeModalFooter>
    ),
  },
};

export const LeftHandSide: Story = {
  args: {
    isLeftHandSide: true,
  },
};
