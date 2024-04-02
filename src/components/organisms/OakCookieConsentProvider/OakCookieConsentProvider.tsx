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

export type OakCookieConsentContextType = {
  /**
   * Whether the cookie settings modal is open.
   */
  isSettingsModalOpen: boolean;
  /**
   * List of cookie policies.
   */
  policies: Policy[];
  /**
   * The user's current consent settings.
   */
  currentConsents: Consents;
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
  confirmModalConsents(consents: Consents): void;
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
    policies: [],
    currentConsents: {},
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
  "policies"
> & {
  children: ReactNode;
  /**
   * The user's consent settings.
   */
  currentConsents: Consents;
  /**
   * Callback triggered when the user's consent settings change.
   * @param consents The user's updated consent settings.
   */
  onConsentChange(consents: Consents): void;
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
  currentConsents,
  policies,
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
      Object.fromEntries(policies.map((policy) => [policy.id, "granted"])),
    );
  }, [onConsentChange, policies]);
  const rejectConsents = useCallback(() => {
    onConsentChange(
      Object.fromEntries(
        policies.map((policy) => [
          policy.id,
          policy.strictlyNecessary ? "granted" : "denied",
        ]),
      ),
    );
  }, [onConsentChange, policies]);
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
    (consents: Consents) => {
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
        policies,
        currentConsents,
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
