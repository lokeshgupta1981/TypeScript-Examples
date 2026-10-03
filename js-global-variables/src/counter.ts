let count = 0;

export function nextRequest(): number {
  count += 1;
  return count;
}

export function currentCount(): number {
  return count;
}
