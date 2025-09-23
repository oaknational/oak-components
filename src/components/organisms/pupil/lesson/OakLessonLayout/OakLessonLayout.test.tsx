import React from "react";
import "@testing-library/jest-dom";

import { OakLessonLayout, OakLessonLayoutProps } from "./OakLessonLayout";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakLessonLayout", () => {
  it("should render successfully", () => {
    const { getByText } = renderWithTheme(
      <OakLessonLayout
        lessonSectionName={"tier-listing"}
        topNavSlot={<div>top nav slot</div>}
        bottomNavSlot={<div>bottom nav slot</div>}
      >
        <p>Hello World</p>
      </OakLessonLayout>,
    );
    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakLessonLayout
        lessonSectionName={"tier-listing"}
        topNavSlot={<div>top nav slot</div>}
        bottomNavSlot={<div>bottom nav slot</div>}
      >
        <p>Hello World</p>
      </OakLessonLayout>,
    );
    expect(container).toMatchSnapshot();
  });
});

describe("OakLessonLayoutProps", () => {
  const renderComponent = (props: OakLessonLayoutProps) =>
    renderWithTheme(
      <OakLessonLayout
        lessonSectionName={props.lessonSectionName}
        phase={props.phase}
        celebrate={props.celebrate}
        topNavSlot={props.topNavSlot}
        bottomNavSlot={props.bottomNavSlot}
      >
        {props.children}
      </OakLessonLayout>,
    );

  it("should render with correct background color for overview section in primary phase", () => {
    const { container } = renderComponent({
      lessonSectionName: "overview",
      phase: "primary",
      topNavSlot: <div>top nav slot</div>,
      bottomNavSlot: <div>bottom nav slot</div>,
      children: <p>Hello World</p>,
    });
    expect(container.firstChild).toHaveStyle("background: rgb(229, 209, 224)");
  });

  it("should render with correct background color for overview section in secondary phase", () => {
    const { container } = renderComponent({
      lessonSectionName: "overview",
      phase: "secondary",
      topNavSlot: <div>top nav slot</div>,
      bottomNavSlot: <div>bottom nav slot</div>,
      children: <p>Hello World</p>,
    });
    expect(container.firstChild).toHaveStyle("background: rgb(198, 209, 239)");
  });

  it("should render with correct background color for intro section", () => {
    const { container } = renderComponent({
      lessonSectionName: "intro",
      topNavSlot: <div>top nav slot</div>,
      bottomNavSlot: <div>bottom nav slot</div>,
      children: <p>Hello World</p>,
    });
    expect(container.firstChild).toHaveStyle("background: rgb(206, 231, 229)");
  });

  it("should render with correct background color for starter-quiz section", () => {
    const { container } = renderComponent({
      lessonSectionName: "starter-quiz",
      topNavSlot: <div>top nav slot</div>,
      bottomNavSlot: <div>bottom nav slot</div>,
      children: <p>Hello World</p>,
    });
    expect(container.firstChild).toHaveStyle("background: rgb(190, 242, 189)");
  });

  it("should render with correct background color for video section", () => {
    const { container } = renderComponent({
      lessonSectionName: "video",
      topNavSlot: <div>top nav slot</div>,
      bottomNavSlot: <div>bottom nav slot</div>,
      children: <p>Hello World</p>,
    });
    expect(container.firstChild).toHaveStyle("background: rgb(229, 209, 224)");
  });

  it("should render with correct background color for exit-quiz section", () => {
    const { container } = renderComponent({
      lessonSectionName: "exit-quiz",
      topNavSlot: <div>top nav slot</div>,
      bottomNavSlot: <div>bottom nav slot</div>,
      children: <p>Hello World</p>,
    });
    expect(container.firstChild).toHaveStyle("background: rgb(255, 229, 85)");
  });

  it("should render with correct background color for review section in primary phase", () => {
    const { container } = renderComponent({
      lessonSectionName: "review",
      phase: "primary",
      topNavSlot: <div>top nav slot</div>,
      bottomNavSlot: <div>bottom nav slot</div>,
      children: <p>Hello World</p>,
    });
    expect(container.firstChild).toHaveStyle("background: rgb(229, 209, 224)");
  });

  it("should render with correct background color for review section in secondary phase", () => {
    const { container } = renderComponent({
      lessonSectionName: "review",
      phase: "secondary",
      topNavSlot: <div>top nav slot</div>,
      bottomNavSlot: <div>bottom nav slot</div>,
      children: <p>Hello World</p>,
    });
    expect(container.firstChild).toHaveStyle("background: rgb(198, 209, 239)");
  });
});
