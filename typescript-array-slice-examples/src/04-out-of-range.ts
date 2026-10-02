export function outOfRange(): void {
  const letters = ["a", "b", "c"];

  const past = letters.slice(5);                // past = []
  const clamped = letters.slice(1, 99);         // clamped = ["b", "c"]
  const fromStart = letters.slice(-99, 1);      // fromStart = ["a"]
  const decimal = letters.slice(1.7);           // decimal = ["b", "c"], 1.7 becomes 1

  console.log("past =", JSON.stringify(past), "| clamped =", JSON.stringify(clamped));
  console.log("fromStart =", JSON.stringify(fromStart), "| decimal =", JSON.stringify(decimal));
}
