export function staticTyping(): void {
  // A union type allows both, on purpose
  let temp: number | string = 42;
  temp = "Hello";                               // allowed

  console.log("temp =", temp);
}
