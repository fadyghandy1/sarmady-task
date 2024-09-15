/**
 *  Get object with truthy values
 *  example:
 *   { a: 1, b: 0, c: undefined, d: null, e: '' , f: 'a'} => { a: 1, f: 'a' }
 *   All ubntruthy values such as undefined, null, 0, '' values are removed
 */
export function getObjectWithTruthyValueOnlyRecursively<T extends Object>(
  params: T | undefined,
  ignoreEmptyArray = false,
  ignoreKeys: (keyof T)[] = [],
): Partial<T> {
  if (!params) return {};
  return Object.entries(params).reduce((acc, [key, value]) => {
    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        if (ignoreEmptyArray && value.length === 0) return acc;
        const nestedArray = value
          .map((val) =>
            getObjectWithTruthyValueOnlyRecursively(val, ignoreEmptyArray),
          )
          .filter((val) => Object.keys(val).length > 0 || !ignoreEmptyArray);
        return { ...acc, [key]: nestedArray };
      }
      const nestedObject = getObjectWithTruthyValueOnlyRecursively(value);
      return { ...acc, [key]: nestedObject };
    } else if (value && !ignoreKeys.includes(key as any)) {
      return { ...acc, [key]: value };
    }
    return acc;
  }, {});
}

/**
 *  Get object with Coelced values
 *  example:
 *   { a: 1, b: 0, c: undefined, d: null, e: '' , f: 'a'} => { a: 1, b: 0, f: 'a', e: '' }
 *  Only undefined and null values are removed
 */
export function getObjectWithCoelcedTruthyValueOnly<T extends Object>(
  params: T | undefined,
): Partial<T> {
  if (!params) return {};
  return Object.entries(params).reduce((acc, [key, value]) => {
    if (value === undefined || value === null) return acc;
    return { ...acc, [key]: value };
  }, {});
}
