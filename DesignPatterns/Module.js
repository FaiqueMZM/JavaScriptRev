// module
console.log("Module");
// encapsulate private variables and methods

const CounterModule = (function () {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(`Count: ${count}`);
    },
    reset() {
      count = 0;
      console.log("Count reset.");
    },
  };
})();

CounterModule.increment(); // Count: 1
CounterModule.increment(); // Count: 2
CounterModule.reset(); // Count reset.
