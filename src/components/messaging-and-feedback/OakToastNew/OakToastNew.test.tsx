import React from "react";
import "@testing-library/jest-dom";
import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { OakToastNew } from "./OakToastNew";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakToastNew", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe("Informative variant", () => {
    it("renders with children text", () => {
      renderWithTheme(
        <OakToastNew variant="informative">
          This is a toast message
        </OakToastNew>,
      );

      expect(screen.getByTestId("oak-toast")).toBeInTheDocument();
      expect(screen.getByText("This is a toast message")).toBeInTheDocument();
    });

    it("renders with success icon", () => {
      renderWithTheme(
        <OakToastNew variant="informative">
          This is a toast message
        </OakToastNew>,
      );

      expect(screen.getByTestId("oak-toast-success-icon")).toBeInTheDocument();
    });

    it("renders with primary color scheme by default", () => {
      renderWithTheme(
        <OakToastNew variant="informative">
          This is a toast message
        </OakToastNew>,
      );
      const toast = screen.getByTestId("oak-toast");
      const oakBgPrimaryRgb = "rgb(255, 255, 255)";

      expect(toast).toHaveStyle(`background-color: ${oakBgPrimaryRgb}`);
    });

    it("renders with inverted color scheme when specified", () => {
      renderWithTheme(
        <OakToastNew variant="informative" colorScheme="inverted">
          This is a toast message
        </OakToastNew>,
      );
      const toast = screen.getByTestId("oak-toast");
      const oakBgInvertedRgb = "rgb(34, 34, 34)";

      expect(toast).toHaveStyle(`background-color: ${oakBgInvertedRgb}`);
    });

    it("applies custom background color override", () => {
      renderWithTheme(
        <OakToastNew
          variant="informative"
          backgroundColor="bg-decorative1-main"
        >
          This is a toast message
        </OakToastNew>,
      );
      const toast = screen.getByTestId("oak-toast");
      const oakBgDecorative1MainRgb = "rgb(190, 242, 189)";

      expect(toast).toHaveStyle(
        `background-color: ${oakBgDecorative1MainRgb}`,
      );
    });

    it("has role 'status' for accessibility", () => {
      renderWithTheme(
        <OakToastNew variant="informative">
          This is a toast message
        </OakToastNew>,
      );
      const toast = screen.getByTestId("oak-toast");

      expect(toast).toHaveAttribute("role", "status");
    });
  });

  describe("Success variant", () => {
    it("renders with children text if provided", () => {
      renderWithTheme(
        <OakToastNew variant="success">
          This is a success message
        </OakToastNew>,
      );

      expect(screen.getByTestId("oak-toast")).toBeInTheDocument();
      expect(screen.getByText("This is a success message")).toBeInTheDocument();
    });

    it("renders with success text if no children provided", () => {
      renderWithTheme(
        <OakToastNew variant="success" />
      );

      expect(screen.getByTestId("oak-toast")).toBeInTheDocument();
      expect(screen.getByText("Success")).toBeInTheDocument();
    });

    it("renders with success icon", () => {
      renderWithTheme(
        <OakToastNew variant="success">
          This is a success message
        </OakToastNew>,
      );

      expect(screen.getByTestId("oak-toast-success-icon")).toBeInTheDocument();
    });

    it("renders with success styling", () => {
      renderWithTheme(<OakToastNew variant="success" />);
      const toast = screen.getByTestId("oak-toast");
      const oakBgSuccessRgb = "rgb(40, 124, 52)";

      expect(toast).toHaveStyle(`background-color: ${oakBgSuccessRgb}`);
    });

    it("does not apply color scheme or background overrides", () => {
      renderWithTheme(
        <OakToastNew
          variant="success"
          colorScheme="inverted"
          backgroundColor="bg-decorative1-main"
        >
          This is a success message
        </OakToastNew>,
      );
      const toast = screen.getByTestId("oak-toast");
      const oakBgInvertedRgb = "rgb(34, 34, 34)";
      const oakBgDecorative1MainRgb = "rgb(190, 242, 189)";

      expect(toast).not.toHaveStyle(`background-color: ${oakBgInvertedRgb}`);
      expect(toast).not.toHaveStyle(`background-color: ${oakBgDecorative1MainRgb}`);
    });

    it("has role 'status' for accessibility", () => {
      renderWithTheme(<OakToastNew variant="success" />);
      const toast = screen.getByTestId("oak-toast");

      expect(toast).toHaveAttribute("role", "status");
    });
  });

  describe("Error variant", () => {
    it("renders with children text if provided", () => {
      renderWithTheme(
        <OakToastNew variant="error">
          This is an error message
        </OakToastNew>,
      );

      expect(screen.getByTestId("oak-toast")).toBeInTheDocument();
      expect(screen.getByText("This is an error message")).toBeInTheDocument();
    });

    it("renders with error text if no children provided", () => {
      renderWithTheme(
        <OakToastNew variant="error" />
      );

      expect(screen.getByTestId("oak-toast")).toBeInTheDocument();
      expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    });

    it("renders with error icon", () => {
      renderWithTheme(
        <OakToastNew variant="error">
          This is an error message
        </OakToastNew>,
      );

      expect(screen.getByTestId("oak-toast-error-icon")).toBeInTheDocument();
    });

    it("renders with error styling", () => {
      renderWithTheme(<OakToastNew variant="error" />);
      const toast = screen.getByTestId("oak-toast");
      const oakBgErrorRgb = "rgb(221, 0, 53)";

      expect(toast).toHaveStyle(`background-color: ${oakBgErrorRgb}`);
    });

    it("does not apply color scheme or background overrides", () => {
      renderWithTheme(
        <OakToastNew
          variant="error"
          colorScheme="inverted"
          backgroundColor="bg-decorative1-main"
        >
          This is an error message
        </OakToastNew>,
      );
      const toast = screen.getByTestId("oak-toast");
      const oakBgInvertedRgb = "rgb(34, 34, 34)";
      const oakBgDecorative1MainRgb = "rgb(190, 242, 189)";

      expect(toast).not.toHaveStyle(`background-color: ${oakBgInvertedRgb}`);
      expect(toast).not.toHaveStyle(`background-color: ${oakBgDecorative1MainRgb}`);
    });

    it("has role 'alert' for accessibility", () => {
      renderWithTheme(<OakToastNew variant="error" />);
      const toast = screen.getByTestId("oak-toast");

      expect(toast).toHaveAttribute("role", "alert");
    });
  });

  describe("Icon visibility", () => {
    it("shows icon by default", () => {
      renderWithTheme(
        <OakToastNew variant="informative">
          This is a toast message
        </OakToastNew>,
      );

      expect(screen.getByTestId("oak-toast-success-icon")).toBeInTheDocument();
    });

    it("hides icon when hasIcon is false", () => {
      renderWithTheme(
        <OakToastNew variant="informative" hasIcon={false}>
          This is a toast message
        </OakToastNew>,
      );

      expect(screen.queryByTestId("oak-toast-success-icon")).not.toBeInTheDocument();
    });
  });

  describe("Auto-dismiss", () => {
    describe("When auto-dismiss is disabled", () => {
      it("renders close button", () => {
        renderWithTheme(
          <OakToastNew variant="informative" isAutoDismiss={false}>
            This is a toast message
          </OakToastNew>,
        );
        const closeButton = screen.getByRole("button", { name: /dismiss/i });

        expect(closeButton).toBeInTheDocument();
      });

      it("dismisses toast when close button is clicked", async () => {
        const user = userEvent.setup({ delay: null });
        renderWithTheme(
          <OakToastNew variant="informative">
            This is a toast message
          </OakToastNew>,
        );
        const toast = screen.getByTestId("oak-toast");
        const closeButton = screen.getByRole("button", { name: /dismiss/i });

        await user.click(closeButton);

        await waitFor(() => {
          expect(toast).not.toBeVisible();
        });
      });
    });

    describe("When auto-dismiss is enabled", () => {
      it("does not render close button", () => {
        renderWithTheme(
          <OakToastNew variant="informative" isAutoDismiss>
            This is a toast message
          </OakToastNew>,
        );
        const closeButton = screen.queryByRole("button", { name: /dismiss/i });

        expect(closeButton).not.toBeInTheDocument();
      });

      it("automatically dismisses after default duration", async () => {
        renderWithTheme(
          <OakToastNew variant="informative" isAutoDismiss>
            This is a toast message
          </OakToastNew>,
        );
        const toast = screen.getByTestId("oak-toast");

        expect(toast).toBeVisible();

        act(() => jest.advanceTimersByTime(5100));

        await waitFor(() => {
          expect(toast).not.toBeVisible();
        });
      });

      it("respects custom auto-dismiss duration when provided if over minimum 5000ms", async () => {
        renderWithTheme(
          <OakToastNew
            variant="informative"
            isAutoDismiss
            autoDismissDuration={8000}
          >
            This is a toast message
          </OakToastNew>,
        );
        const toast = screen.getByTestId("oak-toast");

        act(() => jest.advanceTimersByTime(5100));

        expect(toast).toBeVisible();

        act(() => jest.advanceTimersByTime(8100));

        await waitFor(() => {
          expect(toast).not.toBeVisible();
        });
      });

      it("respects 5000ms minimum if a custom auto-dismiss duration under this is provided ", async () => {
        renderWithTheme(
          <OakToastNew
            variant="informative"
            isAutoDismiss
            autoDismissDuration={3000}
          >
            This is a toast message
          </OakToastNew>,
        );
        const toast = screen.getByTestId("oak-toast");

        act(() => jest.advanceTimersByTime(3100));

        expect(toast).toBeVisible();

        act(() => jest.advanceTimersByTime(5100));

        await waitFor(() => {
          expect(toast).not.toBeVisible();
        });
      });

      it("resets timer when id prop changes", async () => {
        const { rerender } = renderWithTheme(
          <OakToastNew
            variant="informative"
            isAutoDismiss
            autoDismissDuration={5000}
            id={1}
          >
            This is a toast message
          </OakToastNew>,
        );
        const toast = screen.getByTestId("oak-toast");

        act(() => jest.advanceTimersByTime(3000));

        expect(toast).toBeVisible();

        rerender(
          <OakToastNew
            variant="informative"
            isAutoDismiss
            autoDismissDuration={5000}
            id={2}
          >
            This is a toast message
          </OakToastNew>,
        );

        act(() => jest.advanceTimersByTime(3000));

        expect(toast).toBeVisible();

        act(() => jest.advanceTimersByTime(2200));
        await waitFor(() => {
          expect(toast).not.toBeVisible();
        });
      });
    });
  });

  describe("Callbacks", () => {
    it("calls onClose when toast is dismissed", async () => {
      const user = userEvent.setup({ delay: null });
      const onClose = jest.fn();
      renderWithTheme(
        <OakToastNew variant="informative" onClose={onClose}>
          This is a toast message
        </OakToastNew>,
      );
      const closeButton = screen.getByRole("button", { name: /dismiss/i });

      await user.click(closeButton);

      await waitFor(() => {
        expect(onClose).toHaveBeenCalled();
      });
    });

    it("calls onClose after auto-dismiss animation completes", async () => {
      const onClose = jest.fn();
      renderWithTheme(
        <OakToastNew variant="informative" isAutoDismiss onClose={onClose}>
          This is a toast message
        </OakToastNew>,
      );

      act(() => jest.advanceTimersByTime(5300));

      await waitFor(() => {
        expect(onClose).toHaveBeenCalled();
      });
    });
  });
});
