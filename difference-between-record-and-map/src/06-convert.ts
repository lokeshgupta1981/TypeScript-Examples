export function convert(): void {
  // 1. Record to Map and back
  const rec: Record<string, number> = { apple: 5, banana: 3 };
  const map = new Map(Object.entries(rec));               // Map<string, number>
  const back = Object.fromEntries(map);                   // back = { apple: 5, banana: 3 }

  // 2. Number keys do not survive the round trip
  const squares = new Map<number, number>([[2, 4], [3, 9]]);
  const obj = Object.fromEntries(squares);                // obj = { "2": 4, "3": 9 }
  const again = new Map(Object.entries(obj));             // Map<string, number>
  const nine = again.get("3");                            // nine = 9, the key is now "3"

  console.log("map =", map, "back =", back);
  console.log("obj =", obj, "again =", again, "nine =", nine);
}
