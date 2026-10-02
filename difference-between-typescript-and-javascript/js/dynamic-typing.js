let temp = 42;
const type1 = typeof temp;                    // type1 = "number"

temp = "Hello";                               // allowed
const type2 = typeof temp;                    // type2 = "string"

console.log("type1 =", type1, "| type2 =", type2);
