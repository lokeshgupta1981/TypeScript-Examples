export function discriminatedUnions(): void {
  type Result =
    | { status: "ok"; value: number }
    | { status: "error"; message: string };

  function show(result: Result): string {
    if (result.status === "ok") {
      return "Value " + result.value;           // result has value
    }
    return "Failed: " + result.message;         // result has message
  }

  const ok = show({ status: "ok", value: 37 });               // ok = "Value 37"
  const err = show({ status: "error", message: "timeout" });  // err = "Failed: timeout"

  console.log("ok =", ok);
  console.log("err =", err);
}
