export function narrowing(): void {
  const names: (string | undefined)[] = ["Lokesh", undefined];
  const name = names[1];

  // 1. && checks name before reading length
  const length = name && name.length;           // length = undefined

  // 2. ! in an early check
  if (!name) {
    console.log("no name");                     // printed
  } else {
    console.log(name.toUpperCase());            // name is a string here
  }

  console.log("length =", length);
}
