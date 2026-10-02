// @ts-check

/**
 * @param {number} price
 * @param {number} quantity
 * @returns {number}
 */
export function total(price, quantity) {
  return price * quantity;
}

const amount = total(5, 3);                   // amount = 15

console.log("amount =", amount);
