export function shallowCopyMistake(): void {
  const signup = { password: "secret123", cards: [{ cardNumber: "4111111111111111" }] };

  const forLog = { ...signup };
  forLog.password = "[REDACTED]";
  forLog.cards[0].cardNumber = "[REDACTED]";

  console.log(signup.password);
  console.log(signup.cards[0].cardNumber);
}
