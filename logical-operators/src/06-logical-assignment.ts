export function logicalAssignment(): void {
  // 1. ??= sets a default for null or undefined
  let retries: number | undefined;
  retries ??= 3;                                // retries = 3

  // 2. ||= also replaces 0, "" and false
  let title = "";
  title ||= "Untitled";                         // title = "Untitled"

  // 3. &&= updates only a truthy value
  let total = 5;
  total &&= total * 2;                          // total = 10

  // 4. Create a list on first use
  const groups: Record<string, string[]> = {};
  groups["fruit"] ??= [];
  groups["fruit"].push("apple");
  groups["fruit"] ??= [];                       // keeps the existing list
  groups["fruit"].push("banana");               // groups = { fruit: ["apple", "banana"] }

  console.log("retries =", retries, "title =", title, "total =", total);
  console.log("groups =", JSON.stringify(groups));
}
