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
    remainingCharacters: { type: "number" },
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

    const editorNode = (
      <div>
        Thank you for covering my class tomorrow. The lesson is based on this
        Oak lesson, but I’d like you to adapt it to suit the needs of the
        pupils. There are mixed abilities, though most should engage well with
        the tasks.
      </div>
    );

    return (
      <>
        <OakSecondaryButton onClick={onOpen}>Open modal</OakSecondaryButton>
        <OakTeacherNotesModal
          {...args}
          onClose={onClose}
          editorNode={editorNode}
        />
      </>
    );
  },
  args: {
    isOpen: false,
    noteSaved: false,
    noteShared: false,
    remainingCharacters: 100,
  },
};
