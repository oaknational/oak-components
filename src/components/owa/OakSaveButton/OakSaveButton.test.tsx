import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import { OakSaveButton } from "./OakSaveButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const render = renderWithTheme;

describe("OakSaveButton", () => {
  it("renders correctly with default props", () => {
    render(
      <OakSaveButton
        isSaved={false}
        isLoading={false}
        onSave={() => console.log("Save action triggered")}
        unavailable={false}
        saveButtonId="save-button"
        title="Test unit"
      />,
    );
    const button = screen.getByRole("button", {
      name: "Save this unit: Test unit",
    });

    expect(button).toBeInTheDocument();
  });
  it('renders correctly with "Saved" text when isSaved is true', () => {
    render(
      <OakSaveButton
        isSaved={true}
        isLoading={false}
        onSave={() => console.log("Save action triggered")}
        unavailable={false}
        saveButtonId="save-button"
        title="Test unit"
      />,
    );
    const button = screen.getByRole("button", {
      name: "Unsave this unit: Test unit",
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Saved");
  });
  it('renders correctly with "Save" text when isSaved is false', () => {
    render(
      <OakSaveButton
        isSaved={false}
        isLoading={false}
        onSave={() => console.log("Save action triggered")}
        unavailable={false}
        saveButtonId="save-button"
        title="Test unit"
      />,
    );
    const button = screen.getByRole("button", {
      name: "Save this unit: Test unit",
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Save");
  });
  it("disables the button when isLoading is true", () => {
    render(
      <OakSaveButton
        isSaved={false}
        isLoading={true}
        onSave={() => console.log("Save action triggered")}
        unavailable={false}
        saveButtonId="save-button"
        title="Test unit"
      />,
    );
    const button = screen.getByRole("button", {
      name: "Save this unit: Test unit",
    });
    expect(button).toHaveAttribute("aria-disabled", "true");
  });
  it("disables the button when unavailable is true", () => {
    render(
      <OakSaveButton
        isSaved={false}
        isLoading={false}
        onSave={() => console.log("Save action triggered")}
        unavailable={true}
        saveButtonId="save-button"
        title="Test unit"
      />,
    );
    const button = screen.getByRole("button", {
      name: "Save this unit: Test unit",
    });

    expect(button).toBeDisabled();
  });
  it("calls onSave when the button is clicked", () => {
    const mockOnSave = jest.fn();
    render(
      <OakSaveButton
        isSaved={false}
        isLoading={false}
        onSave={mockOnSave}
        unavailable={false}
        saveButtonId="save-button"
        title="Test unit"
      />,
    );
    const button = screen.getByRole("button", {
      name: "Save this unit: Test unit",
    });

    button.click();
    expect(mockOnSave).toHaveBeenCalledTimes(1);
  });
});
