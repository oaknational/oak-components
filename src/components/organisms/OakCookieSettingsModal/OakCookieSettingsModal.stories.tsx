import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { OakCookieSettingsModal } from "./OakCookieSettingsModal";

import { OakSecondaryButton } from "@/components/molecules";

const meta: Meta<typeof OakCookieSettingsModal> = {
  component: OakCookieSettingsModal,
  tags: ["autodocs"],
  title: "components/organisms/OakCookieSettingsModal",
  args: {
    isOpen: false,
    policyURL: "https://example.com/privacy-policy",
    policies: [
      {
        id: "1",
        label: "Strictly necessary",
        description:
          "Any cookies required for the website to function properly.",
        strictlyNecessary: true,
        parties: [],
      },
      {
        id: "2",
        label: "Embedded content",
        description:
          "Any cookies required for video or other embedded learning content to work.",
        strictlyNecessary: false,
        parties: [
          {
            name: "Big Video",
            policyURL: "https://example.com/party-2-policy",
          },
        ],
      },
      {
        id: "3",
        label: "Statistics",
        description:
          "Statistics and analytics that allow us to see usage, find bugs and issues, and improve the service.",
        strictlyNecessary: false,
        parties: [
          {
            name: "Bug jar",
            policyURL: "https://example.com/party-3-policy",
          },
          {
            name: "Captain Stats",
            policyURL: "https://example.com/party-4-policy",
          },
        ],
      },
    ],
    initialConsents: {
      "1": "granted",
      "2": "denied",
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const onOpen = () => updateArgs({ isOpen: true });

    return (
      <>
        <OakSecondaryButton onClick={onOpen}>Open modal</OakSecondaryButton>
        <OakCookieSettingsModal {...args} onClose={onClose} />
      </>
    );
  },
};
export default meta;

type Story = StoryObj<typeof OakCookieSettingsModal>;

export const Default: Story = {};
