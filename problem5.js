// Schema Validator
function validateSchema(obj, schema) {
  const errors = [];

  for (let key in schema) {
    if (!(key in obj)) {
      errors.push(`${key}: missing property`);
    } else if (typeof obj[key] !== schema[key]) {
      errors.push(`${key}: expected ${schema[key]}, got ${typeof obj[key]}`);
    }
  }

  return errors;
}
// i checked every property in the schema
const schema = {
  name: "string",
  age: "number",
  isAdmin: "boolean",
};

console.log(validateSchema({ name: "Ada", age: 21, isAdmin: false }, schema));
// []

console.log(validateSchema({ name: "Ada", age: "21" }, schema));
// ["age: expected number, got string", "isAdmin: missing property"]
