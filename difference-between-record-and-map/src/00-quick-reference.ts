export function quickReference(): void {
  // Record: a typed plain object
  const rec: Record<string, number> = { Lokesh: 37 };
  rec["Raj"] = 35;                                        // add
  const r1 = rec["Raj"];                                  // r1 = 35
  const r2 = Object.hasOwn(rec, "Raj");                   // r2 = true
  delete rec["Raj"];                                      // remove
  const rSize = Object.keys(rec).length;                  // rSize = 1
  const rJson = JSON.stringify(rec);                      // rJson = {"Lokesh":37}

  // Map: a collection class
  const map = new Map<string, number>([["Lokesh", 37]]);
  map.set("Raj", 35);                                     // add
  const m1 = map.get("Raj");                              // m1 = 35
  const m2 = map.has("Raj");                              // m2 = true
  map.delete("Raj");                                      // remove
  const mSize = map.size;                                 // mSize = 1
  const mJson = JSON.stringify(Object.fromEntries(map));  // mJson = {"Lokesh":37}

  // Convert one into the other
  const toMap = new Map(Object.entries(rec));             // Map { "Lokesh" => 37 }
  const toRecord = Object.fromEntries(map);               // { Lokesh: 37 }

  console.log("r1 =", r1, "r2 =", r2, "rSize =", rSize, "rJson =", rJson);
  console.log("m1 =", m1, "m2 =", m2, "mSize =", mSize, "mJson =", mJson);
  console.log("toMap =", toMap, "toRecord =", toRecord);
}
