export function setOperations(): void {
  const a = new Set([1, 2, 3, 4]);
  const b = new Set([3, 4, 5]);

  // 1. Methods that return a new Set
  const all = a.union(b);                                 // all = {1, 2, 3, 4, 5}
  const common = a.intersection(b);                       // common = {3, 4}
  const onlyA = a.difference(b);                          // onlyA = {1, 2}
  const notBoth = a.symmetricDifference(b);               // notBoth = {1, 2, 5}

  // 2. Methods that return a boolean
  const sub = new Set([1, 2]).isSubsetOf(a);              // sub = true
  const sup = a.isSupersetOf(new Set([1, 2]));            // sup = true
  const disjoint = a.isDisjointFrom(new Set([7, 8]));     // disjoint = true

  // 3. The argument can be a Map; its keys are used
  const withMap = a.intersection(new Map([[4, "four"]])); // withMap = {4}

  console.log("all =", all, "common =", common);
  console.log("onlyA =", onlyA, "notBoth =", notBoth);
  console.log("sub =", sub, "sup =", sup, "disjoint =", disjoint);
  console.log("withMap =", withMap);
  console.log("a =", a, "b =", b);
}

export function setOperationsBeforeES2025(): void {
  const a = new Set([1, 2, 3, 4]);
  const b = new Set([3, 4, 5]);

  const all = new Set([...a, ...b]);                      // all = {1, 2, 3, 4, 5}
  const common = new Set([...a].filter((x) => b.has(x))); // common = {3, 4}
  const onlyA = new Set([...a].filter((x) => !b.has(x))); // onlyA = {1, 2}

  console.log("all =", all, "common =", common, "onlyA =", onlyA);
}
