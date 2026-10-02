export function compoundAssignment(): void {
  let total = 10;

  total += 5;                                   // total = 15
  console.log("total =", total);
  total -= 3;                                   // total = 12
  console.log("total =", total);
  total *= 2;                                   // total = 24
  console.log("total =", total);
  total /= 4;                                   // total = 6
  console.log("total =", total);
  total %= 4;                                   // total = 2
  console.log("total =", total);
  total **= 3;                                  // total = 8
  console.log("total =", total);

  let label = "Total: ";
  label += total;                               // label = "Total: 8"
  console.log("label =", JSON.stringify(label));
}
