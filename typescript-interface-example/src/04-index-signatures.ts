export function indexSignatures(): void {
  interface Ages {
    [name: string]: number;
  }

  const ages: Ages = { Lokesh: 37, Raj: 35 };
  ages["John"] = 40;                            // any string key is allowed

  const count = Object.keys(ages).length;       // count = 3
  const brian = ages["Brian"];                  // brian = undefined, typed as number

  console.log("count =", count);
  console.log("brian =", brian);
}
