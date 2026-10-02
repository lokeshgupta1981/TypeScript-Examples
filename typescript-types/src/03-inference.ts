export function inference(): void {
  // 1. Inferred from the value
  let city = "Delhi";                           // city: string
  const country = "India";                      // country: "India"
  const ages = [37, 35, 40];                    // ages: number[]

  // 2. Inferred return type
  function double(n: number) {
    return n * 2;                               // returns number
  }
  const result = double(4);                     // result = 8

  // 3. Variable without a value needs a type
  let total: number;
  total = 10;

  console.log(city, country, ages, "result =", result, "total =", total);
}
