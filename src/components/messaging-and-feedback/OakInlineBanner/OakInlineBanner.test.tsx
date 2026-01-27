import React, { ReactNode } from "react";
import "@testing-library/jest-dom";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakInlineBanner } from "@/components/messaging-and-feedback/OakInlineBanner";
import { OakSecondaryLink } from "@/components/navigation/OakSecondaryLink";

jest.mock("react-dom", () => {
  return {
    ...jest.requireActual("react-dom"),
    createPortal: (node: ReactNode) => node,
  };
});

describe(OakInlineBanner, () => {
  it("matches snapshot for banner with title", () => {
    const { container } = renderWithTheme(
      <OakInlineBanner
        canDismiss
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        title="Information"
        type="info"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot for simple banner without title", () => {
    const { container } = renderWithTheme(
      <OakInlineBanner
        canDismiss
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        type="info"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot for large variant banner", () => {
    const { container } = renderWithTheme(
      <OakInlineBanner
        canDismiss
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        title="Information"
        type="info"
        variant="large"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("shows title", () => {
    const { getByTestId } = renderWithTheme(
      <OakInlineBanner
        canDismiss
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        title="Information"
        type="info"
      />,
    );

    expect(getByTestId("inline-banner-title")).toHaveTextContent("Information");
  });

  it("shows message", () => {
    const { getByTestId } = renderWithTheme(
      <OakInlineBanner
        canDismiss
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        title="Information"
        type="info"
      />,
    );

    expect(getByTestId("inline-banner-message")).toHaveTextContent(
      "Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet.",
    );
  });

  it("shows close icon if can be dismissed and onDismiss is called when clicked", () => {
    const onDismissSpy = jest.fn();
    const { getByTestId } = renderWithTheme(
      <OakInlineBanner
        canDismiss
        onDismiss={onDismissSpy}
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        title="Information"
        type="info"
      />,
    );

    expect(getByTestId("inline-banner-close-button")).toBeInTheDocument();
    getByTestId("inline-banner-close-button").click();
    expect(onDismissSpy).toHaveBeenCalledTimes(1);
  });

  it("hides close icon if the banner cannot be dismissed", () => {
    const { queryAllByTestId } = renderWithTheme(
      <OakInlineBanner
        canDismiss={false}
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        title="Information"
        type="info"
      />,
    );
    expect(queryAllByTestId("inline-banner-close-button")).toHaveLength(0);
  });

  it("shows the link element that is passed in as prop", () => {
    const { getByTestId } = renderWithTheme(
      <OakInlineBanner
        canDismiss
        cta={
          <OakSecondaryLink
            iconName="chevron-right"
            isTrailingIcon
            data-testid="this-link"
          >
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        title="Information"
        type="info"
      />,
    );

    expect(getByTestId("this-link")).toBeInTheDocument();
  });

  it("has info styling by default", () => {
    const { getByTestId } = renderWithTheme(
      <OakInlineBanner
        canDismiss={false}
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        title="Information"
      />,
    );

    expect(getByTestId("oak-inline-banner")).toHaveStyle(
      `background-color: rgb(227, 233, 251)`,
    );
    expect(getByTestId("oak-inline-banner")).toHaveStyle(
      `border-color: rgb(160, 182, 242)`,
    );
  });

  it("has alert styling when type is alert", () => {
    const { getByTestId } = renderWithTheme(
      <OakInlineBanner
        canDismiss={false}
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        title="Information"
        type="alert"
      />,
    );

    expect(getByTestId("oak-inline-banner")).toHaveStyle(
      `background-color: #fff7cc`,
    );
    expect(getByTestId("oak-inline-banner")).toHaveStyle(
      `border-color: #fbd60e`,
    );
  });

  it("has compact version when title is not supplied as prop", () => {
    const { queryAllByTestId } = renderWithTheme(
      <OakInlineBanner
        canDismiss={false}
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        type="info"
      />,
    );

    expect(queryAllByTestId("inline-banner-title")).toHaveLength(0);
  });

  it("can override close button props", () => {
    const { getByTestId } = renderWithTheme(
      <OakInlineBanner
        canDismiss
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        title="Information"
        type="info"
        closeButtonOverrideProps={{ "aria-label": "Close information banner" }}
      />,
    );

    expect(getByTestId("inline-banner-close-button")).toHaveAttribute(
      "aria-label",
      "Close information banner",
    );
  });
  it("should have h1 as default title tag", () => {
    const { getByTestId } = renderWithTheme(
      <OakInlineBanner
        canDismiss
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        title="Information"
        type="info"
      />,
    );

    expect(getByTestId("inline-banner-title").tagName).toBe("H1");
  });
  it("should be able to set title tag via prop", () => {
    const { getByTestId } = renderWithTheme(
      <OakInlineBanner
        canDismiss
        cta={
          <OakSecondaryLink iconName="chevron-right" isTrailingIcon>
            Link
          </OakSecondaryLink>
        }
        isOpen
        message="Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet."
        onDismiss={() => {}}
        title="Information"
        type="info"
        titleTag="h3"
      />,
    );

    expect(getByTestId("inline-banner-title").tagName).toBe("H3");
  });
});
