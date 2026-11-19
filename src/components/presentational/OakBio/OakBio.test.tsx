import React from "react";
import "@testing-library/jest-dom";

import OakBio from "./OakBio";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakBio", () => {
    test("matches snapshot", () => {
        const { container } = renderWithTheme(
            <OakBio
                name="Luke triton"
                title="Teacher"
                imageSrc="https://www.thenational.academy/images/oak-national-academy-logo-512.png"
            />,
        );
        expect(container).toMatchSnapshot();
    });

    test("displays only the name when no title is provided", () => {
        const { getByText } = renderWithTheme(
            <OakBio
                name="Luke triton"
                imageSrc="https://www.thenational.academy/images/oak-national-academy-logo-512.png"
            />,
        );
        expect(getByText("Luke triton")).toBeInTheDocument();
    });

    test("displays only the name when no image is provided", () => {
        const { getByText } = renderWithTheme(
            <OakBio
                name="Luke triton"
                title="Teacher"
            />,
        );
        expect(getByText("Luke triton")).toBeInTheDocument();
    });

    test("displays image when the prop is provided", () => {
        const { getByAltText } = renderWithTheme(
            <OakBio
                name="Luke triton"
                title="Teacher"
                imageSrc="https://www.thenational.academy/images/oak-national-academy-logo-512.png"
            />,
        );
        expect(getByAltText("")).toBeInTheDocument();
    });

    test("displays only the name when no title and image are provided", () => {
        const { getByText } = renderWithTheme(
            <OakBio
                name="Luke triton"
            />,
        );
        expect(getByText("Luke triton")).toBeInTheDocument();
    });

    test("displays at organisation name when the prop is provided", () => {
        const { getByText } = renderWithTheme(
            <OakBio
                name="Luke triton"
                title="Teacher at Oak National Academy"
                imageSrc="https://www.thenational.academy/images/oak-national-academy-logo-512.png"
            />,
        );
        expect(getByText("Teacher at Oak National Academy")).toBeInTheDocument();
    });
});
