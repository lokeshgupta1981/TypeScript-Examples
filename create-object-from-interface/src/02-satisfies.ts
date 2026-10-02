export function satisfiesUser(): void {
  interface User {
    name: string;
    age: number;
    email?: string;
  }

  // 1. Annotation: the type is User, so email may be undefined
  const lokesh: User = { name: "Lokesh", age: 37, email: "lokesh@example.com" };
  const domain1 = lokesh.email?.split("@")[1];  // domain1 = "example.com"

  // 2. satisfies: checked against User, email is known to be a string
  const raj = { name: "Raj", age: 35, email: "raj@example.com" } satisfies User;
  const domain2 = raj.email.split("@")[1];      // domain2 = "example.com", no ?. needed

  console.log("domain1 =", domain1);
  console.log("domain2 =", domain2);
}
