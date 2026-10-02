export function sharedMembers(): void {
  function label(value: string | number): string {
    return value.toString();                    // both types have toString()
  }

  const l1 = label(5);                          // l1 = "5"
  const l2 = label("apple");                    // l2 = "apple"

  console.log("l1 =", l1, "l2 =", l2);
}
