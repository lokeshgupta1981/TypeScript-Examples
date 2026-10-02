export function erasableSyntax(): void {
  // An object with 'as const' instead of an enum
  const Size = { Small: "small", Large: "large" } as const;
  type Size = (typeof Size)[keyof typeof Size];

  const cup: Size = Size.Large;                 // cup = "large"

  console.log("cup =", cup);
}
