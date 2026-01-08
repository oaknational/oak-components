import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { OakToast } from "./OakToast";

import { OakPrimaryButton } from "@/components/molecules/OakPrimaryButton";
import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakToast> = {
  tags: ["autodocs"],
  title: "components/molecules/OakToast",
  component: OakToast,
  argTypes: {
    message: {
      control: {
        type: "text",
      },
    },
    autoDismiss: {
      control: {
        type: "boolean",
      },
    },
    autoDismissDuration: {
      control: {
        type: "number",
      },
    },
    showIcon: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      options: [
        "green",
        "yellow",
        "pink",
        "blue",
        "aqua",
        "light",
        "dark",
        "error",
        "success",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakToast>;

export const Default: Story = {
  render: (args) => <OakToast {...args} />,
  args: {
    message: "this is a toast message",
    autoDismiss: false,
    showIcon: true,
    variant: "green",
    id: 1,
    onClose: () => console.log("Toast closed"),
  },
};

export const LongElaborateMessage: Story = {
  render: (args) => <OakToast {...args} />,
  args: {
    message: (
      <span>
        "Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>. Sed do
        eiusmod <i>tempor incididunt</i> ut labore et dolore magna <b>aliqua</b>
        ."
      </span>
    ),
    autoDismiss: false,
    showIcon: true,
    variant: "pink",
    id: 1,
    onClose: () => console.log("Toast closed"),
  },
};

export const ExtendibleAutoDismiss: Story = {
  render: (args) => {
    const [{ id }, updateArgs] = useArgs();
    const replaceToast = () => {
      updateArgs({ id: id + 1, variant: "pink" });
    };
    return (
      <OakFlex $flexDirection="column" $gap="spacing-20">
        <OakPrimaryButton onClick={replaceToast}>Update toast</OakPrimaryButton>
        <OakToast {...args} />
      </OakFlex>
    );
  },
  args: {
    message: "this is a toast message",
    autoDismiss: true,
    autoDismissDuration: 5000,
    showIcon: true,
    variant: "blue",
    id: 1,
    onClose: () => console.log("Toast closed"),
  },
};
