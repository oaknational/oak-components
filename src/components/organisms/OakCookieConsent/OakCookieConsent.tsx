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
  Pick<OakCookieBannerProps, "isFixed" | "innerMaxWidth"> & {
    /**
     * Optional stacking context for the entire consent UI
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
