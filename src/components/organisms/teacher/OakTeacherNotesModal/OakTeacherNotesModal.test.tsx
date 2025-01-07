import React from "react";
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakTeacherNotesModal } from "./OakTeacherNotesModal";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

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
    isBold: false,
    isBulletList: false,
  };

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakTeacherNotesModal {...defaultProps} />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when open", () => {
    const { getByText } = renderWithTheme(
      <OakTeacherNotesModal {...defaultProps} />,
    );

    expect(
      getByText(
        "You can add a note to the link that will appear when it's opened, and share it easily.",
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
    const { getAllByText } = renderWithTheme(
      <OakTeacherNotesModal {...defaultProps} noteShared={true} />,
    );
    expect(getAllByText("Link copied to clipboard")).toHaveLength(2);
  });

  it("displays 'Teacher note saved' when noteSaved is true", () => {
    const { getAllByText } = renderWithTheme(
      <OakTeacherNotesModal {...defaultProps} noteSaved={true} />,
    );
    expect(getAllByText("Teacher note saved")).toHaveLength(2);
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
