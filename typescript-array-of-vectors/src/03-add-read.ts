type Vec3 = [number, number, number];

export function addRemoveRead(): void {
  const points: Vec3[] = [[1, 2, 2], [3, 4, 0]];

  // 1. Add and remove
  points.push([0, 0, 1]);                                 // [[1, 2, 2], [3, 4, 0], [0, 0, 1]]
  points.splice(1, 0, [5, 5, 5]);                         // inserts at index 1
  const removed = points.splice(1, 1);                    // removed = [[5, 5, 5]]
  const last = points.pop();                              // last = [0, 0, 1]

  // 2. Read a vector and one component
  const first = points[0];                                // first = [1, 2, 2]
  const y = points[1][1];                                 // y = 4
  const [x0, y0, z0] = points[0];                         // x0 = 1, y0 = 2, z0 = 2

  // 3. Loop with destructuring
  for (const [x, y, z] of points) {
    console.log(x, y, z);                                 // 1 2 2, then 3 4 0
  }

  // 4. Find a vector by value: compare components, not references
  const byRef = points.includes([1, 2, 2]);               // byRef = false
  const byValue = points.some(([x, y, z]) => x === 1 && y === 2 && z === 2);   // byValue = true

  console.log("removed =", JSON.stringify(removed), "last =", JSON.stringify(last));
  console.log("first =", JSON.stringify(first), "y =", y, "x0 y0 z0 =", x0, y0, z0);
  console.log("byRef =", byRef, "byValue =", byValue);
}
