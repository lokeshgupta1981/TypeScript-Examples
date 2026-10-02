export function narrowWithTypeof(): void {
  function pad(value: string | number): string {
    if (typeof value === "number") {
      return value.toFixed(1);                  // value: number
    }
    return value.trim();                        // value: string
  }

  const p1 = pad(5);                            // p1 = "5.0"
  const p2 = pad("  apple ");                   // p2 = "apple"

  console.log("p1 =", p1, "p2 =", p2);
}
