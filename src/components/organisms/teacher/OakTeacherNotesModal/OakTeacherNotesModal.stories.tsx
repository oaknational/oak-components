import React from "react";
import styled from "styled-components";
import { StoryObj, Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { OakTeacherNotesModal } from "./OakTeacherNotesModal";

import { OakSecondaryButton } from "@/components/molecules";

// This component is just to demo how to insert a Tiptap editor into the modal
// This work should actally be done from OWA to avoid bloating oak components

const StyledEditorContent = styled(EditorContent)`
  .tiptap:focus {
    outline: none;
  }
`;

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
  });

  return (
    <StyledEditorContent
      editor={editor}
      style={{ flexDirection: "column", flex: 1 }}
    />
  );
};

////////////////////////////////////////////

/**
 *
 * Used on the lesson overview page in OWA for teachers to record and share notes.
 *
 * ### Events
 * - onClose: Fired when the modal is closed.
 * - onSave: Fired when the save button is clicked.
 * - onShare: Fired when the share button is clicked.
 * - onBulletListClick: Fired when the bullet list button is clicked.
 * - onBoldClick: Fired when the bold button is clicked.
 *
 * ### Props
 * - isOpen: Whether the modal is open.
 * - progressSaved: Whether the note has been saved (used to show a success message).
 * - noteShared: Whether the note has been shared (used to show a success message).
 * - remainingCharacters: The number of characters remaining in the note.
 * - editorNode: The node to render in the editor. This should be a Tiptap editor.
 *
 */

const meta: Meta<typeof OakTeacherNotesModal> = {
  component: OakTeacherNotesModal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      type: "boolean",
    },
    progressSaved: {
      type: "boolean",
    },
    noteShared: {
      type: "boolean",
    },
    error: {
      type: "boolean",
    },
    isBold: {
      type: "boolean",
    },
    isBulletList: {
      type: "boolean",
    },
    remainingCharacters: { type: "number" },
  },
  parameters: {
    controls: {
      include: [
        "isOpen",
        "progressSaved",
        "noteShared",
        "error",
        "isBold",
        "isBulletList",
      ],
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
    progressSaved: false,
    error: false,
    noteShared: false,
    remainingCharacters: 100,
  },
};

export const WithTipTap: Story = {
  render: (args) => {
    const [, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const onOpen = () => updateArgs({ isOpen: true });

    const editorNode = <Tiptap />;

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
    progressSaved: false,
    noteShared: false,
    remainingCharacters: 100,
  },
};
