export function quickReference(): void {
  type Vec3 = [x: number, y: number, z: number];

  // 1. Create an array of vectors
  const points: Vec3[] = [
    [1, 2, 2],
    [3, 4, 0],
  ];

  // 2. Add a vector and read values
  points.push([0, 0, 1]);                                 // length = 3
  const second = points[1];                               // second = [3, 4, 0]
  const y = points[1][1];                                 // y = 4

  // 3. Length (magnitude) of each vector
  const lengths = points.map(([x, y, z]) => Math.hypot(x, y, z));   // lengths = [3, 5, 1]

  // 4. Scale each vector; return a tuple, not number[]
  const scaled = points.map(([x, y, z]): Vec3 => [x * 2, y * 2, z * 2]);
  // scaled = [[2, 4, 4], [6, 8, 0], [0, 0, 2]]

  // 5. Add all vectors together
  const sum = points.reduce<Vec3>(
    ([ax, ay, az], [bx, by, bz]) => [ax + bx, ay + by, az + bz],
    [0, 0, 0],
  );                                                      // sum = [4, 6, 3]

  // 6. Create n zero vectors, each a separate array
  const zeros = Array.from({ length: 2 }, (): Vec3 => [0, 0, 0]);   // zeros = [[0, 0, 0], [0, 0, 0]]

  console.log("length =", points.length);
  console.log("second =", JSON.stringify(second), "y =", y);
  console.log("lengths =", JSON.stringify(lengths));
  console.log("scaled =", JSON.stringify(scaled));
  console.log("sum =", JSON.stringify(sum));
  console.log("zeros =", JSON.stringify(zeros));
}
