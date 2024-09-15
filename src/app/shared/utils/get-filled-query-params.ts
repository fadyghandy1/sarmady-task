export function getFilledQueryParams<T extends Object>(
  params: T | undefined,
): Partial<T> {
  if (!params) return {};
  return Object.entries(params).reduce(
    (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
    {},
  );
}
