export function sliceVsSplice(): void {
  const a = [1, 2, 3, 4, 5];
  const b = [1, 2, 3, 4, 5];

  const sliced = a.slice(1, 3);                 // sliced = [2, 3], a = [1, 2, 3, 4, 5]
  const spliced = b.splice(1, 3);               // spliced = [2, 3, 4], b = [1, 5]

  console.log("sliced =", JSON.stringify(sliced), "| a =", JSON.stringify(a));
  console.log("spliced =", JSON.stringify(spliced), "| b =", JSON.stringify(b));
}
