export function optionalParameters(): void {
  // 1. middle is optional
  function fullName(first: string, last: string, middle?: string): string {
    return middle ? first + " " + middle + " " + last : first + " " + last;
  }
  const n1 = fullName("Lokesh", "Gupta");       // n1 = "Lokesh Gupta"
  const n2 = fullName("Raj", "Kumar", "Pal");   // n2 = "Raj Pal Kumar"
  console.log(n1, n2);

  // 2. Inside the function, the type includes undefined
  function describeAge(age?: number): string {
    if (age === undefined) {
      return "unknown";
    }
    return age + " years";                      // age is number here
  }
  const a1 = describeAge();                     // a1 = "unknown"
  const a2 = describeAge(37);                   // a2 = "37 years"
  const a3 = describeAge(0);                    // a3 = "0 years"
  console.log(a1, a2, a3);
}
