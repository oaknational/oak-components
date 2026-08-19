import React from "react";
import "@testing-library/jest-dom";
import { act } from "@testing-library/react";

import { OakErrorBoundary } from "./OakErrorBoundary";

import renderWithTheme from "@/test-helpers/renderWithTheme";

function InnerComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error("TEST_ERROR");
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

  it("onRetry calling clearError resets state", async () => {
    let clearError: () => void | undefined;
    const shouldThrowRef = { current: true };
    const onRetry = ({
      clearError: localClearError,
    }: {
      clearError: () => void;
    }) => {
      clearError = localClearError;
      shouldThrowRef.current = false;
    };
    const { container, getByRole, rerender } = renderWithTheme(
      <OakErrorBoundary sectionName="video" onRetry={onRetry}>
        <InnerComponent shouldThrow={shouldThrowRef.current} />
      </OakErrorBoundary>,
    );

    const retryButtonEl = getByRole("button", { name: "Retry" });
    expect(retryButtonEl).toBeInTheDocument();

    expect(container).toHaveTextContent(
      "Something unexpected happened loading “video”",
    );

    retryButtonEl.click();

    act(() => {
      clearError();
      rerender(
        <OakErrorBoundary sectionName="video" onRetry={onRetry}>
          <InnerComponent shouldThrow={shouldThrowRef.current} />
        </OakErrorBoundary>,
      );
    });

    expect(container).toHaveTextContent("TEST_CONTENT");
  });

  it("calls onError", async () => {
    const onError = jest.fn();
    const { container } = renderWithTheme(
      <OakErrorBoundary sectionName="video" onError={onError}>
        <InnerComponent shouldThrow={true} />
      </OakErrorBoundary>,
    );

    expect(container).toHaveTextContent(
      "Something unexpected happened loading “video”",
    );
    expect(onError).toHaveBeenCalledTimes(1);
  });
});
