import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { OakPupilJourneyContentGuidance } from "./OakPupilJourneyContentGuidance";

import { OakSecondaryButton } from "@/components/molecules";

const meta: Meta<typeof OakPupilJourneyContentGuidance> = {
  component: OakPupilJourneyContentGuidance,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: ["isOpen", "contentGuidance", "supervisionLevel"],
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof OakPupilJourneyContentGuidance>;

export const Default: Story = {
  render: (args) => {
    const [, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const onOpen = () => updateArgs({ isOpen: true });

    return (
      <>
        <OakSecondaryButton onClick={onOpen}>Open modal</OakSecondaryButton>
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
  },
};
