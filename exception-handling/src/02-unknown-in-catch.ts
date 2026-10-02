export function unknownInCatch(): void {
  // 1. Narrow with instanceof
  try {
    JSON.parse("{bad");
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.name);                    // SyntaxError
    }
  }

  // 2. Anything can be thrown
  try {
    throw "apple";
  } catch (err) {
    const isString = typeof err === "string";   // isString = true
    console.log(isString);
  }

  // 3. A helper for the message of any thrown value
  function errorMessage(err: unknown): string {
    return err instanceof Error ? err.message : String(err);
  }
  try {
    throw 404;
  } catch (err) {
    const message = errorMessage(err);          // message = "404"
    console.log(message);
  }

  // 4. Catch without a variable (ES2019)
  let valid = true;
  try {
    JSON.parse("{bad");
  } catch {
    valid = false;                              // valid = false
  }
  console.log(valid);
}
