// Section 5: Converting a Map to an array, object or JSON
export function convertMaps(): void {
  const ages = new Map([["Lokesh", 37], ["Raj", 35]]);

  // 1. Map to array and object
  const pairs = [...ages]; // pairs = [["Lokesh", 37], ["Raj", 35]]
  const obj = Object.fromEntries(ages); // obj = { Lokesh: 37, Raj: 35 }
  console.log(pairs, obj);

  // 2. Object to Map
  const fromObj = new Map(Object.entries({ John: 40 })); // John => 40
  console.log(fromObj);

  // 3. Map to JSON and back
  const wrong = JSON.stringify(ages); // wrong = {}
  const json = JSON.stringify(Object.fromEntries(ages)); // json = {"Lokesh":37,"Raj":35}
  console.log(wrong, json);

  const parsed: Record<string, number> = JSON.parse(json);
  const restored = new Map(Object.entries(parsed));
  const rajAge = restored.get("Raj"); // rajAge = 35
  console.log(rajAge);
}
