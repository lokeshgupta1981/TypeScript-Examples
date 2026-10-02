export function expressions(): void {
  const fruits = ["apple", "banana"];
  const lokesh = { name: "Lokesh", age: 37 };
  const nicknames = new Map<string, string>();

  // 1. Calculations, calls and conditions
  const total = `Total: ${(0.1 + 0.2).toFixed(2)}`;    // total = "Total: 0.30"
  const upper = `Name: ${lokesh.name.toUpperCase()}`;  // upper = "Name: LOKESH"
  const count = `${fruits.length} ${fruits.length === 1 ? "fruit" : "fruits"}`;   // count = "2 fruits"

  // 2. Nested templates
  const html = `<ul>${fruits.map((f) => `<li>${f}</li>`).join("")}</ul>`;
  // html = "<ul><li>apple</li><li>banana</li></ul>"

  // 3. How values become text
  const list = `${fruits}`;                     // list = "apple,banana"
  const obj = `${lokesh}`;                      // obj = "[object Object]"
  const json = `${JSON.stringify(lokesh)}`;     // json = "{"name":"Lokesh","age":37}"
  const nickname = nicknames.get("Lokesh");
  const empty = `Hi ${nickname}`;               // empty = "Hi undefined"
  const safe = `Hi ${nickname ?? "friend"}`;    // safe = "Hi friend"

  console.log("total =", total, "| upper =", upper, "| count =", count);
  console.log("html =", html);
  console.log("list =", list, "| obj =", obj, "| json =", json);
  console.log("empty =", empty, "| safe =", safe);
}
