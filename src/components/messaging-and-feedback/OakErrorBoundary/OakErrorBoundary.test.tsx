import React from "react";
import "@testing-library/jest-dom";

import { OakErrorBoundary } from "./OakErrorBoundary";

import renderWithTheme from "@/test-helpers/renderWithTheme";

function InnerComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error("Arrrgh");
  }
  return <div>TEST_CONTENT</div>;
}

describe("OakErrorBoundary", () => {
  it("render content with no error", async () => {
    const { container } = renderWithTheme(
      <OakErrorBoundary sectionName="video">
        <InnerComponent shouldThrow={false} />
      </OakErrorBoundary>,
    );

    expect(container).toHaveTextContent("TEST_CONTENT");
  });

  it("shows basic state", async () => {
    const { container } = renderWithTheme(
      <OakErrorBoundary sectionName="video">
        <InnerComponent shouldThrow={true} />
      </OakErrorBoundary>,
    );

    expect(container).toHaveTextContent(
      "Something unexpected happened loading “video”",
    );
  });

  it("shows message", async () => {
    const { container } = renderWithTheme(
      <OakErrorBoundary sectionName="video" message="TEST_MESSAGE">
        <InnerComponent shouldThrow={true} />
      </OakErrorBoundary>,
    );

    expect(container).toHaveTextContent(
      "Something unexpected happened loading “video”",
    );
    expect(container).toHaveTextContent("TEST_MESSAGE");
  });

  it("shows retry", async () => {
    const onRetry = jest.fn();
    const { container, getByRole } = renderWithTheme(
      <OakErrorBoundary sectionName="video" onRetry={onRetry}>
        <InnerComponent shouldThrow={true} />
      </OakErrorBoundary>,
    );

    const retryButtonEl = getByRole("button", { name: "Retry" });
    expect(retryButtonEl).toBeInTheDocument();

    expect(container).toHaveTextContent(
      "Something unexpected happened loading “video”",
    );

    retryButtonEl.click();
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it("shows retry & message", async () => {
    const onRetry = jest.fn();
    const { container, getByRole } = renderWithTheme(
      <OakErrorBoundary
        sectionName="video"
        message="TEST_MESSAGE"
        onRetry={onRetry}
      >
        <InnerComponent shouldThrow={true} />
      </OakErrorBoundary>,
    );

    const retryButtonEl = getByRole("button", { name: "Retry" });
    expect(retryButtonEl).toBeInTheDocument();

    expect(container).toHaveTextContent(
      "Something unexpected happened loading “video”",
    );
    expect(container).toHaveTextContent("TEST_MESSAGE");

    retryButtonEl.click();
    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
