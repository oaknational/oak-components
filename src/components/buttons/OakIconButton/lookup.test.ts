import { buildLookup } from "./lookup";

type Key = {
  variant: "primary" | "secondary";
  settings: { first: number; second: number };
  disabled: boolean;
};

describe("buildLookup", () => {
  it("matches keys regardless of property order, including nested objects", () => {
    const lookup = buildLookup<Key, string>([
      [{ variant: "primary", settings: { first: 1, second: 2 } }, "matched"],
    ]);

    expect(
      lookup({ settings: { second: 2, first: 1 }, variant: "primary" }),
    ).toBe("matched");
  });

  it("rejects duplicate keys regardless of property order", () => {
    expect(() =>
      buildLookup<Key, string>([
        [{ variant: "primary", settings: { first: 1, second: 2 } }, "first"],
        [{ settings: { second: 2, first: 1 }, variant: "primary" }, "second"],
      ]),
    ).toThrow("Lookup keys must be unique");
  });

  it("prefers more specific keys and returns undefined for missing matches", () => {
    const lookup = buildLookup<Key, string>([
      [{ variant: "primary" }, "default"],
      [{ variant: "primary", disabled: true }, "disabled"],
    ]);

    expect(lookup({ variant: "primary", disabled: true })).toBe("disabled");
    expect(lookup({ variant: "primary", disabled: false })).toBe("default");
    expect(lookup({ variant: "secondary" })).toBeUndefined();
  });

  it("matches later entries sharing the same fields", () => {
    const lookup = buildLookup<Key, string>([
      [{ variant: "primary", disabled: true }, "primary-disabled"],
      [{ disabled: false, variant: "primary" }, "primary-enabled"],
      [{ variant: "secondary", disabled: true }, "secondary-disabled"],
      [{ variant: "primary" }, "default"],
    ]);

    expect(lookup({ variant: "primary", disabled: false })).toBe(
      "primary-enabled",
    );
    expect(lookup({ variant: "secondary", disabled: true })).toBe(
      "secondary-disabled",
    );
    expect(lookup({ variant: "primary" })).toBe("default");
  });

  it("preserves entry order for equally specific matching keys", () => {
    const lookup = buildLookup<Key, string>([
      [{ disabled: true }, "disabled"],
      [{ variant: "primary" }, "primary"],
      [{ disabled: false }, "enabled"],
    ]);

    expect(lookup({ variant: "primary", disabled: true })).toBe("disabled");
  });

  it("does not fall back when a matching entry contains undefined", () => {
    const lookup = buildLookup<Key, string | undefined>([
      [{ variant: "primary" }, "default"],
      [{ variant: "primary", disabled: true }, undefined],
    ]);

    expect(lookup({ variant: "primary", disabled: true })).toBeUndefined();
  });

  it("ignores unrelated circular properties", () => {
    const lookup = buildLookup<Key, string>([
      [{ variant: "primary" }, "matched"],
    ]);
    const circular = { variant: "primary" as const, self: {} };
    circular.self = circular;

    expect(lookup(circular)).toBe("matched");
  });
});
