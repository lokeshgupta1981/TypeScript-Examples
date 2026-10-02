export function nullCheck(): void {
  const ages = new Map<string, number>([["Lokesh", 37]]);
  const raj = ages.get("Raj");                  // type number | undefined

  // 1. One check for null and undefined
  const missing1 = raj == null;                 // missing1 = true
  const missing2 = raj === null || raj === undefined;   // missing2 = true

  // 2. != null narrows the type
  const lokesh = ages.get("Lokesh");
  if (lokesh != null) {
    console.log(lokesh + 1);                    // 38
  }

  console.log("missing1 =", missing1, "missing2 =", missing2);
}
