export function jsonAndCopies(): void {
  const rec: Record<string, number> = { Lokesh: 37, Raj: 35 };
  const map = new Map<string, number>([["Lokesh", 37], ["Raj", 35]]);

  // 1. JSON
  const j1 = JSON.stringify(rec);                         // j1 = {"Lokesh":37,"Raj":35}
  const j2 = JSON.stringify(map);                         // j2 = {}

  // 2. Copy with one change
  const rec2 = { ...rec, Raj: 36 };                       // { Lokesh: 37, Raj: 36 }
  const map2 = new Map(map).set("Raj", 36);               // Map { "Lokesh" => 37, "Raj" => 36 }

  // 3. structuredClone() copies both
  const recCopy = structuredClone(rec);                   // { Lokesh: 37, Raj: 35 }
  const mapCopy = structuredClone(map);                   // Map { "Lokesh" => 37, "Raj" => 35 }

  // 4. Destructuring works only on the object
  const { Lokesh } = rec;                                 // Lokesh = 37

  console.log("j1 =", j1, "j2 =", j2);
  console.log("rec2 =", rec2, "map2 =", map2);
  console.log("recCopy =", recCopy, "mapCopy =", mapCopy);
  console.log("Lokesh =", Lokesh, "rec.Raj =", rec.Raj, "map Raj =", map.get("Raj"));
}
