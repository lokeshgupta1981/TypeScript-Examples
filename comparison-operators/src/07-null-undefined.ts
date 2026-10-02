export function nullAndUndefined(): void {
  const scores = new Map<string, number>([["Lokesh", 80]]);

  const raj = scores.get("Raj");                // raj = undefined

  // 1. Check before comparing
  const passed = raj !== undefined && raj > 50; // passed = false

  // 2. Or give a default
  const passedOrZero = (raj ?? 0) > 50;         // passedOrZero = false
  const lokeshPassed = (scores.get("Lokesh") ?? 0) > 50;   // lokeshPassed = true

  console.log("raj =", raj, "passed =", passed, "passedOrZero =", passedOrZero, "lokeshPassed =", lokeshPassed);
}
