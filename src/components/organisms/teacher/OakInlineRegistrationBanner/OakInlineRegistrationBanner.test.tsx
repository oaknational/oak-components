import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { OakInlineRegistrationBanner } from "./OakInlineRegistrationBanner";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakHeading, OakP } from "@/components/atoms";

describe("OakInlineRegistrationBanner", () => {
  it("renders", () => {
    renderWithTheme(
      <OakInlineRegistrationBanner
        onSubmit={(email: string) => Promise.resolve(email)}
        bodyText={<OakP>body text</OakP>}
        headerText={<OakHeading tag="h1"> Full unit on the way!</OakHeading>}
      />,
    );
    expect(
      screen.getByRole("heading", { name: "Full unit on the way!" }),
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakInlineRegistrationBanner
        onSubmit={(email: string) => Promise.resolve(email)}
        bodyText={<OakP>body text</OakP>}
        headerText={<OakHeading tag="h1"> Full unit on the way!</OakHeading>}
      ></OakInlineRegistrationBanner>,
    );
    expect(container).toMatchSnapshot();
  });

  it("shows an error message when no email is entered", async () => {
    renderWithTheme(
      <OakInlineRegistrationBanner
        onSubmit={(email: string) => Promise.resolve(email)}
        bodyText={<OakP>body text</OakP>}
        headerText={<OakHeading tag="h1"> Full unit on the way!</OakHeading>}
      />,
    );
    expect(
      screen.queryByText("Please enter a valid email address"),
    ).not.toBeInTheDocument();
    const signUpButton = screen.getByRole("button");
    await userEvent.click(signUpButton);
    const errorMessage = await screen.findByText(
      "Please enter a valid email address",
    );
    expect(errorMessage).toBeInTheDocument();
  });
  it("shows an error message when onSubmit fails", async () => {
    renderWithTheme(
      <OakInlineRegistrationBanner
        onSubmit={(email: string) => Promise.reject(new Error(email))}
        bodyText={<OakP>body text</OakP>}
        headerText={<OakHeading tag="h1"> Full unit on the way!</OakHeading>}
      />,
    );
    expect(
      screen.queryByText("Please enter a valid email address"),
    ).not.toBeInTheDocument();
    const emailInput = screen.getByRole("textbox");
    await userEvent.type(emailInput, "email");
    const signUpButton = screen.getByRole("button");
    await userEvent.click(signUpButton);
    const errorMessage = await screen.findByText(
      "Please enter a valid email address",
    );
    expect(errorMessage).toBeInTheDocument();
  });
  it("shows a success message", async () => {
    renderWithTheme(
      <OakInlineRegistrationBanner
        onSubmit={(email: string) => Promise.resolve(email)}
        bodyText={<OakP>body text</OakP>}
        headerText={<OakHeading tag="h1"> Full unit on the way!</OakHeading>}
      />,
    );
    expect(
      screen.queryByText("Thank you for signing up"),
    ).not.toBeInTheDocument();
    const emailInput = screen.getByRole("textbox");
    await userEvent.type(emailInput, "email");
    const signUpButton = screen.getByRole("button");
    await userEvent.click(signUpButton);
    const successMessage = await screen.findByText("Thank you for signing up");
    expect(successMessage).toBeInTheDocument();
  });
});
