export function signatureRules(): void {
  class User {
    name: string;
    constructor(name: string) { this.name = name; }
    greet(): string { return "Hi, I am " + this.name; }
    protected label(): string { return "user"; }
  }

  class Admin extends User {
    // 1. An extra parameter is allowed when it is optional
    override greet(prefix?: string): string {
      return (prefix ?? "") + super.greet();
    }

    // 2. A protected method may become public
    override label(): string { return "admin"; }
  }

  const raj = new Admin("Raj");
  const t1 = raj.greet();                       // t1 = "Hi, I am Raj"
  const t2 = raj.greet("Welcome. ");            // t2 = "Welcome. Hi, I am Raj"
  const t3 = raj.label();                       // t3 = "admin"

  console.log("t1 =", t1);
  console.log("t2 =", t2);
  console.log("t3 =", t3);
}
