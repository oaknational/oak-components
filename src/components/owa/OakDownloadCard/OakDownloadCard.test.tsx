import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent } from "@testing-library/react";

import { OakDownloadCard } from "./OakDownloadCard";

import { OakRadioGroup } from "@/components/form-elements/OakRadioGroup";
import { generateOakIconURL } from "@/components/images-and-icons/OakIcon";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakDownloadCard", () => {
  it("renders a checkbox", () => {
    const { getByTestId } = renderWithTheme(
      <OakDownloadCard
        id="checkbox-1"
        value="Option 1"
        data-testid="test-1"
        title={"TITLE"}
        format={"FORMAT"}
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
        title={"TITLE"}
        format={"FORMAT"}
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
        title={"TITLE"}
        format={"FORMAT"}
        iconName={"books"}
        fileSize={"FILE_SIZE"}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders a list of formats when format is an array", () => {
    const { getByText } = renderWithTheme(
      <OakDownloadCard
        id="checkbox-1"
        value="Option 1"
        title={"TITLE"}
        format={["FORMAT1", "FORMAT2"]}
        iconName={"books"}
      />,
    );
    expect(getByText("FORMAT1")).toHaveRole("listitem");
    expect(getByText("FORMAT2")).toHaveRole("listitem");
  });

  it("renders an editable tag when isEditable is true", () => {
    const { container, getByText } = renderWithTheme(
      <OakDownloadCard
        id="checkbox-1"
        value="Option 1"
        title={"TITLE"}
        format={"FORMAT"}
        iconName={"books"}
        isEditable={true}
      />,
    );
    expect(container).toMatchSnapshot();
    expect(getByText("Editable")).toBeInTheDocument();
  });

  it("renders multiple icons when iconName is an array", () => {
    const { container } = renderWithTheme(
      <OakDownloadCard
        id="checkbox-1"
        value="Option 1"
        title={"TITLE"}
        format={"FORMAT"}
        iconName={["books", "slide-deck"]}
      />,
    );

    const imageSources = Array.from(container.querySelectorAll("img")).map(
      (image) => image.getAttribute("src") ?? "",
    );

    expect(imageSources).toEqual(
      expect.arrayContaining([
        generateOakIconURL("books"),
        generateOakIconURL("slide-deck"),
      ]),
    );
  });

  it("has a role of checkbox", () => {
    const { getByRole } = renderWithTheme(
      <OakDownloadCard
        id="checkbox-1"
        value="Option 1"
        title={"TITLE"}
        format={"FORMAT"}
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
        title={"TITLE"}
        format={"FORMAT"}
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
        title={"TITLE"}
        format={"FORMAT"}
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
        title={"TITLE"}
        format={"FORMAT"}
        iconName={"books"}
      />,
    );
    getByRole("checkbox").focus();
    getByRole("checkbox").blur();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("renders a radio when isRadio is true", () => {
    const { getByRole } = renderWithTheme(
      <OakDownloadCard
        id="radio-1"
        value="Option 1"
        title={"TITLE"}
        format={"FORMAT"}
        iconName={"books"}
        isRadio={true}
      />,
    );

    expect(getByRole("radio")).toBeInTheDocument();
  });

  it("calls both radio group and card onChange handlers in radio mode", () => {
    const onGroupChange = jest.fn();
    const onCardChange = jest.fn();

    const { getByRole } = renderWithTheme(
      <OakRadioGroup name="download-card-radio-group" onChange={onGroupChange}>
        <OakDownloadCard
          id="radio-1"
          value="Option 1"
          title={"TITLE"}
          format={"FORMAT"}
          iconName={"books"}
          isRadio={true}
          onChange={onCardChange}
        />
      </OakRadioGroup>,
    );

    act(() => {
      fireEvent.click(getByRole("radio"));
    });

    expect(onGroupChange).toHaveBeenCalledTimes(1);
    expect(onCardChange).toHaveBeenCalledTimes(1);
  });
});
