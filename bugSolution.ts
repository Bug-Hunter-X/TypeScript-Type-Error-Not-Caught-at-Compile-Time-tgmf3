function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(1, '2'); // Throws an error at runtime

//Alternative solution using type guards
function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}
let result2 = addSafe(1,2); // Works as expected
let result3 = addSafe(1, '2'); //Throws Error