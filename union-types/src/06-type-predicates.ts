export function typePredicates(): void {
  // 1. Custom type guard
  function isString(value: unknown): value is string {
    return typeof value === "string";
  }
  const input: unknown = "banana";
  if (isString(input)) {
    const len = input.length;                   // len = 6
    console.log("len =", len);
  }

  // 2. Inferred type predicate in filter() (TypeScript 5.5+)
  const ages = [37, null, 40, undefined];
  const known = ages.filter((a) => a != null);  // known: number[] = [37, 40]

  console.log("known =", known);
}
