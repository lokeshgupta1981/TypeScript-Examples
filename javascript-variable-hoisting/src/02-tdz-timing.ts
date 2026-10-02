export function tdzTiming(): void {
  // The function reads greeting only when it is called
  const greet = () => greeting + ", Lokesh";

  const greeting = "Hello";
  const text = greet();                         // text = "Hello, Lokesh"

  console.log("text =", text);
}
