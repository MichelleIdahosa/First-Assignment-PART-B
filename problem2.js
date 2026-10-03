//Object Diff - this is to check for something that is in the new object but not in the old object, or something that is in the old object but not in the new object, or something that is in both objects but has a different value.
function diffObjects(oldObj, newObj) {
  // i started by setting up an empty buckets to store the answers
  let result = {
    added: {},
    removed: {},
    changed: {},
  };

  // i then Looked at everything in the old object
  for (let key in oldObj) {
    if (!(key in newObj)) {
      result.removed[key] = oldObj[key];
    }
    // so that if the key is there but the value doesn't match it changed
    else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key],
      };
    }
  }

  // here i took a Look at everything in the new object and if the old object never had this key, it's brand new
  for (let key in newObj) {
    if (!(key in oldObj)) {
      result.added[key] = newObj[key];
    }
  }

  return result;
}

console.log(
  diffObjects(
    { name: "Setemi", role: "Engineer", country: "Jamaica" },
    { name: "Setemi", role: "Senior Engineer", city: "Kingston" },
  ),
);
// Result:
// {
//   added: { city: "Kingston" },
//   removed: { country: "Jamaica" },
//   changed: { role: { from: "Engineer", to: "Senior Engineer" } }
// }
