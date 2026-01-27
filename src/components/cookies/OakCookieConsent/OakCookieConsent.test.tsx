import React from "react";
import "@testing-library/jest-dom";

import { OakCookieConsent } from "./OakCookieConsent";

import {
  OakCookieConsentContext,
  getDefaultContextState,
} from "@/components/cookies/OakCookieConsentProvider";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakCookieConsent, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakCookieConsentContext.Provider value={getDefaultContextState()}>
        <OakCookieConsent policyURL="https://example.com/privacy-policy" />
      </OakCookieConsentContext.Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('hides the banner when "bannerState" is "hidden"', () => {
    const cookieContextState = getDefaultContextState();

    const { queryByTestId, rerender } = renderWithTheme(
      <OakCookieConsentContext.Provider
        value={{ ...cookieContextState, bannerState: "initial" }}
      >
        <OakCookieConsent policyURL="https://example.com/privacy-policy" />
      </OakCookieConsentContext.Provider>,
    );

    expect(queryByTestId("cookie-banner")).toBeInTheDocument();

    rerender(
      <OakCookieConsentContext.Provider
        value={{ ...cookieContextState, bannerState: "hidden" }}
      >
        <OakCookieConsent policyURL="https://example.com/privacy-policy" />
      </OakCookieConsentContext.Provider>,
    );

    expect(queryByTestId("cookie-banner")).not.toBeInTheDocument();
  });
});
