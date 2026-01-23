import React from "react";

import {
  OakCookieSettingsModal,
  OakCookieSettingsModalProps,
} from "@/components/cookies/OakCookieSettingsModal";
import { useInternalCookieConsent } from "@/components/cookies/OakCookieConsentProvider/OakCookieConsentProvider";
import {
  OakCookieBanner,
  OakCookieBannerProps,
} from "@/components/cookies/OakCookieBanner";

export type OakCookieConsentProps = Pick<
  OakCookieSettingsModalProps,
  "policyURL"
> &
  Pick<OakCookieBannerProps, "isFixed" | "innerMaxWidth"> & {
    /**
     * Optional stacking context for the entire consent UI
     *
     * 🚨 This prop is intended for use by consumers that do not use
     * the internal system of z-index tokens.
     */
    zIndex?: number;
  };

/**
 * Connects `OakCookieBanner` and `OakCookieSettingsModal` to `OakCookieConsentProvider`.
 */
export const OakCookieConsent = ({
  policyURL,
  isFixed,
  innerMaxWidth,
  zIndex,
}: OakCookieConsentProps) => {
  const {
    policyConsents,
    acceptModalConsents,
    rejectModalConsents,
    confirmModalConsents,
    hideBanner,
    openSettings,
    closeSettings,
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
          zIndex={zIndex}
        />
      )}
      <OakCookieSettingsModal
        policyURL={policyURL}
        policyConsents={policyConsents}
        isOpen={isSettingsModalOpen}
        onClose={closeSettings}
        onReject={rejectModalConsents}
        onConfirm={confirmModalConsents}
        onAccept={acceptModalConsents}
        zIndex={zIndex}
      />
    </>
  );
};
