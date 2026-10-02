export function quickReference(): void {
  const fruits: string[] = ["apple", "banana"];

  // 1. Add to the end
  const length = fruits.push("cherry");         // length = 3
  console.log("length =", length, "| fruits =", JSON.stringify(fruits));

  // 2. Add to the beginning
  fruits.unshift("mango");                      // ["mango", "apple", "banana", "cherry"]
  console.log(JSON.stringify(fruits));

  // 3. Insert at index 2
  fruits.splice(2, 0, "kiwi");                  // ["mango", "apple", "kiwi", "banana", "cherry"]
  console.log(JSON.stringify(fruits));

  // 4. Append all items of another array
  fruits.push(...["grape", "lime"]);            // grape and lime at the end

  // 5. New array, original unchanged
  const nums = [1, 2, 3];
  const atEnd = [...nums, 4];                   // atEnd = [1, 2, 3, 4]
  const atStart = [0, ...nums];                 // atStart = [0, 1, 2, 3]
  const merged = nums.concat([4, 5]);           // merged = [1, 2, 3, 4, 5]
  const inserted = nums.toSpliced(1, 0, 9);     // inserted = [1, 9, 2, 3]

  console.log(JSON.stringify(fruits));
  console.log("atEnd =", atEnd, "| atStart =", atStart, "| merged =", merged, "| inserted =", inserted, "| nums =", nums);
}
