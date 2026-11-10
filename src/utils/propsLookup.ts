import { isEqual } from "lodash";

import { Trie } from "./trie";

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
  const trie = new Trie<TKey, TValue>();

  if (entries.length < 1) {
    throw new Error("Must provide entries for lookup");
  }

  const expectedKeys = Object.keys(entries[0]![0]).toSorted((a, b) =>
    a.localeCompare(b),
  );

  entries.forEach(([obj, value]) => {
    const sortedEntries = Object.entries(obj).toSorted(([aKey], [bKey]) =>
      aKey.localeCompare(bKey),
    );
    const sortedKey = sortedEntries.map(([k]) => k);
    const sortedValue = sortedEntries.map(([, v]) => v as TKey);

    if (trie.has(sortedValue)) {
      throw new Error("Keys must be unique");
    }

    if (!isEqual(sortedKey, expectedKeys)) {
      throw new Error(
        "For performance reasons objects must all have the same shape",
      );
    }

    trie.set(sortedValue, value);
  });

  return (obj: Partial<TKey>): TValue | undefined => {
    const lookupKey = expectedKeys.map((k) => obj[k as keyof TKey] as TKey);
    return trie.get(lookupKey);
  };
}
