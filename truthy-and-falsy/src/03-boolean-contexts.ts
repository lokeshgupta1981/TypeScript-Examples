export function booleanContexts(): void {
  const fruits = ["apple", "", "banana"];

  // 1. if, ternary and loop conditions
  const label = fruits.length ? "has fruits" : "empty";   // label = "has fruits"

  // 2. The callback result of filter()
  const named = fruits.filter((f) => f);        // named = ["apple", "banana"]

  // 3. && and || return one of the operands
  const first = fruits[0];                      // "apple"
  const empty = fruits[1];                      // ""
  const a = first && first.length;              // a = 5
  const b = empty && empty.length;              // b = ""
  const c = empty || "none";                    // c = "none"

  console.log("label =", label, "named =", named, "a =", a, "b =", b, "c =", c);
}
