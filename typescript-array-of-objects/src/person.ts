export interface Person {
  name: string;
  age: number;
}

export function samplePeople(): Person[] {
  return [
    { name: "Lokesh", age: 37 },
    { name: "Raj", age: 35 },
    { name: "John", age: 40 },
  ];
}
