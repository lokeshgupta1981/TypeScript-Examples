export function whereNullComesFrom(): void {
  // 1. Set by the programmer
  let winner: string | null = null;             // no winner yet
  winner = "Raj";

  // 2. Returned by APIs that found nothing
  const match = "apple".match(/x/);             // match = null

  // 3. Read from JSON
  const data = JSON.parse('{"email": null}');
  const email = data.email;                     // email = null

  // 4. typeof null is "object"
  const kind = typeof null;                     // kind = "object"

  console.log("winner =", winner, "match =", match, "email =", email, "kind =", kind);
}
