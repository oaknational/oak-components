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
      { $type: "primary", $colorScheme: "primary", disabled: undefined },
      "bg-btn-primary",
    ],
    [
      { $type: "primary", $colorScheme: "inverted", disabled: undefined },
      "bg-btn-secondary",
    ],
    [
      { $type: "secondary", $colorScheme: "primary", disabled: undefined },
      "bg-btn-secondary",
    ],
    [
      { $type: "primary", $colorScheme: "primary", disabled: true },
      "bg-btn-primary-disabled",
    ],
    [
      { $type: "primary", $colorScheme: "inverted", disabled: true },
      "bg-btn-secondary-disabled",
    ],
    [
      { $type: "secondary", $colorScheme: "primary", disabled: true },
      "bg-btn-secondary-disabled",
    ],
  ],
);

export const lookupLoadingColor = propsLookup<
  OakIconButtonProps,
  OakUiRoleToken
>([
  [
    { $type: "primary", $colorScheme: "primary", disabled: undefined },
    "icon-inverted",
  ],
  [
    { $type: "primary", $colorScheme: "inverted", disabled: undefined },
    "icon-primary",
  ],
  [
    { $type: "secondary", $colorScheme: "primary", disabled: undefined },
    "icon-primary",
  ],
  [
    { $type: "primary", $colorScheme: "primary", disabled: true },
    "icon-inverted",
  ],
  [
    { $type: "primary", $colorScheme: "inverted", disabled: true },
    "icon-disabled",
  ],
  [
    { $type: "secondary", $colorScheme: "primary", disabled: true },
    "icon-disabled",
  ],
]);

export const lookupTextColor = propsLookup<OakIconButtonProps, OakUiRoleToken>([
  [
    { $type: "primary", $colorScheme: "primary", disabled: undefined },
    "icon-inverted",
  ],
  [
    { $type: "primary", $colorScheme: "inverted", disabled: undefined },
    "icon-primary",
  ],
  [
    { $type: "secondary", $colorScheme: "primary", disabled: undefined },
    "icon-primary",
  ],
  [
    { $type: "primary", $colorScheme: "primary", disabled: true },
    "icon-inverted",
  ],
  [
    { $type: "primary", $colorScheme: "inverted", disabled: true },
    "icon-disabled",
  ],
  [
    { $type: "secondary", $colorScheme: "primary", disabled: true },
    "icon-disabled",
  ],
]);

export const lookupHoverBackground = propsLookup<
  OakIconButtonProps,
  OakUiRoleToken
>([
  [{ $type: "primary", $colorScheme: "primary" }, "bg-btn-primary-hover"],
  [{ $type: "primary", $colorScheme: "inverted" }, "bg-btn-secondary-hover"],
  [{ $type: "secondary", $colorScheme: "primary" }, "bg-btn-secondary-hover"],
  [{ $type: "secondary", $colorScheme: "inverted" }, "bg-btn-primary-hover"],
]);

export const lookupBorderWidth = propsLookup<
  OakIconButtonProps,
  OakBorderWidthToken
>([
  [{ $type: "primary" }, "border-solid-none"],
  [{ $type: "secondary" }, "border-solid-m"],
]);

export const lookupBorderColor = propsLookup<
  OakIconButtonProps,
  OakUiRoleToken
>([
  [{ $type: "secondary", disabled: undefined }, "border-primary"],
  [{ $type: "secondary", disabled: true }, "border-neutral"],
]);
