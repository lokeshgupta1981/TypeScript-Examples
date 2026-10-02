export function narrowing(): void {
  class ValidationError extends Error {
    name = "ValidationError";
  }
  class NotFoundError extends Error {
    name = "NotFoundError";
  }

  const ages = new Map([["Lokesh", 37], ["Raj", 35]]);

  function findAge(name: string): number {
    if (name.trim() === "") {
      throw new ValidationError("Name is empty");
    }
    const age = ages.get(name);
    if (age === undefined) {
      throw new NotFoundError("Not found: " + name);
    }
    return age;
  }

  function describe(name: string): string {
    try {
      return name + " is " + findAge(name);
    } catch (err) {
      if (err instanceof ValidationError) {
        return "Bad input: " + err.message;
      }
      if (err instanceof NotFoundError) {
        return "Unknown: " + name;
      }
      throw err;
    }
  }

  const d1 = describe("Lokesh");                // d1 = "Lokesh is 37"
  const d2 = describe(" ");                     // d2 = "Bad input: Name is empty"
  const d3 = describe("John");                  // d3 = "Unknown: John"
  console.log(d1, "|", d2, "|", d3);
}
