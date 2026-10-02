export function annotationVsSatisfies(): void {
  // 1. Annotation: the variable type is Record<string, number>
  const prices: Record<string, number> = { apple: 5, banana: 3 };
  const typo = prices.aple;                               // compiles, value undefined

  // 2. satisfies: values are checked, the exact keys are kept
  const prices2 = { apple: 5, banana: 3 } satisfies Record<string, number>;
  const apple = prices2.apple;                            // apple = 5

  console.log("typo =", typo, "apple =", apple);
}
