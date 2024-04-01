import React from "react";
import { create } from "react-test-renderer";
import { fireEvent, act } from "@testing-library/react";

import {
  OakCookieSettingsModal,
  OakCookieSettingsModalProps,
} from "./OakCookieSettingsModal";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";
import "@/test-helpers/mockIntersectionObserver";

describe(OakCookieSettingsModal, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakCookieSettingsModal {...createProps()} />
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
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

    expect(props.onConfirm).toHaveBeenCalledWith({
      "1": "granted",
      "2": "granted",
      "3": "denied",
    });
  });
});

export function createProps(
  overrides?: Partial<OakCookieSettingsModalProps>,
): OakCookieSettingsModalProps {
  return {
    isOpen: false,
    policyURL: "https://example.com/privacy-policy",
    policies: [
      {
        id: "1",
        label: "Strictly necessary",
        description:
          "Any cookies required for the website to function properly.",
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
    ],
    initialConsents: {
      "1": "granted",
      "2": "denied",
    },
    onClose: jest.fn(),
    onReject: jest.fn(),
    onConfirm: jest.fn(),
    onAccept: jest.fn(),
    ...overrides,
  };
}
