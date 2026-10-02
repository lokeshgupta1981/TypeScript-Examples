export function varScope(): void {
  // 1. Function scope: var ignores the block
  function checkout(): string {
    {
      var state = "paid";
    }
    return state;
  }
  const result = checkout();                    // result = "paid"

  // 2. Redeclaration with the same type
  var visits = 1;
  var visits = 2;                               // allowed, visits = 2

  console.log("result =", result, "| visits =", visits);
}
