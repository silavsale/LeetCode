let aa = "11",
  bb = "1";

function addBinary2(a: string, b: string): string {
  return (parseInt(aa, 2) + parseInt(bb, 2)).toString(2);
}

addBinary2(aa as string, bb as string);


