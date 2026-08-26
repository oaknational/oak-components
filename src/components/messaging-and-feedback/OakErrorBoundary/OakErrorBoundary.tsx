import React, { Component, createContext, HTMLAttributes } from "react";

import { BorderStyleProps } from "@/styles/utils/borderStyle";
import { OakFlex } from "@/components/layout-and-structure";
import { OakIcon } from "@/components/images-and-icons";
import { OakHeading, OakP, OakSecondaryButton } from "@/index";

export const OakErrorBoundaryBorderColor = createContext<
  BorderStyleProps["$borderColor"]
>("border-neutral-lighter");

export type OakErrorBoundaryCloseAction = "close_button" | undefined;

export type OakErrorBoundaryProps = {
  /**
   * Function called when render error occurs
   */
  onError?: (
    error: unknown,
    componentStack: React.ErrorInfo["componentStack"],
  ) => void;
  /**
   * The name of the section where the error occurred. This is used to provide context in the error message.
   */
  sectionName: string;
  /**
   * Optional message to display when an error occurs.
   */
  message?: string;
  /**
   * Function called when the retry button is clicked.
   */
  onRetry?: ({ clearError }: { clearError: () => void }) => void;
  /**
   * Content rendered when no error has occurred.
   */
  children: React.ReactNode;
} & Pick<
  HTMLAttributes<Element>,
  "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby"
>;

/**
 * When things go wrong in a react app, for example OWA, we can isolate the error in certain circumstances to a section of the page.
 */
export class OakErrorBoundary extends Component<
  OakErrorBoundaryProps,
  { hasError: boolean }
> {
  constructor(props: OakErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, info.componentStack);
    }
  }

  onRetry = () => {
    this.props.onRetry?.({
      clearError: () => this.setState({ hasError: false }),
    });
  };

  render() {
    const { message } = this.props;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <OakFlex
          $background={"bg-incorrect"}
          $pa={"spacing-20"}
          $borderRadius={"border-radius-m2"}
          $gap={"spacing-24"}
        >
          <OakFlex $flexDirection={"column"} $gap={"spacing-24"}>
            <OakFlex $gap={"spacing-8"} $alignItems={"center"}>
              <OakFlex>
                <OakIcon iconName={"error"} />
              </OakFlex>
              <OakHeading
                tag={"h1"}
                $color={"text-primary"}
                $font={"heading-7"}
              >
                Something unexpected happened loading “{this.props.sectionName}”
              </OakHeading>
            </OakFlex>
            {message && (
              <OakFlex $gap={"spacing-8"}>
                <OakP $color={"text-primary"} $font={"body-2"}>
                  {message}
                </OakP>
              </OakFlex>
            )}
            {this.props.onRetry && (
              <OakSecondaryButton
                iconName={"retake"}
                isTrailingIcon={true}
                onClick={this.onRetry}
              >
                Retry
              </OakSecondaryButton>
            )}
          </OakFlex>
        </OakFlex>
      );
    }

    return this.props.children;
  }
}
