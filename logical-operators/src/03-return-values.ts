export function returnValues(): void {
  const nickname: string = "";
  const fullName: string = "Lokesh Gupta";

  // 1. || returns the first truthy operand, or the last one
  const shown = nickname || fullName;           // shown = "Lokesh Gupta"

  // 2. && returns the first falsy operand, or the last one
  const initial = fullName && fullName[0];      // initial = "L"
  const empty = nickname && nickname[0];        // empty = ""

  // 3. Convert to a real boolean
  const hasNickname = !!nickname;               // hasNickname = false
  const hasFullName = Boolean(fullName);        // hasFullName = true

  console.log("shown =", JSON.stringify(shown), "initial =", JSON.stringify(initial), "empty =", JSON.stringify(empty));
  console.log("hasNickname =", hasNickname, "hasFullName =", hasFullName);
}
