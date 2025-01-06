import React from "react";
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";

import { OakTeacherNotesModal } from "./OakTeacherNotesModal";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakTeacherNotesModal", () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    onShareClicked: jest.fn(),
    onSaveClicked: jest.fn(),
    noteSaved: false,
    noteShared: false,
    editorNode: <div>Editor</div>,
    onBoldClick: jest.fn(),
    onBulletListClick: jest.fn(),
    remainingCharacters: 100,
  };

  it("renders correctly when open", () => {
    const { getByText } = renderWithTheme(
      <OakTeacherNotesModal {...defaultProps} />,
    );
    expect(
      getByText("Add note about the lesson and share"),
    ).toBeInTheDocument();
    expect(
      getByText(
        "You can add a note that will be displayed when the copied link is opened.",
      ),
    ).toBeInTheDocument();
    expect(getByText("Editor")).toBeInTheDocument();
    expect(getByText("100")).toBeInTheDocument();
  });

  it("calls onClose when the modal is closed", () => {
    renderWithTheme(<OakTeacherNotesModal {...defaultProps} />);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("calls onShareClicked when the share button is clicked", () => {
    renderWithTheme(<OakTeacherNotesModal {...defaultProps} />);
    fireEvent.click(screen.getByRole("button", { name: /share link/i }));
    expect(defaultProps.onShareClicked).toHaveBeenCalled();
  });

  it("calls onSaveClicked when the save link is clicked", () => {
    renderWithTheme(<OakTeacherNotesModal {...defaultProps} />);
    fireEvent.click(
      screen.getByRole("button", { name: /save note for later/i }),
    );
    expect(defaultProps.onSaveClicked).toHaveBeenCalled();
  });

  it("displays 'Link copied to clipboard' when noteShared is true", () => {
    renderWithTheme(
      <OakTeacherNotesModal {...defaultProps} noteShared={true} />,
    );
    expect(screen.getByText("Link copied to clipboard")).toBeInTheDocument();
  });

  it("displays 'Teacher note saved' when noteSaved is true", () => {
    renderWithTheme(
      <OakTeacherNotesModal {...defaultProps} noteSaved={true} />,
    );
    expect(screen.getByText("Teacher note saved")).toBeInTheDocument();
  });

  it("calls onBoldClick when the Bold button is clicked", () => {
    renderWithTheme(<OakTeacherNotesModal {...defaultProps} />);
    fireEvent.click(screen.getByRole("button", { name: /bold/i }));
    expect(defaultProps.onBoldClick).toHaveBeenCalled();
  });

  it("calls onBulletListClick when the Bullet List button is clicked", () => {
    renderWithTheme(<OakTeacherNotesModal {...defaultProps} />);
    fireEvent.click(screen.getByRole("button", { name: /bullet list/i }));
    expect(defaultProps.onBulletListClick).toHaveBeenCalled();
  });
});
