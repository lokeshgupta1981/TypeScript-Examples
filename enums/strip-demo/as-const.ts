const Size = {
  Small: "small",
  Medium: "medium",
  Large: "large",
} as const;
type Size = (typeof Size)[keyof typeof Size];

const size: Size = Size.Medium;
console.log(size);
