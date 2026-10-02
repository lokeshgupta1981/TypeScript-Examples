export function popAndShift(): void {
  const names = ["Lokesh", "Raj", "John"];

  // 1. pop() removes from the end
  const last = names.pop();                     // last = "John", typed string | undefined
  console.log("last =", last, "| names =", JSON.stringify(names));

  // 2. shift() removes from the start
  const first = names.shift();                  // first = "Lokesh"
  console.log("first =", first, "| names =", JSON.stringify(names));

  // 3. Empty array: no error, undefined
  const empty: string[] = [];
  const nothing = empty.pop();                  // nothing = undefined
  console.log("nothing =", nothing);
}
