import React from "react";
import { fireEvent, act } from "@testing-library/react";

import {
  OakCookieSettingsModal,
  OakCookieSettingsModalProps,
} from "./OakCookieSettingsModal";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { installMockIntersectionObserver } from "@/test-helpers";

installMockIntersectionObserver();

describe(OakCookieSettingsModal, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakCookieSettingsModal {...createProps()} />,
    );

    expect(container).toMatchSnapshot();
  });

  it.each([
    ["onAccept", "Allow all"],
    ["onReject", "Reject non-essential cookies"],
  ] satisfies [keyof OakCookieSettingsModalProps, string][])(
    "should call %p when the %p button is pressed",
    (callback, buttonLabel) => {
      const props = createProps();
      const { getByText } = renderWithTheme(
        <OakCookieSettingsModal {...props} isOpen />,
      );

      act(() => {
        fireEvent.click(getByText(buttonLabel));
      });

      expect(props[callback]).toHaveBeenCalled();
    },
  );

  it('calls "onConfirm" with the correct consents when the form is submitted', () => {
    const props = createProps();
    const { getByRole, getByText } = renderWithTheme(
      <OakCookieSettingsModal {...props} isOpen />,
    );

    act(() => {
      fireEvent.click(getByRole("checkbox", { name: "Embedded content" }));
      fireEvent.click(getByText("Confirm my choices"));
    });

    expect(props.onConfirm).toHaveBeenCalledWith([
      { policyId: "1", consentState: "granted" },
      { policyId: "2", consentState: "granted" },
      { policyId: "3", consentState: "denied" },
    ]);
  });
});

export function createProps(
  overrides?: Partial<OakCookieSettingsModalProps>,
): OakCookieSettingsModalProps {
  return {
    isOpen: false,
    policyURL: "https://example.com/privacy-policy",
    policyConsents: [
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
    ],

    onClose: jest.fn(),
    onReject: jest.fn(),
    onConfirm: jest.fn(),
    onAccept: jest.fn(),
    ...overrides,
  };
}
