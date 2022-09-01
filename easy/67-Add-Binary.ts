let a = "11",
  b = "1";

function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let sum = "";

  while (i >= 0 || j >= 0) {
    let A: any = a[i] ? a[i] : 0;
    let B: any = b[j] ? b[j] : 0;
    sum = String(A ^ B ^ carry) + sum;
    if (A === B && A !== String(carry)) {
      carry = Number(!carry);
    }
    i--;
    j--;
  }
  if (carry) {
    sum = String(carry) + sum;
  }

  return sum;
}

addBinary(a as string, b as string);
