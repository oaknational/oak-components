import { css, ExecutionProps, Interpolation } from "styled-components";

import { truthy } from "@/styles/helpers/truthy";
import { PropsWithTheme, ThemedStyledProps } from "@/styles/theme/theme";

const breakpointsByName = {
  small: 750,
  large: 1280,
};

export const breakpoints = Object.values(breakpointsByName).sort((a, b) =>
  a > b ? 1 : -1,
);

export type BreakpointName = keyof typeof breakpointsByName;

export const getBreakpoint = (
  breakpointName: keyof typeof breakpointsByName,
) => {
  return breakpointsByName[breakpointName];
};

export type Device = "mobile" | "tablet" | "desktop";

const mediaQueries: Record<Device, string> = {
  mobile: `(max-width: ${getBreakpoint("small") - 1}px)`,
  tablet: `(min-width: ${getBreakpoint("small")}px and max-width: ${
    getBreakpoint("large") - 1
  }px)`,
  desktop: `(min-width: ${getBreakpoint("large")}px)`,
};

export const getMediaQuery = (device: Device) => {
  return mediaQueries[device];
};

export type ResponsiveValues<Value> = (Value | null) | (Value | null)[];

type Generic = string | number | undefined | null;

export const responsiveStyle =
  <Props, T extends Generic>(
    attr: string,
    getValues: (
      props: Props & ExecutionProps,
    ) => ResponsiveValues<T | undefined | null>,
    parse:
      | ((unparsed: T | undefined | null) => Generic)
      | ((
          unparsed: T | undefined | null,
        ) => (props: PropsWithTheme) => Generic) = (x) => x,
  ) =>
  (
    props: Props & ExecutionProps,
  ): Interpolation<Omit<ThemedStyledProps<Props>, "theme">> => {
    const attrCss = (value: T | undefined | null) =>
      typeof value === "undefined"
        ? undefined
        : css`
            ${attr}: ${parse(value)};
          `;
    const values = getValues(props);
    if (typeof values === "undefined") {
      return undefined;
    }
    if (!Array.isArray(values)) {
      return css`
        ${attrCss(values)}
      `;
    }
    if (values.length === 0) {
      return [];
    }

    return [
      css`
        ${attrCss(values[0])}
      `,
      ...breakpoints
        .slice(0, values.length)
        .map((breakpoint, i) => {
          const value = values[i + 1]; // Values are shifted relative to breakpoints

          if (value === undefined) {
            return undefined;
          }

          return css`
            @media (min-width: ${breakpoint}px) {
              ${css`
                ${attrCss(value)}
              `}
            }
          `;
        })
        .filter(truthy),
    ];
  };
