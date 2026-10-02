export function tryCatchFinally(): void {
  try {
    console.log("1. try");
    JSON.parse("{bad");
    console.log("never printed");
  } catch (err) {
    console.log("2. catch: " + (err instanceof SyntaxError)); // 2. catch: true
  } finally {
    console.log("3. finally");
  }
  console.log("4. after");
}
