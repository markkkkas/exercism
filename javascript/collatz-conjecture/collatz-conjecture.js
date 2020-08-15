//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n, count = 0) => {
  if (n <= 0) throw 'Only positive numbers are allowed';
  if (n === 1) return count;
  return steps(n % 2 === 0 ? n / 2 : 3 * n + 1, count + 1);
};
