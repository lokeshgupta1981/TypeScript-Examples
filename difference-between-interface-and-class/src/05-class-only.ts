export function classOnly(): void {
  class User {
    static count = 0;                           // belongs to the class
    #password: string;                          // private at runtime too
    protected age: number;
    readonly name: string;

    constructor(name: string, age: number, password: string) {
      this.name = name;
      this.age = age;
      this.#password = password;
      User.count++;
    }

    checkPassword(input: string): boolean {
      return input === this.#password;
    }
  }

  const john = new User("John", 40, "secret");
  new User("Raj", 35, "hello");

  const ok = john.checkPassword("secret");      // ok = true
  const count = User.count;                     // count = 2

  console.log("ok =", ok);
  console.log("count =", count);
}
