import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { OakCookieConsentProvider } from "../OakCookieConsentProvider";
import {
  OakCookieConsentProviderProps,
  useCookieConsent,
} from "../OakCookieConsentProvider/OakCookieConsentProvider";

import { OakCookieConsent, OakCookieConsentProps } from "./OakCookieConsent";

import { OakSecondaryButton } from "@/components/molecules";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<
  OakCookieConsentProps &
    Pick<OakCookieConsentProviderProps, "currentConsents" | "policies">
> = {
  component: OakCookieConsent,
  tags: ["autodocs"],
  title: "components/organisms/OakCookieConsent",
  argTypes: {
    innerMaxWidth: sizeArgTypes["$maxWidth"],
  },
  args: {
    isFixed: true,
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
    currentConsents: {
      "1": "granted",
      "2": "denied",
    },
  },
  render: ({
    policies,
    policyURL,
    currentConsents,
    isFixed,
    innerMaxWidth,
  }) => {
    const [, updateArgs] = useArgs();

    return (
      <OakCookieConsentProvider
        currentConsents={currentConsents}
        policies={policies}
        onConsentChange={(consents) => {
          updateArgs({ currentConsents: consents });
        }}
      >
        <ConsentBannerButton />
        <OakCookieConsent
          policyURL={policyURL}
          isFixed={isFixed}
          innerMaxWidth={innerMaxWidth}
        />
      </OakCookieConsentProvider>
    );
  },
};

function ConsentBannerButton() {
  const { showBanner } = useCookieConsent();

  return (
    <OakSecondaryButton onClick={showBanner}>
      Start consent flow
    </OakSecondaryButton>
  );
}

export default meta;

type Story = StoryObj<
  OakCookieConsentProps &
    Pick<OakCookieConsentProviderProps, "currentConsents" | "policies">
>;

export const Default: Story = {};
