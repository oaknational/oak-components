import React from "react";
import { create } from "react-test-renderer";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { InternalChevronAccordion } from "./InternalChevronAccordion";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(InternalChevronAccordion, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <InternalChevronAccordion initialOpen header="See more" id="see-more">
          Here it is
        </InternalChevronAccordion>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
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

  it("performs correct action when the content is scrolled", () => {
    const { getByTestId } = renderWithTheme(
      <InternalChevronAccordion
        header="See more"
        id="see-more"
        initialOpen={true}
      >
        Here it is
      </InternalChevronAccordion>,
    );

    jest.spyOn(React, "useRef").mockReturnValue({
      current: {
        scrollHeight: 348,
        clientHeight: 300,
        scrollTop: 20,
      },
    });

    const boxShadow = getByTestId("bottom-box-shadow");
    const styles = getComputedStyle(boxShadow);

    expect(styles.opacity).toBe("0");

    act(() => {
      fireEvent.scroll(getByTestId("scrollable-content"), {
        scrollY: 10,
      });
    });
  });
});
