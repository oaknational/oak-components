import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/nextjs";
import { useArgs } from "storybook/preview-api";

import { InternalModalBase, InternalModalBaseProps } from "./InternalModalBase";

import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakP } from "@/components/typography/OakP";
import { OakSecondaryButton } from "@/components/buttons/OakSecondaryButton";
import { OakModalFooter } from "@/components/messaging-and-feedback/OakModal/OakModalFooter";

const meta: Meta<typeof InternalModalBase> = {
  component: InternalModalBase,
  tags: ["autodocs"],
  title: "internal components/InternalModalBase",
  argTypes: {
    placement: {
      control: "select",
      options: ["fullscreen", "left", "right", "top", "bottom", "centre"],
    },
    role: {
      control: "radio",
      options: ["dialog", "alertdialog"],
    },
    autoFocusContent: { control: "boolean" },
  },
  parameters: {
    controls: {
      include: ["placement", "role", "isOpen"],
    },
  },
  args: {
    isOpen: false,
    placement: "right",
    "aria-labelledby": "internal-modal-base-title",
  },
};

export default meta;

type Story = StoryObj<typeof InternalModalBase>;

export const Default: Story = {
  render: (args) => {
    const [, updateArgs] = useArgs();
    const close = () => updateArgs({ isOpen: false });

    return (
      <>
        <OakPrimaryButton onClick={() => updateArgs({ isOpen: true })}>
          Open
        </OakPrimaryButton>
        <InternalModalBase {...args} onDismiss={close}>
          <OakHeading tag="h2" id="internal-modal-base-title" $font="heading-5">
            Internal modal base
          </OakHeading>
          <OakP $mt="spacing-20">
            Shared behaviour for OakModal and OakDialog: portal, focus trap,
            transitions, backdrop and size caps. Press Escape or click the
            backdrop to close.
          </OakP>
        </InternalModalBase>
      </>
    );
  },
};

export const AutoFocusContent: Story = {
  args: {
    autoFocusContent: true,
  },
  parameters: {
    controls: {
      include: ["placement", "role", "autoFocusContent"],
    },
    docs: {
      description: {
        story: `Open the modal with the keyboard (Tab to "Open", press Enter).

- **autoFocusContent off:** the first footer button has focus as soon as the modal opens.
- **autoFocusContent on:** no button has focus. Press Tab once and focus moves to the first footer button, which shows focus started on the content.

With a screen reader on, setting it to on should make reading start at the heading instead of at a button.`,
      },
    },
  },
  render: (args) => <AutoFocusContentDemo {...args} />,
};

// Uses local state rather than useArgs: on the Docs page, updateArgs only
// re-renders the primary story, so this story's Open button would do nothing.
function AutoFocusContentDemo(args: InternalModalBaseProps) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      <OakPrimaryButton onClick={() => setIsOpen(true)}>Open</OakPrimaryButton>
      <InternalModalBase
        {...args}
        isOpen={isOpen}
        onDismiss={close}
        footerSlot={
          <OakModalFooter layout="horizontal">
            <OakSecondaryButton onClick={close}>Secondary</OakSecondaryButton>
            <OakPrimaryButton onClick={close}>Primary</OakPrimaryButton>
          </OakModalFooter>
        }
      >
        <OakHeading tag="h2" id="internal-modal-base-title" $font="heading-5">
          Auto focus content
        </OakHeading>
        <OakP $mt="spacing-20">
          Toggle autoFocusContent, then open the modal with the keyboard to see
          where focus lands.
        </OakP>
      </InternalModalBase>
    </>
  );
}
