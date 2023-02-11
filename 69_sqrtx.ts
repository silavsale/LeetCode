function mySqrt(x: number): number {
  let estimate = x / 2;

  for (let i = 0; i < 10; i++) {
    estimate = 0.5 * (estimate + x / estimate);
  }

  return parseInt(estimate.toString());
}

mySqrt(8);
