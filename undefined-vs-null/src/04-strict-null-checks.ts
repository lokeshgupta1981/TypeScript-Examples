export function strictNullChecks(): void {
  // 1. Allow null or undefined explicitly
  let nickname: string | null = null;
  let middleName: string | undefined = undefined;

  // 2. Optional property: may be missing
  type User = {
    name: string;
    email?: string;                             // string | undefined, key may be absent
    phone: string | undefined;                  // key must be present
  };
  const raj: User = { name: "Raj", phone: undefined };

  // 3. Narrow before use
  function length(text: string | null): number {
    if (text === null) {
      return 0;
    }
    return text.length;                         // text: string
  }
  const l1 = length("apple");                   // l1 = 5
  const l2 = length(null);                      // l2 = 0

  nickname = "RJ";
  console.log(nickname, middleName, raj, "l1 =", l1, "l2 =", l2);
}
