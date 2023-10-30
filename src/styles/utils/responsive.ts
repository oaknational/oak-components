import {
  css,
  DefaultTheme,
  Interpolation,
  ThemedStyledProps,
} from "styled-components";

import truthy from "@/utils/truthy";
import {
  OakAllSpacing,
  OakInnerPadding,
  OakSpaceBetween,
} from "@/styles/tokens";

const breakpointsByName = {
  small: 750,
  large: 1280,
};

export const breakpoints = Object.values(breakpointsByName).sort((a, b) =>
  a > b ? 1 : -1
);
export type BreakpointName = keyof typeof breakpointsByName;

export const getBreakpoint = (
  breakpointName: keyof typeof breakpointsByName
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

type OakSpacings =
  | OakAllSpacing
  | OakInnerPadding
  | OakSpaceBetween
  | undefined
  | null;

const responsive =
  <Props, T extends OakSpacings>(
    attr: string,
    getValues: (props: Props) => ResponsiveValues<T>,
    parse: // parse callback is used to convert the value to a string or number
    (unparsed: T) => string | number | undefined | null
    // TODO: stripped out theme based callback for now
  ) =>
  (props: Props): Interpolation<ThemedStyledProps<Props, DefaultTheme>> => {
    const attrCss = (value: T | undefined | null) =>
      typeof value === "undefined" || value === null
        ? undefined
        : css`
            ${attr}: ${parse(value)};
          `;
    const values = getValues(props);
    if (typeof values === "undefined" || values === null) {
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

export default responsive;
