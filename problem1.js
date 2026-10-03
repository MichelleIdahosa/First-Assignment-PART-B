//Deep Equal
function deepEqual(objA, objB) {
  // First, i checked if they are exactly the same. If is true, then they are equal.
  if (objA === objB) {
    return true;
  }

  // Secondly, i made sure they are both objects
  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  // Then, i checked if have the same number of keys 
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // If the number of keys is not the same, they are not equal
  if (keysA.length !== keysB.length) {
    return false;
  }

  // i went through every key 
  for (const key of keysA) {
    // i check if the second object has this key
    if (!Object.hasOwn(objB, key)) {
      return false;
    }

    // I then checked the values, including values inside nested objects
    if (!deepEqual(objA[key], objB[key])) {
      return false;
    }
  }
// if nothing was different they will return equal
  return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false

console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false
