export function fromClass(): void {
  interface User {
    name: string;
    age: number;
    greet(): string;
  }

  class Member implements User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet(): string {
      return "Hi, I am " + this.name;
    }

    // Extra method, not part of User
    birthday(): void {
      this.age++;
    }
  }

  const raj = new Member("Raj", 35);
  raj.birthday();

  const age = raj.age;                          // age = 36
  const user: User = raj;                       // a Member is a User
  const text = user.greet();                    // text = "Hi, I am Raj"
  const isMember = raj instanceof Member;       // isMember = true

  console.log("age =", age);
  console.log("text =", text);
  console.log("isMember =", isMember);
}
