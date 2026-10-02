export function literalTypes(): void {
  type Size = "small" | "large";

  const picked = "large";                       // type "large"
  let typed = "large";                          // type string

  let chosen: Size = "small";
  chosen = picked;                              // allowed, chosen = "large"
  // chosen = typed;                            // error TS2322

  console.log("chosen =", chosen, "| typed =", typed);
}
