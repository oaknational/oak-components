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
        result.current.confirmModalConsents({
          "1": "granted",
          "2": "denied",
          "3": "granted",
        });
      });

      expect(onConsentChange).toHaveBeenCalledWith({
        "1": "granted",
        "2": "denied",
        "3": "granted",
      });
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

      expect(onConsentChange).toHaveBeenCalledWith({
        "1": "granted",
        "2": "granted",
        "3": "granted",
      });
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

      expect(onConsentChange).toHaveBeenCalledWith({
        "1": "granted",
        "2": "denied",
        "3": "denied",
      });
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

      expect(onConsentChange).toHaveBeenCalledWith({
        "1": "granted",
        "2": "granted",
        "3": "granted",
      });
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

      expect(onConsentChange).toHaveBeenCalledWith({
        "1": "granted",
        "2": "denied",
        "3": "denied",
      });
    });
  });
});

function wrapper(
  props: { children: ReactNode } & Partial<OakCookieConsentProviderProps>,
) {
  return <OakCookieConsentProvider {...createProps()} {...props} />;
}

const policies: OakCookieConsentContextType["policies"] = [
  {
    id: "1",
    label: "Strictly necessary",
    description: "Any cookies required for the website to function properly.",
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
];

const consents: OakCookieConsentContextType["currentConsents"] = {
  "1": "granted",
  "2": "denied",
};

export function createProps(): OakCookieConsentProviderProps {
  return {
    children: null,
    policies,
    currentConsents: consents,
    onConsentChange: jest.fn(),
  };
}
