// Section 3: Handling undefined from get()
export function handleMissingKeys(): void {
  const ages = new Map<string, number>([["Lokesh", 37]]);

  // 1. Default value
  const age1 = ages.get("Brian") ?? 0; // age1 = 0
  console.log(age1);

  // 2. Check the result; the type narrows to number
  const age2 = ages.get("Lokesh");
  if (age2 !== undefined) {
    console.log(age2 + 1); // 38
  }

  // 3. Non-null assertion after has()
  if (ages.has("Lokesh")) {
    console.log(ages.get("Lokesh")! + 1); // 38
  }
}
