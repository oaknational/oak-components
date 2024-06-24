import React, { ReactNode } from "react";
import { act, renderHook } from "@testing-library/react";

import {
  OakCookieConsentContextType,
  OakCookieConsentProvider,
  OakCookieConsentProviderProps,
  useInternalCookieConsent,
} from "./OakCookieConsentProvider";

describe(OakCookieConsentProvider, () => {
  describe("confirmModalConsents", () => {
    it("grants the given consents", () => {
      const onConsentChange = jest.fn();
      const { result } = renderHook(() => useInternalCookieConsent(), {
        wrapper: (props) => wrapper({ ...props, onConsentChange }),
      });

      act(() => {
        result.current.confirmModalConsents([
          { policyId: "1", consentState: "granted" },
          { policyId: "2", consentState: "denied" },
          { policyId: "3", consentState: "granted" },
        ]);
      });

      expect(onConsentChange).toHaveBeenCalledWith([
        { policyId: "1", consentState: "granted" },
        { policyId: "2", consentState: "denied" },
        { policyId: "3", consentState: "granted" },
      ]);
    });
  });

  describe("acceptModalConsents", () => {
    it("grants all consents", () => {
      const onConsentChange = jest.fn();
      const { result } = renderHook(() => useInternalCookieConsent(), {
        wrapper: (props) => wrapper({ ...props, onConsentChange }),
      });

      act(() => {
        result.current.acceptModalConsents();
      });

      expect(onConsentChange).toHaveBeenCalledWith([
        { policyId: "1", consentState: "granted" },
        { policyId: "2", consentState: "granted" },
        { policyId: "3", consentState: "granted" },
      ]);
    });
  });

  describe("rejectModalConsents", () => {
    it("grants strictly necessary consents and denies others", () => {
      const onConsentChange = jest.fn();
      const { result } = renderHook(() => useInternalCookieConsent(), {
        wrapper: (props) => wrapper({ ...props, onConsentChange }),
      });

      act(() => {
        result.current.rejectModalConsents();
      });

      expect(onConsentChange).toHaveBeenCalledWith([
        { policyId: "1", consentState: "granted" },
        { policyId: "2", consentState: "denied" },
        { policyId: "3", consentState: "denied" },
      ]);
    });
  });

  describe("acceptBannerConsents", () => {
    it("grants all consents", () => {
      const onConsentChange = jest.fn();
      const { result } = renderHook(() => useInternalCookieConsent(), {
        wrapper: (props) => wrapper({ ...props, onConsentChange }),
      });

      act(() => {
        result.current.acceptBannerConsents();
      });

      expect(onConsentChange).toHaveBeenCalledWith([
        { policyId: "1", consentState: "granted" },
        { policyId: "2", consentState: "granted" },
        { policyId: "3", consentState: "granted" },
      ]);
    });
  });

  describe("rejectBannerConsents", () => {
    it("grants strictly necessary consents and denies others", () => {
      const onConsentChange = jest.fn();
      const { result } = renderHook(() => useInternalCookieConsent(), {
        wrapper: (props) => wrapper({ ...props, onConsentChange }),
      });

      act(() => {
        result.current.rejectBannerConsents();
      });

      expect(onConsentChange).toHaveBeenCalledWith([
        { policyId: "1", consentState: "granted" },
        { policyId: "2", consentState: "denied" },
        { policyId: "3", consentState: "denied" },
      ]);
    });
  });
});

function wrapper(
  props: { children: ReactNode } & Partial<OakCookieConsentProviderProps>,
) {
  return <OakCookieConsentProvider {...createProps()} {...props} />;
}

const policyConsents: OakCookieConsentContextType["policyConsents"] = [
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
];

export function createProps(): OakCookieConsentProviderProps {
  return {
    children: null,
    policyConsents,
    onConsentChange: jest.fn(),
  };
}
