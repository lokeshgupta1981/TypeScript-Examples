export function compilerChecks(): void {
  const input = "37";
  const age = 37;

  const same = Number(input) === age;           // same = true
  const older = Number(input) > 30;             // older = true

  console.log("same =", same, "older =", older);
}
