import React, { FormEvent, ReactNode } from "react";

import {
  OakAccordion,
  OakCheckBox,
  OakModal,
  OakModalBody,
  OakModalFooter,
  OakModalProps,
  OakPrimaryButton,
  OakSecondaryButton,
  OakSecondaryLink,
} from "@/components/molecules";
import { OakBox, OakHeading, OakP, OakSpan, OakUL } from "@/components/atoms";

type Party = {
  name: ReactNode;
  policyURL: string;
};
type Policy = {
  /**
   * Unique identifier for the policy.
   */
  id: string;
  /**
   * Label for the policy.
   */
  label: string;
  /**
   * Description of the policy. This should explain what the policy does and why it is needed.
   */
  description: ReactNode;
  /**
   * Whether the policy is strictly necessary for the site to function.
   * If true, the policy will be enabled by default and cannot be disabled.
   */
  strictlyNecessary: boolean;
  /**
   * List of 3rd parties that the policy allows data to be shared with.
   */
  parties: Party[];
};
type ConsentState = "granted" | "denied";
type Consents = {
  [policyId: string]: ConsentState;
};

export type OakCookieSettingsModalProps = Pick<
  OakModalProps,
  "isOpen" | "onClose"
> & {
  /**
   * Triggered when the user rejects all non-essential cookies.
   */
  onReject(): void;
  /**
   * Triggered when the user confirms their cookie consent settings.
   * @param consents The user's chosen consent settings.
   */
  onConfirm(consents: Consents): void;
  /**
   * Triggered when the user accepts all cookies.
   */
  onAccept(): void;
  /**
   * URL of the site's cookie policy.
   */
  policyURL: string;
  /**
   * List of cookie policies.
   */
  policies: Policy[];
  /**
   * The user's initial consent settings.
   */
  initialConsents: Consents;
};

/**
 * Modal for managing cookie consent settings.
 */
export const OakCookieSettingsModal = ({
  isOpen,
  onClose,
  onReject,
  onConfirm,
  onAccept,
  policyURL,
  policies,
  initialConsents,
}: OakCookieSettingsModalProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newConsents: Consents = {};

    for (const policy of policies) {
      newConsents[policy.id] = policy.strictlyNecessary ? "granted" : "denied";
    }

    for (const policyId of formData.getAll("consent")) {
      newConsents[policyId.toString()] = "granted";
    }

    onConfirm(newConsents);
  };

  return (
    <OakModal
      isOpen={isOpen}
      onClose={onClose}
      footerSlot={
        <OakModalFooter>
          <OakSecondaryButton onClick={onReject} width="100%">
            Reject non-essential cookies
          </OakSecondaryButton>
          <OakPrimaryButton
            type="submit"
            form="cookie-settings-form"
            width="100%"
          >
            Confirm my choices
          </OakPrimaryButton>
        </OakModalFooter>
      }
    >
      <OakModalBody>
        <OakHeading tag="h2" $font="heading-5" $mb="space-between-s">
          This site uses cookies to store information on your computer.
        </OakHeading>
        <OakP $mb="space-between-m">
          Some of these cookies are essential, while others help us to improve
          your experience by providing insights into how the site is being used.
        </OakP>

        <OakP $mb="space-between-l">
          For more information, view our{" "}
          <OakSecondaryLink href={policyURL} target="_blank">
            cookie policy
          </OakSecondaryLink>
          .
        </OakP>
        <OakBox $mb="space-between-xl">
          <OakPrimaryButton onClick={onAccept} width="all-spacing-18">
            Allow all
          </OakPrimaryButton>
        </OakBox>
        <OakBox
          $ph="inner-padding-xs"
          as="form"
          id="cookie-settings-form"
          onSubmit={handleSubmit}
        >
          <OakHeading tag="h3" $font="heading-6" $mb="space-between-m">
            Manage consent preferences
          </OakHeading>
          {policies.map((policy) => {
            return (
              <OakAccordion
                key={policy.id}
                header={
                  <OakSpan id={`cookie-settings-${policy.id}-label`}>
                    {policy.label}
                  </OakSpan>
                }
                id={`cookies-settings-${policy.id}-accordion`}
                headerAfterSlot={
                  <OakCheckBox
                    id={`cookies-settings-${policy.id}-checkbox`}
                    name="consent"
                    displayValue=""
                    value={policy.id}
                    defaultChecked={
                      policy.strictlyNecessary ||
                      initialConsents[policy.id] === "granted"
                    }
                    disabled={policy.strictlyNecessary}
                    aria-labelledby={`cookie-settings-${policy.id}-label`}
                  />
                }
              >
                <OakP $mb="space-between-m2">{policy.description}</OakP>
                <OakBox as="dl" $pl="inner-padding-m">
                  {policy.parties.length > 0 && (
                    <>
                      <dt>Who do we share data with?</dt>
                      <OakBox as="dd" $font="body-3-bold" $mb="space-between-s">
                        <OakUL $reset>
                          {policy.parties.map((party, index, all) => (
                            <OakBox as="li" key={index} $display="inline">
                              <OakSecondaryLink
                                href={party.policyURL}
                                target="_blank"
                                rel="external nofollow"
                              >
                                {party.name}
                              </OakSecondaryLink>
                              {index < all.length - 1 && ", "}
                            </OakBox>
                          ))}
                        </OakUL>
                      </OakBox>
                    </>
                  )}
                  <dt>Does this policy need cookies to work?</dt>
                  <OakBox as="dd" $font="body-3-bold">
                    Yes.
                  </OakBox>
                </OakBox>
              </OakAccordion>
            );
          })}
        </OakBox>
      </OakModalBody>
    </OakModal>
  );
};
