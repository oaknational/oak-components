import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { OakPupilJourneyContentGuidance } from "./OakPupilJourneyContentGuidance";

import { OakButton } from "@/components/buttons/OakButton";

const meta: Meta<typeof OakPupilJourneyContentGuidance> = {
  tags: ["autodocs"],
  title: "OWA/pupil/OakPupilJourneyContentGuidance",
  component: OakPupilJourneyContentGuidance,
  parameters: {
    controls: {
      include: [
        "isOpen",
        "title",
        "contentGuidance",
        "supervisionLevel",
        "declineIcon",
      ],
    },
  },
  argTypes: {
    title: { type: "string" },
    declineIcon: {
      control: "select",
      options: ["cross", "arrow-left"],
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof OakPupilJourneyContentGuidance>;

export const Default: Story = {
  render: function DefaultStory(args) {
    const [, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const onOpen = () => updateArgs({ isOpen: true });

    return (
      <>
        <OakButton variant="secondary" onClick={onOpen}>
          Open modal
        </OakButton>
        <OakPupilJourneyContentGuidance
          {...args}
          onAccept={onClose}
          onDecline={onClose}
        />
      </>
    );
  },
  args: {
    contentGuidance: [
      {
        contentguidanceLabel:
          "Contains depictions of discriminatory behaviour.",
        contentguidanceArea: "Language/ Discrimination",
        contentguidanceDescription: "legacy content guidance",
      },
      {
        contentguidanceLabel:
          "Contains subject matter which individuals may find upsetting.",
        contentguidanceArea: "Upsetting content",
        contentguidanceDescription: "Smoking or alcohol use",
      },
    ],
    supervisionLevel: "Adult supervision suggested.",
    declineIcon: "arrow-left",
  },
};
