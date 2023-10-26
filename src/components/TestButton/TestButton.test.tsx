import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { TestButton } from "./TestButton";

describe("Running Test for TestButton", () => {
  test("Check Button Disabled", () => {
    render(<TestButton text="Button test" disabled />);
    expect(screen.getByRole("button", { name: "Button test" })).toBeDisabled();
  });
});
