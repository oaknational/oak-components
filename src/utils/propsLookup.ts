import stringify from "fast-json-stable-stringify";
import { pick, isEqual } from "lodash";

type LookupEntry<TKey extends object, TValue> = readonly [
  Partial<TKey>,
  TValue,
];

/**
 * Lookup a value for the set of props, ideal for complex matrices of values
 * @param entries
 * @returns
 */
export function propsLookup<TKey extends object, TValue>(
  entries: readonly LookupEntry<TKey, TValue>[],
) {
  const valuesByKey = new Map<string, TValue>();

  if (entries.length < 1) {
    throw new Error("Must provide lookup");
  }

  const expectedKeys = Object.keys(entries[0]![0]).toSorted((a, b) =>
    a.localeCompare(b),
  );

  entries.forEach(([obj, value]) => {
    const sortedKey = Object.keys(obj).toSorted((a, b) => a.localeCompare(b));
    if (!isEqual(sortedKey, expectedKeys)) {
      throw new Error(
        "For performance reasons objects must all have the same shape",
      );
    }

    const serializedKey = stringify(obj);
    if (valuesByKey.has(serializedKey)) {
      throw new Error("Lookup keys must be unique");
    }
    valuesByKey.set(serializedKey, value);
  });

  return (obj: Partial<TKey>): TValue | undefined => {
    const key = pick(obj, expectedKeys);
    const serializedKey = stringify(key);
    return valuesByKey.get(serializedKey)!;
  };
}
