import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { OakTeacherNotesModal } from "./OakTeacherNotesModal";

import { OakSecondaryButton } from "@/components/molecules";

const meta: Meta<typeof OakTeacherNotesModal> = {
  component: OakTeacherNotesModal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      type: "boolean",
    },
    noteSaved: {
      type: "boolean",
    },
    noteShared: {
      type: "boolean",
    },
  },
  parameters: {
    controls: {
      include: ["isOpen", "noteSaved", "noteShared"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakTeacherNotesModal>;

export const Default: Story = {
  render: (args) => {
    const [, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const onOpen = () => updateArgs({ isOpen: true });

    return (
      <>
        <OakSecondaryButton onClick={onOpen}>Open modal</OakSecondaryButton>
        <OakTeacherNotesModal {...args} onClose={onClose} />
      </>
    );
  },
  args: {
    isOpen: false,
    noteSaved: false,
    noteShared: false,
  },
};
