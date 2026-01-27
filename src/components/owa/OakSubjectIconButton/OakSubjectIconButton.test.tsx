import React from "react";
import "@testing-library/jest-dom";

import { OakSubjectIconButton } from "./OakSubjectIconButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";
import { parseColor } from "@/styles/helpers/parseColor";
import { rgbToHex } from "@/test-helpers";

describe("OakPupilJourneySubjectButton", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakSubjectIconButton
        phase="primary"
        subjectIconName="subject-english"
        variant="vertical"
      >
        English
      </OakSubjectIconButton>,
    );
    expect(getByRole("button", { name: /English/ })).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakSubjectIconButton
        phase="primary"
        subjectIconName="subject-english"
        variant="vertical"
      >
        English
      </OakSubjectIconButton>,
    );
    expect(container).toMatchSnapshot();
  });
  describe("OakPupilJourneySubjectButton - Phase Styling", () => {
    it("applies correct styles for primary phase", () => {
      const { getByRole } = renderWithTheme(
        <OakSubjectIconButton
          phase="primary"
          subjectIconName="subject-science"
          variant="vertical"
        >
          Science
        </OakSubjectIconButton>,
      );

      const button = getByRole("button", { name: /Science/ });
      const styles = getComputedStyle(button);

      expect(rgbToHex(styles.backgroundColor)).toBe(
        parseColor("bg-decorative4-very-subdued")({ theme: oakDefaultTheme }),
      );
      expect(rgbToHex(styles.borderColor)).toBe(
        parseColor("border-decorative4-stronger")({ theme: oakDefaultTheme }),
      );
    });

    it("applies correct styles for secondary phase", () => {
      const { getByRole } = renderWithTheme(
        <OakSubjectIconButton
          phase="secondary"
          subjectIconName="subject-maths"
          variant="vertical"
        >
          Math
        </OakSubjectIconButton>,
      );

      const button = getByRole("button", { name: /Math/ });
      const styles = getComputedStyle(button);

      expect(rgbToHex(styles.backgroundColor)).toBe(
        parseColor("bg-decorative3-very-subdued")({ theme: oakDefaultTheme }),
      );
      expect(rgbToHex(styles.borderColor)).toBe(
        parseColor("border-decorative3-stronger")({ theme: oakDefaultTheme }),
      );
    });

    it("applies correct styles for non-curriculum phase", () => {
      const { getByRole } = renderWithTheme(
        <OakSubjectIconButton
          phase="non-curriculum"
          subjectIconName="subject-music"
          variant="vertical"
        >
          Music
        </OakSubjectIconButton>,
      );

      const button = getByRole("button", { name: /Music/ });
      const styles = getComputedStyle(button);

      expect(rgbToHex(styles.backgroundColor)).toBe(
        parseColor("bg-decorative1-very-subdued")({ theme: oakDefaultTheme }),
      );
      expect(rgbToHex(styles.borderColor)).toBe(
        parseColor("border-decorative1-stronger")({ theme: oakDefaultTheme }),
      );
    });
  });
});
