import { ArgTypes } from "@storybook/react";

/**
 * Builds argTypes by merging multiple argType sets and applying component defaults.
 * Preserves the control configuration from argTypes while adding
 * table.defaultValue from the defaults object for matching keys.
 *
 * This is needed because styled-components .attrs() defaults
 * are not automatically detected by Storybook (unlike defaultProps).
 *
 * @example
 * ```tsx
 * // In component file
 * export const oakMaxWidthDefaults = {
 *   $flexDirection: "column",
 *   $flexGrow: 1,
 * } as const;
 *
 * // In stories file
 * import { oakMaxWidthDefaults } from "./OakMaxWidth";
 * import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";
 * import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
 * import { buildArgTypes } from "@/storybook-helpers/buildArgTypes";
 *
 * const meta: Meta<typeof OakMaxWidth> = {
 *   component: OakMaxWidth,
 *   argTypes: buildArgTypes(
 *     [flexArgTypes, colorArgTypes],
 *     oakMaxWidthDefaults
 *   ),
 * };
 * ```
 */
export const buildArgTypes = <T extends Record<string, unknown>>(
  argTypeSets: ArgTypes<T>[],
  defaults?: Partial<T>,
): ArgTypes<T> => {
  const merged = Object.assign({}, ...argTypeSets) as ArgTypes<T>;

  if (!defaults) return merged;

  return Object.fromEntries(
    Object.entries(merged).map(([key, argType]) => [
      key,
      key in defaults
        ? {
            ...(argType as object),
            table: {
              ...((argType as Record<string, unknown>)?.table as object),
              defaultValue: { summary: String(defaults[key as keyof T]) },
            },
          }
        : argType,
    ]),
  ) as ArgTypes<T>;
};
