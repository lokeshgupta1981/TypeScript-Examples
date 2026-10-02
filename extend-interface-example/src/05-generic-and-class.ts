export function genericAndClass(): void {
  // 1. Extending a generic interface
  interface Box<T> {
    value: T;
  }

  interface LabeledBox<T> extends Box<T> {
    label: string;
  }

  const ageBox: LabeledBox<number> = { label: "Lokesh", value: 37 };

  // 2. An interface that extends a class
  class Rectangle {
    width = 0;
    height = 0;
  }

  interface ColoredRectangle extends Rectangle {
    color: string;
  }

  const red: ColoredRectangle = { width: 2, height: 3, color: "red" };
  const area = red.width * red.height;          // area = 6

  console.log("ageBox =", ageBox);
  console.log("area =", area);
}
