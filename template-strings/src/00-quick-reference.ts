type Size = "small" | "large";
type SizeClass = `size-${Size}`;              // "size-small" | "size-large"

export function quickReference(): void {
  const name = "Lokesh";
  const age = 37;

  // 1. Placeholders
  const intro = `My name is ${name} and I am ${age}`;   // intro = "My name is Lokesh and I am 37"

  // 2. Any expression
  const next = `Next year: ${age + 1}`;         // next = "Next year: 38"
  const group = `Group: ${age >= 18 ? "adult" : "minor"}`;   // group = "Group: adult"

  // 3. Multi-line string
  const lines = `apple
banana`;                                        // lines = "apple\nbanana"

  // 4. Built-in tag: backslashes stay as typed
  const path = String.raw`C:\new\folder`;       // path = "C:\new\folder"

  // 5. Template literal type
  const css: SizeClass = "size-small";          // "size-medium" is a compile error

  console.log("intro =", JSON.stringify(intro));
  console.log("next =", JSON.stringify(next), "group =", JSON.stringify(group));
  console.log("lines =", JSON.stringify(lines), "path =", path, "css =", css);
}
