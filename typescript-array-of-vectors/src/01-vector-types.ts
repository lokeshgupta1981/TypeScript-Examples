export function vectorTypes(): void {
  // 1. Tuple: exactly three numbers
  type Vec3 = [number, number, number];

  // 2. Labeled tuple: same type, names shown in the editor
  type Point3 = [x: number, y: number, z: number];

  // 3. Read-only tuple: no push(), no assignment
  type FixedVec3 = readonly [x: number, y: number, z: number];

  // 4. Object with named fields
  interface Vector3 {
    x: number;
    y: number;
    z: number;
  }

  // 5. Any number of components
  type VecN = number[];

  const a: Vec3 = [1, 2, 2];
  const b: Point3 = a;                                    // same structure, assignable
  const c: FixedVec3 = [3, 4, 0];
  const d: Vector3 = { x: 1, y: 2, z: 2 };
  const e: VecN = [1, 2, 3, 4, 5];

  console.log("a =", JSON.stringify(a), "b =", JSON.stringify(b), "c =", JSON.stringify(c));
  console.log("d =", JSON.stringify(d), "e =", JSON.stringify(e));
}

export function tuplePushLoophole(): void {
  type Vec3 = [number, number, number];

  const v: Vec3 = [1, 2, 2];
  v.push(4);                                              // compiles
  const size = v.length;                                  // size = 4 at runtime

  console.log("v =", JSON.stringify(v), "size =", size);
}
