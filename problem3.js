// Deep Freeze - to freeze a current object look into it to find any objects, freeze those objects repeatedly until it returns the original object
function deepFreeze(obj) {
  // first, i went through the object
  for (let key in obj) {
    // then i checked if the value is another object
    if (typeof obj[key] === "object" && obj[key] !== null) {
      // then i froze the object inside it
      deepFreeze(obj[key]);
    }
  }

  // Next, i Froze the main object
  Object.freeze(obj);

  return obj;
}

const config = deepFreeze({
  api: {
    baseUrl: "https://x.com",
    retries: 3,
  },
  debug: false,
});

// The changes did not work because the object is frozen
config.api.baseUrl = "https://changed.com";
config.debug = true;

console.log(config.api.baseUrl, config.debug);
// "https://x.com" false

console.log(Object.isFrozen(config.api));
// true
