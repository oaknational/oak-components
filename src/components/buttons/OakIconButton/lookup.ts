import stringify from "fast-json-stable-stringify";

type LookupEntry<TKey extends object, TValue> = readonly [
  Partial<TKey>,
  TValue,
];

export function buildLookup<TKey extends object, TValue>(
  entries: readonly LookupEntry<TKey, TValue>[],
) {
  const valuesByKey = new Map<string, TValue>();
  const uniqueKeyFields = new Map<string, string[]>();

  entries.forEach(([key, value]) => {
    const serializedKey = stringify(key);
    if (valuesByKey.has(serializedKey)) {
      throw new Error("Lookup keys must be unique");
    }
    valuesByKey.set(serializedKey, value);
    const fields = Object.keys(key).toSorted((left, right) =>
      left.localeCompare(right),
    );
    const fieldSet = JSON.stringify(fields);
    if (!uniqueKeyFields.has(fieldSet)) {
      uniqueKeyFields.set(fieldSet, fields);
    }
  });
  const keyFields = [...uniqueKeyFields.values()].sort(
    (left, right) => right.length - left.length,
  );

  return (key: Partial<TKey>): TValue | undefined => {
    const keyValues = key as Record<string, unknown>;
    for (const fields of keyFields) {
      if (!fields.every((field) => field in keyValues)) {
        continue;
      }

      const projectedKey: Record<string, unknown> = Object.create(null);
      for (const field of fields) {
        projectedKey[field] = keyValues[field];
      }

      const serializedKey = stringify(projectedKey);
      if (valuesByKey.has(serializedKey)) {
        return valuesByKey.get(serializedKey)!;
      }
    }

    return undefined;
  };
}
