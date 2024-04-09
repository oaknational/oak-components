import React from "react";

import { OakCookieBanner, OakCookieBannerProps } from "../OakCookieBanner";
import {
  OakCookieSettingsModal,
  OakCookieSettingsModalProps,
} from "../OakCookieSettingsModal";
import { useInternalCookieConsent } from "../OakCookieConsentProvider/OakCookieConsentProvider";

export type OakCookieConsentProps = Pick<
  OakCookieSettingsModalProps,
  "policyURL"
> &
  Pick<OakCookieBannerProps, "isFixed" | "innerMaxWidth">;

/**
 * Connects `OakCookieBanner` and `OakCookieSettingsModal` to `OakCookieConsentProvider`.
 */
export const OakCookieConsent = ({
  policyURL,
  isFixed,
  innerMaxWidth,
}: OakCookieConsentProps) => {
  const {
    policies,
    acceptModalConsents,
    rejectModalConsents,
    confirmModalConsents,
    hideBanner,
    openSettings,
    closeSettings,
    currentConsents,
    isSettingsModalOpen,
    acceptBannerConsents,
    rejectBannerConsents,
    bannerState,
  } = useInternalCookieConsent();
  return (
    <>
      {bannerState !== "hidden" && (
        <OakCookieBanner
          onHide={hideBanner}
          onAccept={acceptBannerConsents}
          onReject={rejectBannerConsents}
          onOpenSettings={openSettings}
          state={bannerState}
          isFixed={isFixed}
          innerMaxWidth={innerMaxWidth}
        />
      )}
      <OakCookieSettingsModal
        policyURL={policyURL}
        policies={policies}
        isOpen={isSettingsModalOpen}
        onClose={closeSettings}
        onReject={rejectModalConsents}
        onConfirm={confirmModalConsents}
        onAccept={acceptModalConsents}
        initialConsents={currentConsents}
      />
    </>
  );
};
