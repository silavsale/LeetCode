// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

// Example 1:

const obj = { x: 5, y: 42 };
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

const obj2 = {};
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

const obj3 = [null, false, 0];
// Output: false
// Explanation: The array has 3 elements so it is not empty.

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

function isEmpty(obj: Obj): boolean {
  console.log(obj.length);
  if (!!obj.length) {
    return true;
  }

  if (Object.keys(obj)[0] || Object.keys(obj)[0] === '') {
    return true;
  }

  return false;
}

isEmpty(obj);
isEmpty(obj2);
isEmpty(obj3);
