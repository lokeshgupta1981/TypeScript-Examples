export function finallyBlock(): void {
  // 1. finally runs even after return
  function readAge(): number {
    try {
      console.log("open");
      return 37;
    } finally {
      console.log("close");                     // printed before the caller gets 37
    }
  }
  const age = readAge();                        // age = 37
  console.log(age);

  // 2. A return in finally replaces the error
  function swallow(): string {
    try {
      throw new Error("lost");
    } finally {
      return "finally wins";
    }
  }
  const result = swallow();                     // result = "finally wins"; the error is gone
  console.log(result);
}
