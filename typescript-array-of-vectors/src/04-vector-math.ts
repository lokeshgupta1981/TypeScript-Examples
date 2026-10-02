export function vectorMath(): void {
  type Vec3 = [number, number, number];

  // 1. Basic operations as small typed functions
  const add = ([ax, ay, az]: Vec3, [bx, by, bz]: Vec3): Vec3 => [ax + bx, ay + by, az + bz];
  const scale = ([x, y, z]: Vec3, k: number): Vec3 => [x * k, y * k, z * k];
  const divide = ([x, y, z]: Vec3, k: number): Vec3 => [x / k, y / k, z / k];
  const dot = ([ax, ay, az]: Vec3, [bx, by, bz]: Vec3): number => ax * bx + ay * by + az * bz;
  const length = ([x, y, z]: Vec3): number => Math.hypot(x, y, z);

  const points: Vec3[] = [[1, 2, 2], [3, 4, 0]];

  // 2. Apply them to the whole array
  const lengths = points.map(length);                     // lengths = [3, 5]
  const doubled = points.map((v) => scale(v, 2));         // doubled = [[2, 4, 4], [6, 8, 0]]
  const units = points.map((v) => divide(v, length(v)));  // units[1] = [0.6, 0.8, 0]
  const total = points.reduce(add, [0, 0, 0]);            // total = [4, 6, 2]
  const d = dot(points[0], points[1]);                    // d = 11
  const longest = points.toSorted((a, b) => length(b) - length(a))[0];   // longest = [3, 4, 0]

  console.log("lengths =", JSON.stringify(lengths));
  console.log("doubled =", JSON.stringify(doubled));
  console.log("units =", JSON.stringify(units));
  console.log("total =", JSON.stringify(total));
  console.log("d =", d);
  console.log("longest =", JSON.stringify(longest));
}
