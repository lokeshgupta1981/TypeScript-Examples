export function builtInErrors(): void {
  // Throwing a built-in type ourselves
  function checkAge(age: number): number {
    if (age < 0 || age > 150) {
      throw new RangeError("Age out of range: " + age);
    }
    return age;
  }
  try {
    checkAge(200);
  } catch (err) {
    if (err instanceof RangeError) {
      console.log(err.message);                 // Age out of range: 200
    }
  }
}
