import { propsLookup } from "./propsLookup";

import { OakUiRoleToken } from "@/styles";

type Key = {
  variant: "primary" | "secondary";
  colorScheme: "inverted" | "primary";
  disabled: boolean;
};

describe("propsLookup", () => {
  it("matches keys regardless of property order, including nested objects", () => {
    const lookup = propsLookup<Key, OakUiRoleToken>([
      [
        { variant: "primary", colorScheme: "primary", disabled: false },
        "icon-error",
      ],
      [
        { variant: "primary", colorScheme: "inverted", disabled: true },
        "icon-error",
      ],
      [
        { variant: "primary", colorScheme: "primary", disabled: undefined },
        "icon-success",
      ],
      [
        { variant: "primary", colorScheme: "inverted", disabled: undefined },
        "icon-error",
      ],
    ]);

    expect(lookup({ variant: "primary", colorScheme: "primary" })).toBe(
      "icon-success",
    );
  });

  it("throws and error if shape of keys don't match", () => {
    expect(() => {
      propsLookup<Key, OakUiRoleToken>([
        [{ variant: "primary", colorScheme: "primary" }, "icon-error"],
        // Note: we included an additional `disabled` key that isn't in the
        // previous row, for performance reasons this will throw an error
        [
          { variant: "primary", colorScheme: "primary", disabled: true },
          "icon-error",
        ],
      ]);
    }).toThrow("For performance reasons objects must all have the same shape");
  });

  it("throws error if no entries", () => {
    expect(() => {
      propsLookup<Key, OakUiRoleToken>([]);
    }).toThrow("Must provide entries for lookup");
  });

  it("throws if keys are not unique", () => {
    expect(() => {
      propsLookup<Key, OakUiRoleToken>([
        [{ variant: "primary", colorScheme: "primary" }, "icon-error"],
        [{ variant: "primary", colorScheme: "primary" }, "icon-error"],
      ]);
    }).toThrow("Keys must be unique");
  });
});
