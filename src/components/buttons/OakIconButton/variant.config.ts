import { OakIconButtonProps } from "./OakIconButton";

import { propsLookup } from "@/utils/propsLookup";
import {
  OakBorderWidthToken,
  OakCombinedSpacingToken,
  OakUiRoleToken,
} from "@/index";

export const lookupPadding = propsLookup<
  OakIconButtonProps,
  OakCombinedSpacingToken
>([
  [{ $size: "sm" }, "spacing-8"],
  [{ $size: "md" }, "spacing-12"],
]);

// size
export const lookupSize = propsLookup<
  OakIconButtonProps,
  OakCombinedSpacingToken
>([
  [{ $size: "sm" }, "spacing-20"],
  [{ $size: "md" }, "spacing-24"],
]);

export const lookupBackground = propsLookup<OakIconButtonProps, OakUiRoleToken>(
  [
    [
      { $variant: "primary", $colorScheme: "primary", disabled: undefined },
      "bg-btn-primary",
    ],
    [
      { $variant: "primary", $colorScheme: "inverted", disabled: undefined },
      "bg-btn-secondary",
    ],
    [
      { $variant: "secondary", $colorScheme: "primary", disabled: undefined },
      "bg-btn-secondary",
    ],
    [
      { $variant: "primary", $colorScheme: "primary", disabled: true },
      "bg-btn-primary-disabled",
    ],
    [
      { $variant: "primary", $colorScheme: "inverted", disabled: true },
      "bg-btn-secondary-disabled",
    ],
    [
      { $variant: "secondary", $colorScheme: "primary", disabled: true },
      "bg-btn-secondary-disabled",
    ],
  ],
);

export const lookupLoadingColor = propsLookup<
  OakIconButtonProps,
  OakUiRoleToken
>([
  [
    { $variant: "primary", $colorScheme: "primary", disabled: undefined },
    "icon-inverted",
  ],
  [
    { $variant: "primary", $colorScheme: "inverted", disabled: undefined },
    "icon-primary",
  ],
  [
    { $variant: "secondary", $colorScheme: "primary", disabled: undefined },
    "icon-primary",
  ],
  [
    { $variant: "primary", $colorScheme: "primary", disabled: true },
    "icon-inverted",
  ],
  [
    { $variant: "primary", $colorScheme: "inverted", disabled: true },
    "icon-disabled",
  ],
  [
    { $variant: "secondary", $colorScheme: "primary", disabled: true },
    "icon-disabled",
  ],
]);

export const lookupTextColor = propsLookup<OakIconButtonProps, OakUiRoleToken>([
  [
    { $variant: "primary", $colorScheme: "primary", disabled: undefined },
    "icon-inverted",
  ],
  [
    { $variant: "primary", $colorScheme: "inverted", disabled: undefined },
    "icon-primary",
  ],
  [
    { $variant: "secondary", $colorScheme: "primary", disabled: undefined },
    "icon-primary",
  ],
  [
    { $variant: "primary", $colorScheme: "primary", disabled: true },
    "icon-inverted",
  ],
  [
    { $variant: "primary", $colorScheme: "inverted", disabled: true },
    "icon-disabled",
  ],
  [
    { $variant: "secondary", $colorScheme: "primary", disabled: true },
    "icon-disabled",
  ],
]);

export const lookupHoverBackground = propsLookup<
  OakIconButtonProps,
  OakUiRoleToken
>([
  [{ $variant: "primary", $colorScheme: "primary" }, "bg-btn-primary-hover"],
  [{ $variant: "primary", $colorScheme: "inverted" }, "bg-btn-secondary-hover"],
  [
    { $variant: "secondary", $colorScheme: "primary" },
    "bg-btn-secondary-hover",
  ],
  [{ $variant: "secondary", $colorScheme: "inverted" }, "bg-btn-primary-hover"],
]);

export const lookupBorderWidth = propsLookup<
  OakIconButtonProps,
  OakBorderWidthToken
>([
  [{ $variant: "primary" }, "border-solid-none"],
  [{ $variant: "secondary" }, "border-solid-m"],
]);

export const lookupBorderColor = propsLookup<
  OakIconButtonProps,
  OakUiRoleToken
>([
  [{ $variant: "secondary", disabled: undefined }, "border-primary"],
  [{ $variant: "secondary", disabled: true }, "border-neutral"],
]);
