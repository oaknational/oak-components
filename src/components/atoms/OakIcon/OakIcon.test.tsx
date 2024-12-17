import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakIcon, generateOakIconURL, isValidIconName } from "./OakIcon";

describe("OakIcon", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <OakIcon data-testid="test" iconName="home" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakIcon iconName="home" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("defaults to 32px width and height", () => {
    const { getByTestId } = render(
      <OakIcon data-testid="test" iconName="home" />,
    );
    expect(getByTestId("test")).toHaveStyle({
      width: "2rem",
      height: "2rem",
    });
  });
  it("sets the width and height", () => {
    const { getByTestId } = render(
      <OakIcon
        data-testid="test"
        iconName="home"
        $width="all-spacing-5"
        $height="all-spacing-5"
      />,
    );
    expect(getByTestId("test")).toHaveStyle({
      width: "1.25rem",
      height: "1.25rem",
    });
  });

  it("defaults the alt text to the icon name", () => {
    const { getByRole } = render(
      <OakIcon data-testid="test" iconName="home" />,
    );
    expect(getByRole("img")).toHaveAttribute("alt", "home");
  });

  it("sets the alt text", () => {
    const { getByRole } = render(
      <OakIcon data-testid="test" iconName="home" alt="Home" />,
    );
    expect(getByRole("img")).toHaveAttribute("alt", "Home");
  });
  it("handles typedImageMap being undefined", () => {
    const { getByRole } = render(
      <OakIcon data-testid="test" iconName="home" />,
    );
    expect(getByRole("img")).toHaveAttribute("alt", "home");
  });
});

describe("isValidIconName", () => {
  it("is true when the string is a valid icon name", () => {
    expect(isValidIconName("home")).toBe(true);
    expect(isValidIconName("banana-sandwich")).toBe(false);
  });
});

describe("generateOakIconURL", () => {
  it("is valid url when the string is a valid icon name", () => {
    expect(generateOakIconURL("home")).toBe(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/v1699887218/icons/gvqxjxcw07ei2kkmwnes.svg",
    );
  });

  it("is returns url for question mark when the string is not a valid icon name", () => {
    expect(generateOakIconURL("banana-sandwich")).toBe(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/v1706872277/icons/question-mark.svg",
    );
  });

  it("is returns url for books when the string is not a valid subject icon name", () => {
    expect(generateOakIconURL("subject-potions")).toBe(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/v1699953657/icons/hz4l3iq6i68kazvkvorq.svg",
    );
  });
});
