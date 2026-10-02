export function commonTasks(): void {
  const nums = [1, 2, 3, 4, 5, 6, 7];

  // 1. Pagination: page 2 with 3 items per page
  const page = 2;
  const size = 3;
  const items = nums.slice((page - 1) * size, page * size);   // items = [4, 5, 6]

  // 2. Split into chunks of 3
  const chunks: number[][] = [];
  for (let i = 0; i < nums.length; i += size) {
    chunks.push(nums.slice(i, i + size));
  }
  // chunks = [[1, 2, 3], [4, 5, 6], [7]]

  // 3. Last n elements: slice(-n) fails for n = 0
  const n = 0;
  const wrong = nums.slice(-n);                 // wrong = all 7 elements
  const right = nums.slice(nums.length - n);    // right = []

  console.log("items =", JSON.stringify(items), "| chunks =", JSON.stringify(chunks));
  console.log("wrong =", JSON.stringify(wrong), "| right =", JSON.stringify(right));
}
