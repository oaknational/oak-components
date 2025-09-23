import React from "react";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { OakCookieBanner, OakCookieBannerProps } from "./OakCookieBanner";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakCookieBanner, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakCookieBanner {...createProps()} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('is correctly positioned when "isFixed" is true', () => {
    const { getByTestId } = renderWithTheme(
      <OakCookieBanner {...createProps()} isFixed />,
    );

    expect(getByTestId("cookie-banner")).toHaveStyle(
      "position: fixed; bottom: 0rem; left: 0rem; right: 0rem",
    );
  });

  describe('when the state is "initial"', () => {
    it.each([
      ["onAccept", "Accept all cookies"],
      ["onReject", "Reject non-essential cookies"],
      ["onOpenSettings", "Cookie settings"],
    ] satisfies [keyof OakCookieBannerProps, string][])(
      "should call %p when the %p button is pressed",
      (callback, buttonLabel) => {
        const props = createProps();
        const { getByText } = renderWithTheme(<OakCookieBanner {...props} />);

        act(() => {
          fireEvent.click(getByText(buttonLabel));
        });

        expect(props[callback]).toHaveBeenCalled();
      },
    );
  });

  describe.each([
    "accepted",
    "rejected",
  ] satisfies OakCookieBannerProps["state"][])(
    "when the state is %p",
    (state) => {
      it('should call "onHide" when the "Hide this message" button is pressed', () => {
        const props = createProps();
        const { getByText } = renderWithTheme(
          <OakCookieBanner {...props} state={state} />,
        );

        act(() => {
          fireEvent.click(getByText("Hide this message"));
        });

        expect(props.onHide).toHaveBeenCalled();
      });

      it('should call "onOpenSettings" when the "change your cookie settings" button is pressed', () => {
        const props = createProps();
        const { getByText } = renderWithTheme(
          <OakCookieBanner {...props} state={state} />,
        );

        act(() => {
          fireEvent.click(getByText("change your cookie settings"));
        });

        expect(props.onOpenSettings).toHaveBeenCalled();
      });
    },
  );
});

function createProps(): OakCookieBannerProps {
  return {
    state: "initial",
    onHide: jest.fn(),
    onAccept: jest.fn(),
    onReject: jest.fn(),
    onOpenSettings: jest.fn(),
  };
}
