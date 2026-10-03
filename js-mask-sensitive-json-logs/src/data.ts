// Fake test data only: 4111111111111111 and 5555555555554444 are public test card numbers.
export const profile = {
  name: "Lokesh",
  email: "lokesh@example.com",
  password: "secret123",
  phone: "555-0100",
  address: { city: "Delhi", street: "12 Park Road" },
  cards: [
    { cardNumber: "4111111111111111", expiry: "12/30" },
    { cardNumber: "5555555555554444", expiry: "01/29" },
  ],
  tokens: ["tok-a", "tok-b"],
};
