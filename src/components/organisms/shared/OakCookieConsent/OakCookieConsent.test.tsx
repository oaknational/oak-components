import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakCookieConsent } from "./OakCookieConsent";

import {
  OakCookieConsentContext,
  getDefaultContextState,
} from "@/components/organisms/shared/OakCookieConsentProvider";
import { oakDefaultTheme } from "@/styles";
import { OakThemeProvider } from "@/components/atoms";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakCookieConsent, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakCookieConsentContext.Provider value={getDefaultContextState()}>
          <OakCookieConsent policyURL="https://example.com/privacy-policy" />
        </OakCookieConsentContext.Provider>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('hides the banner when "bannerState" is "hidden"', () => {
    const cookieContextState = getDefaultContextState();

    const { queryByTestId, rerender } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakCookieConsentContext.Provider
          value={{ ...cookieContextState, bannerState: "initial" }}
        >
          <OakCookieConsent policyURL="https://example.com/privacy-policy" />
        </OakCookieConsentContext.Provider>
      </OakThemeProvider>,
    );

    expect(queryByTestId("cookie-banner")).toBeInTheDocument();

    rerender(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakCookieConsentContext.Provider
          value={{ ...cookieContextState, bannerState: "hidden" }}
        >
          <OakCookieConsent policyURL="https://example.com/privacy-policy" />
        </OakCookieConsentContext.Provider>
      </OakThemeProvider>,
    );

    expect(queryByTestId("cookie-banner")).not.toBeInTheDocument();
  });
});
