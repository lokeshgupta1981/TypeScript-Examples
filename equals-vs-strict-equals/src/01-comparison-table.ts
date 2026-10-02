export function comparisonTable(): void {
  const pairs: [string, unknown, unknown][] = [
    ['"10" vs 10', "10", 10],
    ['0 vs ""', 0, ""],
    ['"0" vs ""', "0", ""],
    ["0 vs false", 0, false],
    ['"1" vs true', "1", true],
    ["null vs undefined", null, undefined],
    ["null vs 0", null, 0],
    ["NaN vs NaN", Number.NaN, Number.NaN],
    ['[5] vs "5"', [5], "5"],
  ];

  for (const [label, x, y] of pairs) {
    console.log(label.padEnd(18), "==", String(x == y).padEnd(5), " ===", x === y);
  }
}
