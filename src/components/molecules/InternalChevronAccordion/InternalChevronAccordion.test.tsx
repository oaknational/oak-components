import React from "react";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { InternalChevronAccordion } from "./InternalChevronAccordion";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const useRefSpy = jest.spyOn(React, "useRef");

describe(InternalChevronAccordion, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <InternalChevronAccordion initialOpen header="See more" id="see-more">
        Here it is
      </InternalChevronAccordion>,
    );

    expect(container).toMatchSnapshot();
  });

  it("toggles open and closed", () => {
    const { queryByRole, queryByText, getByText } = renderWithTheme(
      <InternalChevronAccordion header="See more" id="see-more">
        Here it is
      </InternalChevronAccordion>,
    );

    expect(queryByRole("region")).not.toBeInTheDocument();

    act(() => {
      fireEvent.click(getByText("See more"));
    });

    expect(queryByRole("region")).toBeVisible();
    expect(queryByText("Here it is")).toBeInTheDocument();

    act(() => {
      fireEvent.click(getByText("See more"));
    });

    expect(queryByRole("region")).not.toBeInTheDocument();
  });

  it("renders correct initial opacity of box shadow when scroll is present", () => {
    Object.defineProperties(HTMLElement.prototype, {
      scrollHeight: { get: () => 348, configurable: true },
      clientHeight: { get: () => 300, configurable: true },
      scrollTop: { get: () => 20, configurable: true },
    });

    const { getByTestId } = renderWithTheme(
      <InternalChevronAccordion
        header="See more"
        id="see-more"
        initialOpen={true}
      >
        Here it is
      </InternalChevronAccordion>,
    );

    const boxShadow = getByTestId("bottom-box-shadow");
    const styles = getComputedStyle(boxShadow);

    expect(useRefSpy).toHaveBeenCalled();
    expect(styles.opacity).toBe("1");
  });

  it("renders correct initial opacity of box shadow when scroll is not present", () => {
    Object.defineProperties(HTMLElement.prototype, {
      scrollHeight: { get: () => 348, configurable: true },
      clientHeight: { get: () => 348, configurable: true },
      scrollTop: { get: () => 20, configurable: true },
    });

    const { getByTestId } = renderWithTheme(
      <InternalChevronAccordion
        header="See more"
        id="see-more"
        initialOpen={true}
      >
        Here it is
      </InternalChevronAccordion>,
    );

    const boxShadow = getByTestId("bottom-box-shadow");
    const styles = getComputedStyle(boxShadow);

    expect(useRefSpy).toHaveBeenCalled();
    expect(styles.opacity).toBe("0");
  });

  it("renders correct opacity of box shadow after scrolling to the end", () => {
    const { getByTestId } = renderWithTheme(
      <InternalChevronAccordion
        header="See more"
        id="see-more"
        initialOpen={true}
      >
        Here it is
      </InternalChevronAccordion>,
    );

    Object.defineProperties(HTMLElement.prototype, {
      scrollHeight: { get: () => 348, configurable: true },
      clientHeight: { get: () => 328, configurable: true },
      scrollTop: { get: () => 0, configurable: true },
    });

    act(() => {
      fireEvent.scroll(getByTestId("scrollable-content"), {
        scrollY: 20,
      });
    });

    const boxShadow = getByTestId("bottom-box-shadow");
    const styles = getComputedStyle(boxShadow);

    expect(useRefSpy).toHaveBeenCalled();
    expect(styles.opacity).toBe("0");
  });

  it("renders correct opacity of box shadow after scrolling notto the end", async () => {
    const { getByTestId } = renderWithTheme(
      <InternalChevronAccordion
        header="See more"
        id="see-more"
        initialOpen={true}
      >
        Here it is
      </InternalChevronAccordion>,
    );

    Object.defineProperties(HTMLElement.prototype, {
      scrollHeight: { get: () => 348, configurable: true },
      clientHeight: { get: () => 328, configurable: true },
      scrollTop: { get: () => 0, configurable: true },
    });

    act(() => {
      fireEvent.scroll(getByTestId("scrollable-content"), {
        scrollY: 10,
      });
    });

    const boxShadow = getByTestId("bottom-box-shadow");
    const styles = getComputedStyle(boxShadow);

    expect(useRefSpy).toHaveBeenCalled();
    expect(styles.opacity).toBe("1");
  });
});
