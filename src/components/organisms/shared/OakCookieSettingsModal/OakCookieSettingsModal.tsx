import React, { FormEvent } from "react";

import {
  Consent,
  PolicyConsent,
} from "@/components/organisms/shared/OakCookieConsentProvider";
import {
  OakAccordion,
  OakCheckBox,
  OakLink,
  OakModal,
  OakModalBody,
  OakModalFooter,
  OakModalProps,
  OakPrimaryButton,
  OakSecondaryButton,
  OakSecondaryLink,
} from "@/components/molecules";
import { OakBox, OakHeading, OakP, OakSpan, OakUL } from "@/components/atoms";

export type OakCookieSettingsModalProps = Pick<
  OakModalProps,
  "isOpen" | "onClose" | "zIndex"
> & {
  /**
   * Triggered when the user rejects all non-essential cookies.
   */
  onReject(): void;
  /**
   * Triggered when the user confirms their cookie consent settings.
   * @param consents The user's chosen consent settings.
   */
  onConfirm(consents: Consent[]): void;
  /**
   * Triggered when the user accepts all cookies.
   */
  onAccept(): void;
  /**
   * URL of the site's cookie policy.
   */
  policyURL: string;
  /**
   * List of cookie policies with the current consent state.
   */
  policyConsents: PolicyConsent[];
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
  policyConsents,
  zIndex,
}: OakCookieSettingsModalProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newConsents: Record<string, Consent> = {};

    for (const { policyId, isStrictlyNecessary } of policyConsents) {
      newConsents[policyId] = {
        policyId,
        consentState: isStrictlyNecessary ? "granted" : "denied",
      };
    }

    for (const policyId of formData.getAll("consent")) {
      newConsents[policyId.toString()] = {
        policyId: policyId.toString(),
        consentState: "granted",
      };
    }

    onConfirm(Object.values(newConsents));
  };

  return (
    <OakModal
      isOpen={isOpen}
      onClose={onClose}
      zIndex={zIndex}
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
        <OakHeading tag="h2" $font="heading-5" $mb="spacing-16">
          This site uses cookies to store information on your computer.
        </OakHeading>
        <OakP $mb="spacing-24">
          Some of these cookies are essential, while others help us to improve
          your experience by providing insights into how the site is being used.
        </OakP>

        <OakP $mb="spacing-48">
          For more information, view our{" "}
          <OakLink href={policyURL} target="_blank">
            cookie policy
          </OakLink>
          .
        </OakP>
        <OakBox $mb="spacing-56">
          <OakPrimaryButton onClick={onAccept} width="spacing-180">
            Allow all
          </OakPrimaryButton>
        </OakBox>
        <OakBox
          $ph="spacing-8"
          as="form"
          id="cookie-settings-form"
          onSubmit={handleSubmit}
        >
          <OakHeading tag="h3" $font="heading-6" $mb="spacing-24">
            Manage consent preferences
          </OakHeading>
          {policyConsents.map((policy) => {
            return (
              <OakAccordion
                key={policy.policyId}
                header={
                  <OakSpan id={`cookie-settings-${policy.policyId}-label`}>
                    {policy.policyLabel}
                  </OakSpan>
                }
                headerTag="h4"
                id={`cookies-settings-${policy.policyId}-accordion`}
                headerAfterSlot={
                  <OakCheckBox
                    id={`cookies-settings-${policy.policyId}-checkbox`}
                    name="consent"
                    displayValue=""
                    value={policy.policyId}
                    defaultChecked={
                      policy.isStrictlyNecessary ||
                      policy.consentState === "granted"
                    }
                    disabled={policy.isStrictlyNecessary}
                    aria-labelledby={`cookie-settings-${policy.policyId}-label`}
                  />
                }
              >
                <OakP $mb="spacing-32">{policy.policyDescription}</OakP>
                <OakBox as="dl" $pl="spacing-16">
                  {policy.policyParties.length > 0 && (
                    <>
                      <dt>Who do we share data with?</dt>
                      <OakBox as="dd" $font="body-3-bold" $mb="spacing-16">
                        <OakUL $reset>
                          {policy.policyParties.map((party, index, all) => (
                            <OakBox as="li" key={index} $display="inline">
                              <OakSecondaryLink
                                href={party.url}
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
