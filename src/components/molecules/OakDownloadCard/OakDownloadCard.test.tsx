import React from "react";
import "@testing-library/jest-dom";

import { OakDownloadCard } from "./OakDownloadCard";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakDownloadCard", () => {
  it("renders a checkbox", () => {
    const { getByTestId } = renderWithTheme(
      <OakDownloadCard
        id="checkbox-1"
        value="Option 1"
        data-testid="test-1"
        titleSlot={"TITLE"}
        formatSlot={"FORMAT"}
        iconName={"books"}
      />,
    );
    expect(getByTestId("test-1")).toBeInTheDocument();
  });

  it("matches snapshot without fileSizeSlot", () => {
    const { container } = renderWithTheme(
      <OakDownloadCard
        id="checkbox-1"
        value="Option 1"
        titleSlot={"TITLE"}
        formatSlot={"FORMAT"}
        iconName={"books"}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with fileSizeSlot", () => {
    const { container } = renderWithTheme(
      <OakDownloadCard
        id="checkbox-1"
        value="Option 1"
        titleSlot={"TITLE"}
        formatSlot={"FORMAT"}
        iconName={"books"}
        fileSizeSlot={"FILE_SIZE"}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("has a role of checkbox", () => {
    const { getByRole } = renderWithTheme(
      <OakDownloadCard
        id="checkbox-1"
        value="Option 1"
        titleSlot={"TITLE"}
        formatSlot={"FORMAT"}
        iconName={"books"}
      />,
    );

    expect(getByRole("checkbox")).toBeInTheDocument();
  });

  it("can be checked and unchecked through clicking", () => {
    const { getByRole } = renderWithTheme(
      <OakDownloadCard
        id="checkbox-1"
        value="Option 1"
        titleSlot={"TITLE"}
        formatSlot={"FORMAT"}
        iconName={"books"}
      />,
    );
    getByRole("checkbox").click();
    expect(getByRole("checkbox")).toBeChecked();
    getByRole("checkbox").click();
    expect(getByRole("checkbox")).not.toBeChecked();
  });

  it("calls onChange method when checked and unchecked", () => {
    const onChange = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakDownloadCard
        id="checkbox-1"
        value="Option 1"
        onChange={onChange}
        titleSlot={"TITLE"}
        formatSlot={"FORMAT"}
        iconName={"filter"}
      />,
    );
    getByRole("checkbox").click();
    getByRole("checkbox").click();
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it("calls onFocus and onBlur with focus and blur", () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakDownloadCard
        id="checkbox-1"
        value="Option 1"
        onFocus={onFocus}
        onBlur={onBlur}
        titleSlot={"TITLE"}
        formatSlot={"FORMAT"}
        iconName={"books"}
      />,
    );
    getByRole("checkbox").focus();
    getByRole("checkbox").blur();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
