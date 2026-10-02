type Vec3 = [number, number, number];

interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export function createArrays(): void {
  // 1. Array of tuples
  const points: Vec3[] = [[1, 2, 2], [3, 4, 0]];

  // 2. Array of objects
  const objs: Vector3[] = [{ x: 1, y: 2, z: 2 }, { x: 3, y: 4, z: 0 }];

  // 3. Vectors of different lengths: number[][]
  const rows: number[][] = [[1, 2], [3, 4, 5], [6]];

  // 4. n zero vectors, each a separate array
  const zeros = Array.from({ length: 3 }, (): Vec3 => [0, 0, 0]);
  zeros[0][0] = 9;                                        // zeros = [[9, 0, 0], [0, 0, 0], [0, 0, 0]]

  // 5. Wrong: fill() puts the same array in every slot
  const shared = new Array<Vec3>(3).fill([0, 0, 0]);
  shared[0][0] = 9;                                       // shared = [[9, 0, 0], [9, 0, 0], [9, 0, 0]]

  console.log("points =", JSON.stringify(points));
  console.log("objs =", JSON.stringify(objs));
  console.log("rows =", JSON.stringify(rows));
  console.log("zeros =", JSON.stringify(zeros));
  console.log("shared =", JSON.stringify(shared));
}
