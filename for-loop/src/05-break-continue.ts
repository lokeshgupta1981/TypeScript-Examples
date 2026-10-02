export function breakContinue(): void {
  // Labeled break: leave both loops
  const grid = [[1, 2], [3, 4], [5, 6]];
  let found = "";
  outer: for (const [row, cells] of grid.entries()) {
    for (const cell of cells) {
      if (cell === 4) {
        found = "row " + row;
        break outer;
      }
    }
  }
  console.log("found =", found);                // found = "row 1"
}
