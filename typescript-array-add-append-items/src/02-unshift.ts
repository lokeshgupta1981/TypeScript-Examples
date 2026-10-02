export function unshiftItems(): void {
  const names = ["Raj", "John"];

  const size = names.unshift("Lokesh");         // size = 3, names = ["Lokesh", "Raj", "John"]
  console.log("size =", size, "| names =", names);

  names.unshift("Amit", "Brian");               // names = ["Amit", "Brian", "Lokesh", "Raj", "John"]
  console.log("names =", names);
}
