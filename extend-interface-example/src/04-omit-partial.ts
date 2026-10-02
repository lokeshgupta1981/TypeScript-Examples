export function omitAndPartial(): void {
  interface User {
    name: string;
    age: number;
  }

  // 1. Replace a property: age comes from a text field as a string
  interface UserForm extends Omit<User, "age"> {
    age: string;
  }

  const form: UserForm = { name: "Raj", age: "35" };

  // 2. Make every inherited property optional
  interface UserUpdate extends Partial<User> {
    id: number;
  }

  const update: UserUpdate = { id: 1, age: 38 };

  const formAge = Number(form.age);             // formAge = 35
  const newAge = update.age;                    // newAge = 38
  const newName = update.name;                  // newName = undefined

  console.log("formAge =", formAge);
  console.log("newAge =", newAge);
  console.log("newName =", newName);
}
