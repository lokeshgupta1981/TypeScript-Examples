export function superCalls(): void {
  class User {
    name: string;
    constructor(name: string) { this.name = name; }
    greet(): string { return "Hi, I am " + this.name; }
  }

  class Admin extends User {
    role: string;

    // 1. super(...) runs the parent constructor first
    constructor(name: string, role: string) {
      super(name);
      this.role = role;
    }

    // 2. super.greet() runs the parent method
    override greet(): string {
      return super.greet() + " (" + this.role + ")";
    }
  }

  const lokesh = new Admin("Lokesh", "owner");
  const text = lokesh.greet();                  // text = "Hi, I am Lokesh (owner)"

  console.log("text =", text);
}
