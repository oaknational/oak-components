import React from "react";
import "@testing-library/jest-dom";

import { OakSubjectIconButton } from "./OakSubjectIconButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";
import { parseColor } from "@/styles/helpers/parseColor";
import { rgbToHex } from "@/test-helpers";

describe("OakSubjectIconButton", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakSubjectIconButton
        colorScheme="primary"
        subjectIconName="subject-english"
        orientation="vertical"
      >
        English
      </OakSubjectIconButton>,
    );
    expect(getByRole("button", { name: /English/ })).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakSubjectIconButton
        colorScheme="primary"
        subjectIconName="subject-english"
        orientation="vertical"
      >
        English
      </OakSubjectIconButton>,
    );
    expect(container).toMatchSnapshot();
  });
  describe("OakSubjectIconButton - Phase Styling", () => {
    it("applies correct styles for primary phase", () => {
      const { getByRole } = renderWithTheme(
        <OakSubjectIconButton
          colorScheme="primary"
          subjectIconName="subject-science"
          orientation="vertical"
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
          colorScheme="secondary"
          subjectIconName="subject-maths"
          orientation="vertical"
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
          colorScheme="non-curriculum"
          subjectIconName="subject-music"
          orientation="vertical"
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
    it("applies selected styles", () => {
      const { getByRole } = renderWithTheme(
        <OakSubjectIconButton
          colorScheme="secondary"
          subjectIconName="subject-music"
          orientation="horizontal"
          isSelected
        >
          Music
        </OakSubjectIconButton>,
      );

      const button = getByRole("button", { name: /Music/ });
      const styles = getComputedStyle(button);

      expect(rgbToHex(styles.backgroundColor)).toBe(
        parseColor("bg-decorative3-subdued")({ theme: oakDefaultTheme }),
      );
      expect(rgbToHex(styles.borderColor)).toBe(
        parseColor("border-decorative3-stronger")({ theme: oakDefaultTheme }),
      );
      expect(styles.borderWidth).toBe("0.25rem");
    });
  });
});
