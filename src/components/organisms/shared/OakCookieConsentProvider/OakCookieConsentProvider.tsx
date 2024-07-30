import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

import {
  CookieConsentReducerState,
  cookieConsentReducer,
  getInitialState,
} from "./cookieConsentReducer";

type Party = {
  name: ReactNode;
  url: string;
};
export type Consent = {
  /**
   * Unique identifier for the policy.
   */
  policyId: string;
  /**
   * The user's consent state for the policy.
   */
  consentState: ConsentState;
};
export type PolicyConsent = {
  /**
   * Unique identifier for the policy.
   */
  policyId: string;
  /**
   * Label for the policy.
   */
  policyLabel: string;
  /**
   * Description of the policy. This should explain what the policy does and why it is needed.
   */
  policyDescription: ReactNode;
  /**
   * Whether the policy is strictly necessary for the site to function.
   * If true, the policy will be enabled by default and cannot be disabled.
   */
  isStrictlyNecessary: boolean;
  /**
   * List of 3rd parties that the policy allows data to be shared with.
   */
  policyParties: Party[];
  /**
   * The current consent state of the policy
   */
  consentState: ConsentStateWithPending;
};
export type ConsentState = "granted" | "denied";
export type ConsentStateWithPending = ConsentState | "pending";

export type OakCookieConsentContextType = {
  /**
   * Whether the cookie settings modal is open.
   */
  isSettingsModalOpen: boolean;
  /**
   * List of cookie policies with the current consent state.
   */
  policyConsents: PolicyConsent[];
  /**
   * Open the cookie settings modal.
   **/
  openSettings(): void;
  /**
   * Close the cookie settings modal.
   */
  closeSettings(): void;
  /**
   * Show the cookie consent banner.
   */
  showBanner(): void;
  /**
   * Hide the cookie consent banner.
   */
  hideBanner(): void;
  /**
   * Reject all non-essential cookies from the settings modal.
   */
  rejectModalConsents(): void;
  /**
   * Confirm the user's consent settings from the modal.
   * @param consents The user's chosen consent settings.
   */
  confirmModalConsents(consents: Consent[]): void;
  /**
   * Consent to all cookies from the modal.
   */
  acceptModalConsents(): void;
  /**
   * Reject all non-essential cookies from the banner.
   */
  rejectBannerConsents(): void;
  /**
   * Accept all cookies from the banner.
   */
  acceptBannerConsents(): void;
  /**
   * The current state of the cookie banner.
   */
  bannerState: CookieConsentReducerState["bannerState"];
};

export function getDefaultContextState(): OakCookieConsentContextType {
  return {
    isSettingsModalOpen: false,
    policyConsents: [],
    showBanner() {},
    hideBanner() {},
    openSettings() {},
    closeSettings() {},
    rejectModalConsents() {},
    confirmModalConsents() {},
    acceptModalConsents() {},
    rejectBannerConsents() {},
    acceptBannerConsents() {},
    bannerState: "initial",
  };
}

export const OakCookieConsentContext =
  createContext<OakCookieConsentContextType>(getDefaultContextState());

export type OakCookieConsentProviderProps = Pick<
  OakCookieConsentContextType,
  "policyConsents"
> & {
  children: ReactNode;
  /**
   * Callback triggered when the user's consent settings change.
   * @param consents The user's updated consent settings.
   */
  onConsentChange(consents: Consent[]): void;
};

/**
 * Internal hook for consuming the OakCookieConsentContext.
 *
 * This should not be exported from the package.
 */
export function useInternalCookieConsent() {
  return useContext(OakCookieConsentContext);
}

/**
 * Enables opening of the cookie settings modal and showing the cookie consent banner.
 */
export function useCookieConsent() {
  const { showBanner, openSettings } = useContext(OakCookieConsentContext);
  return { showBanner, openSettings };
}

/**
 * Provides a context through which the cookie consent UI can be configured and controlled
 *
 * Intended to be used with `OakCookieConsent`
 */
export const OakCookieConsentProvider = ({
  children,
  policyConsents,
  onConsentChange,
}: OakCookieConsentProviderProps) => {
  const [cookieConsentState, dispatch] = useReducer(
    cookieConsentReducer,
    null,
    getInitialState,
  );
  const closeSettings = useCallback(() => dispatch({ type: "closeModal" }), []);
  const acceptConsents = useCallback(() => {
    onConsentChange(
      policyConsents.map(({ policyId }) => ({
        policyId,
        consentState: "granted",
      })),
    );
  }, [onConsentChange, policyConsents]);
  const rejectConsents = useCallback(() => {
    onConsentChange(
      policyConsents.map(({ policyId, isStrictlyNecessary }) => ({
        policyId,
        consentState: isStrictlyNecessary ? "granted" : "denied",
      })),
    );
  }, [onConsentChange, policyConsents]);
  const hideBanner = useCallback(() => dispatch({ type: "hideBanner" }), []);
  const showBanner = useCallback(() => dispatch({ type: "showBanner" }), []);
  const openSettings = useCallback(() => dispatch({ type: "openModal" }), []);
  const acceptBannerConsents = useCallback(() => {
    acceptConsents();
    dispatch({ type: "acceptBannerConsents" });
  }, [acceptConsents]);
  const rejectBannerConsents = useCallback(() => {
    rejectConsents();
    dispatch({ type: "rejectBannerConsents" });
  }, [rejectConsents]);
  const acceptModalConsents = useCallback(() => {
    acceptConsents();
    dispatch({ type: "acceptModalConsents" });
  }, [acceptConsents, hideBanner]);
  const rejectModalConsents = useCallback(() => {
    rejectConsents();
    dispatch({ type: "rejectModalConsents" });
  }, [rejectConsents, hideBanner]);
  const confirmModalConsents = useCallback(
    (consents: Consent[]) => {
      onConsentChange(consents);
      dispatch({ type: "confirmModalConsents" });
    },
    [onConsentChange, hideBanner],
  );

  return (
    <OakCookieConsentContext.Provider
      value={{
        isSettingsModalOpen: cookieConsentState.isSettingsModalOpen,
        bannerState: cookieConsentState.bannerState,
        policyConsents,
        showBanner,
        hideBanner,
        openSettings,
        closeSettings,
        confirmModalConsents,
        acceptBannerConsents,
        rejectBannerConsents,
        acceptModalConsents,
        rejectModalConsents,
      }}
    >
      {children}
    </OakCookieConsentContext.Provider>
  );
};
