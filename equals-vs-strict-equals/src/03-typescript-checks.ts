export function typescriptChecks(): void {
  const age = 37;
  const input = "37";

  // 1. Convert explicitly, then use ===
  const same = Number(input) === age;           // same = true

  // 2. A union type still allows ==
  const ids: (string | number)[] = ["1", 1];
  const id = ids[0];
  const loose = id == 1;                        // loose = true
  const strict = id === 1;                      // strict = false
  const byText = String(id) === "1";            // byText = true

  console.log("same =", same, "loose =", loose, "strict =", strict, "byText =", byText);
}
