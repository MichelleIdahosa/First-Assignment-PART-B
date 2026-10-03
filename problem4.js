//Private Counter Factory
//started by creating a function called creatCounter()
function createCounter() {
  let count = 0;

  //this will increase count
  return {
    increment() {
      count++;
    },

    //this will decrease the count
    decrement() {
      count--;
    },
    // this gets the current count
    get value() {
      return count;
    },
  };
}
// here i createred the counter
const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.value); // 1
console.log(counter.count); // undefined
