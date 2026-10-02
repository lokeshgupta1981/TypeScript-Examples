export function overloadOrder(): void {
  // 1. Wrong order: the general overload comes first
  function parseWrong(value: unknown): unknown;
  function parseWrong(value: string): number;
  function parseWrong(value: unknown): unknown {
    return typeof value === "string" ? Number(value) : value;
  }
  const a = parseWrong("37");                   // a = 37, but type unknown
  console.log(a);

  // 2. Right order: the specific overload comes first
  function parse(value: string): number;
  function parse(value: unknown): unknown;
  function parse(value: unknown): unknown {
    return typeof value === "string" ? Number(value) : value;
  }
  const b = parse("37");                        // b = 37 (number)
  console.log(b + 1);                           // 38
}
