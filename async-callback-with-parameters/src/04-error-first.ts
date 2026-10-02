export function errorFirst(): void {
  const ages = new Map([["Lokesh", 37], ["Raj", 35]]);

  type AgeCallback = (err: Error | null, age?: number) => void;

  function findAge(name: string, cb: AgeCallback): void {
    setTimeout(() => {
      const age = ages.get(name);
      if (age === undefined) {
        cb(new Error("Not found: " + name));
      } else {
        cb(null, age);
      }
    }, 100);
  }

  findAge("Raj", (err, age) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("Raj is " + age);               // Raj is 35
  });

  findAge("John", (err, age) => {
    if (err) {
      console.log(err.message);                 // Not found: John
      return;
    }
    console.log("John is " + age);
  });
}
