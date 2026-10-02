export function resultType(): void {
  type Result<T> = { ok: true; value: T } | { ok: false; error: string };

  function parseAge(text: string): Result<number> {
    if (!/^\d+$/.test(text)) {
      return { ok: false, error: "Invalid age: " + text };
    }
    return { ok: true, value: Number(text) };
  }

  const r1 = parseAge("37");                    // r1 = { ok: true, value: 37 }
  const r2 = parseAge("abc");                   // r2 = { ok: false, error: "Invalid age: abc" }
  if (r2.ok) {
    console.log(r2.value);
  } else {
    console.log(r2.error);                      // Invalid age: abc
  }
  console.log(r1);
}
