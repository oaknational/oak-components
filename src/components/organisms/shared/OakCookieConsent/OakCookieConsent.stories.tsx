import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { action } from "@storybook/addon-actions";

import { OakCookieConsent, OakCookieConsentProps } from "./OakCookieConsent";

import { OakCookieConsentProvider } from "@/components/organisms/shared/OakCookieConsentProvider";
import {
  OakCookieConsentProviderProps,
  useCookieConsent,
} from "@/components/organisms/shared/OakCookieConsentProvider/OakCookieConsentProvider";
import { OakSecondaryButton } from "@/components/molecules";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";

const meta: Meta<
  OakCookieConsentProps &
    Pick<OakCookieConsentProviderProps, "policyConsents" | "onConsentChange">
> = {
  component: OakCookieConsent,
  tags: ["autodocs"],
  title: "components/others/OakCookieConsent",
  argTypes: {
    innerMaxWidth: sizeArgTypes["$maxWidth"],
    zIndex: { control: "number" },
  },
  args: {
    isFixed: true,
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
    onConsentChange: action("onConsentChange"),
  },
  render: ({ policyConsents, policyURL, isFixed, innerMaxWidth, zIndex }) => {
    const [{ onConsentChange }] = useArgs();

    return (
      <OakCookieConsentProvider
        policyConsents={policyConsents}
        onConsentChange={onConsentChange}
      >
        <ConsentBannerButton />
        <OakCookieConsent
          policyURL={policyURL}
          isFixed={isFixed}
          innerMaxWidth={innerMaxWidth}
          zIndex={zIndex}
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
  OakCookieConsentProps & Pick<OakCookieConsentProviderProps, "policyConsents">
>;

export const Default: Story = {};
