import { maskText } from "./mask.js";

export function freeText(): void {
  const a = maskText("Card 4111-1111-1111-1111 declined");
  const b = maskText("Welcome mail sent to lokesh@example.com");
  const c = maskText("GET /login?user=lokesh&password=secret123");
  const d = maskText("Call 555-0100 about order 1042");
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}
