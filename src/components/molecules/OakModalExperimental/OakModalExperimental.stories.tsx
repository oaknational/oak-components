import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import React, { Fragment } from "react";

import { OakModalExperimental } from "./OakModalExperimental";
import { OakModalExperimentalFooter } from "./OakModalExperimentalFooter";
import { OakModalExperimentalBody } from "./OakModalExperimentalBody";

import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { OakPrimaryButton } from "@/components/molecules/OakPrimaryButton";
import { OakBox, OakP } from "@/components/atoms";

const meta: Meta<typeof OakModalExperimental> = {
  component: OakModalExperimental,
  tags: ["autodocs"],
  title: "components/molecules/OakModalExperimental",
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
      <OakModalExperimentalBody>
        <OakBox $borderStyle={"solid"} $height={"100%"}>
          Modal content
        </OakBox>
      </OakModalExperimentalBody>
    ),
    footerSlot: (
      <OakModalExperimentalFooter>
        <OakSecondaryButton width="100%">Secondary action</OakSecondaryButton>
        <OakPrimaryButton width="100%">Primary action</OakPrimaryButton>
      </OakModalExperimentalFooter>
    ),
  },
  render: (args) => {
    const [, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const onOpen = () => updateArgs({ isOpen: true });

    return (
      <>
        <OakSecondaryButton onClick={onOpen}>Open modal</OakSecondaryButton>
        <OakModalExperimental {...args} onClose={onClose} />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof OakModalExperimental>;

export const Default: Story = {};

export const WithScrolling: Story = {
  args: {
    "aria-label": "Scrolling modal",
    "aria-description": "A modal with scrolling content",
    children: (
      <OakModalExperimentalBody>
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
      </OakModalExperimentalBody>
    ),
  },
};

export const WithColour: Story = {
  args: {
    "aria-label": "Color modal",
    "aria-description": "A modal with different colors",
    borderProps: {
      $borderColor: "pink110",
    },
    containerProps: {
      $background: "pink50",
    },
    children: (
      <OakModalExperimentalBody>
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
      </OakModalExperimentalBody>
    ),
  },
};
