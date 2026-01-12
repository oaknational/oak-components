import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { OakCookieSettingsModal } from "./OakCookieSettingsModal";

import { OakSecondaryButton } from "@/components/molecules";

const meta: Meta<typeof OakCookieSettingsModal> = {
  component: OakCookieSettingsModal,
  tags: ["autodocs"],
  title: "components/Cookies/OakCookieSettingsModal",

  args: {
    isOpen: false,
    policyURL: "https://example.com/privacy-policy",
    policyConsents: [
      {
        policyId: "1",
        policyLabel: "Strictly necessary",
        policyDescription:
          "Any cookies required for the website to function properly.",
        isStrictlyNecessary: true,
        policyParties: [],
        consentState: "granted",
      },
      {
        policyId: "2",
        policyLabel: "Embedded content",
        policyDescription:
          "Any cookies required for video or other embedded learning content to work.",
        isStrictlyNecessary: false,
        policyParties: [
          {
            name: "Big Video",
            url: "https://example.com/party-2-policy",
          },
        ],
        consentState: "denied",
      },
      {
        policyId: "3",
        policyLabel: "Statistics",
        policyDescription:
          "Statistics and analytics that allow us to see usage, find bugs and issues, and improve the service.",
        isStrictlyNecessary: false,
        policyParties: [
          {
            name: "Bug jar",
            url: "https://example.com/party-3-policy",
          },
          {
            name: "Captain Stats",
            url: "https://example.com/party-4-policy",
          },
        ],
        consentState: "pending",
      },
    ],
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
