import { maskCard, maskEmail } from "./mask.js";

class Customer {
  name: string;
  email: string;
  cardNumber: string;
  #password: string;

  constructor(name: string, email: string, cardNumber: string, password: string) {
    this.name = name;
    this.email = email;
    this.cardNumber = cardNumber;
    this.#password = password;
  }

  checkPassword(input: string): boolean {
    return input === this.#password;
  }

  toJSON() {
    return { name: this.name, email: maskEmail(this.email), cardNumber: maskCard(this.cardNumber) };
  }
}

class SafeCustomer extends Customer {
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toJSON();
  }
}

export function toJsonExample(): void {
  const customer = new Customer("Lokesh", "lokesh@example.com", "4111111111111111", "secret123");

  const json = JSON.stringify(customer);
  console.log(json);
  console.log(JSON.stringify({ event: "signup", customer }));
  console.log(customer);
  console.log(customer.checkPassword("secret123"));

  const safe = new SafeCustomer("Lokesh", "lokesh@example.com", "4111111111111111", "secret123");
  console.log(safe);
}
