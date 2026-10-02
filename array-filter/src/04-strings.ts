export function filterStrings(): void {
  const names = ["Lokesh", "raj", "testUser", "John", "TestAdmin"];

  // 1. Starts with, ignoring case
  const tests = names.filter((s) => s.toLowerCase().startsWith("test"));   // ["testUser", "TestAdmin"]

  // 2. Everything else
  const real = names.filter((s) => !s.toLowerCase().startsWith("test"));   // ["Lokesh", "raj", "John"]

  // 3. Search text anywhere
  const query = "OH";
  const found = names.filter((s) => s.toLowerCase().includes(query.toLowerCase()));   // ["John"]

  console.log("tests =", JSON.stringify(tests), "| real =", JSON.stringify(real), "| found =", JSON.stringify(found));
}
