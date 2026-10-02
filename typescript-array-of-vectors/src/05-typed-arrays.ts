export function typedArrays(): void {
  // 1. Three numbers per vector, stored in one flat array
  const count = 2;
  const data = new Float64Array(count * 3);               // 6 zeros
  data.set([1, 2, 2], 0);                                 // vector 0
  data.set([3, 4, 0], 3);                                 // vector 1

  // 2. Read vector i
  const i = 1;
  const v = data.subarray(i * 3, i * 3 + 3);              // v = Float64Array [3, 4, 0]
  const len = Math.hypot(...v);                           // len = 5

  // 3. Float32Array uses less memory but rounds values
  const f32 = Float32Array.of(0.1)[0];                    // f32 = 0.10000000149011612

  console.log("data =", data);
  console.log("v =", v, "len =", len);
  console.log("f32 =", f32);
}
